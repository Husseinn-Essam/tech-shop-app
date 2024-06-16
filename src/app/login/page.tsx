"use client";
import React, { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import LoadingScreen from "@/components/LoadingScreen";

const LoginPage: React.FC = () => {
  const [err, setErr] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const { data: session, status } = useSession();
  const router = useRouter();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setErr(""); // Reset error message
    try {
      setLoading(true);
      const sign = await signIn("credentials", {
        username: formData.username,
        password: formData.password,
        callbackUrl: "/store?cat=",
        redirect: false,
      });

      setLoading(false); // Ensure loading state is reset
      if (sign.ok) {
        router.push("/store?cat=");
      } else {
        setErr("Invalid username or password");
      }
    } catch (e) {
      setLoading(false); // Ensure loading state is reset
      setErr("An error occurred. Please try again.");
      console.log(e);
    }
  };

  // Renders loading screen when auth
  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate">
      <div className="flex flex-col items-center bg-slate border-2 border-secondary p-8 rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-3xl font-semibold mb-4">Log In</h1>
        <form className="flex flex-col items-center" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-white font-medium mb-2">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="input input-bordered w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="input input-bordered w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="text-white py-2 px-4 rounded-md btn btn-secondary"
          >
            Log In
          </button>
          <p className="mt-2 text-red-600 font-bold">{err}</p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
