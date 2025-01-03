import { connectToDB } from "@/db";
import { User } from "@/models";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: `${process.env.GOOGLE_CLIENT_ID}`,
      clientSecret: `${process.env.GOOGLE_CLIENT_SECRET}`,
    }),
  ],
  callbacks: {
    async session({ session }) {
      // store the user id from MongoDB to session
      const sessionUser = (await User.findOne({
        email: session.user.email,
      })) as IUserObj;
      session.user._id = sessionUser._id.toString();

      return session;
    },
    async signIn({ profile }) {
      try {
        await connectToDB();

        // check if user already exists
        const userExists = await User.findOne({ email: profile?.email });

        // if not, create a new document and save user in MongoDB
        if (!userExists) {
          await User.create({
            email: profile?.email,
            username: profile?.name?.replace(" ", "").toLowerCase(),
            // @ts-expect-error: we get user avatar from pitchure not image
            image: profile?.picture,
          });
        }

        return true;
      } catch (error) {
        console.log("Error checking if user exists: ", error);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
