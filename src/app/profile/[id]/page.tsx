"use client";

import { Profile } from "@/components";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const UserProfile = ({ params }: { params: Promise<{ id: string }> }) => {
  const searchParams = useSearchParams();
  const userName = searchParams.get("name");

  const [userPosts, setUserPosts] = useState<Array<IPromptObj>>([]);
  const [id, setId] = useState<string>('');

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${id}/posts`);
      const data = await response.json();      

      setUserPosts(data);
    };

    if (id) fetchPosts();
  }, [id]);

  useEffect(() => {
    const getId = async () => {
      const { id } = await params;
      if (id) setId(id);
    };

    getId();
  }, []);

  return (
    <Profile
      name={userName || ""}
      desc={`Welcome to ${userName}'s personalized profile page. Explore ${userName}'s exceptional prompts and be inspired by the power of their imagination`}
      data={userPosts}
    />
  );
};

export default UserProfile;
