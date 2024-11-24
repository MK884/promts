import { Schema, model, models } from "mongoose";

const UserSchema = new Schema<IUser>(
  {
    email: {
      type: String,
      // unique: [true, "Email already exists!"],
      unique: true,
      required: [true, "Email is required!"],
    },
    username: {
      type: String,
      required: [true, "Username is required!"],
      match: [
        /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
        "Username invalid, it should contain 8-20 alphanumeric letters and be unique!",
      ],
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = models.User || model("User", UserSchema);

export default User;
