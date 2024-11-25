import { Prompt } from "@/models";
import { connectToDB } from "@/db";

export const GET = async () => {
  try {
    await connectToDB();

    const prompts = await Prompt.find({}).populate("creator");

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    console.log("Error in getAllPrompts ", error);
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};
