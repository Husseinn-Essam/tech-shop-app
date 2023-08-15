"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const UserStatus: React.FC = () => {
  const { data: session, status } = useSession();
  return (
    <div>
      <button>Sign Up</button>
      <button>Log In</button>
    </div>
  );
};

export default UserStatus;
