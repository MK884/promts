interface IUser {
  email: string;
  username: string;
  image?: string;
}
interface IUserObj {
  _id: string;
  email: string;
  username: string;
  image?: string;
  created_at: string;
  updated_at: string;
}

interface IPrompt {
  creator: IUserObj;
  prompt: string;
  tag: string;
}

interface IPromptObj {
  _id: string;
  creator: IUserObj;
  prompt: string;
  tag: string;
  created_at: string;
  updated_at: string;
}