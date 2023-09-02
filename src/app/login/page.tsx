"use client";
import React, { useState } from "react";
import { getProviders, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
const RegisterPage: React.FC = () => {
  const [err, setErr] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const { data: session } = useSession();
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
    try {
      const sign = await signIn("credentials", {
        username: formData.username,
        password: formData.password,
        callbackUrl: "/store?cat=",
        redirect: false,
      });
      if (sign.ok) {
        router.back();
      }
      setErr(sign.error);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h1 className=" text-3xl font-semibold mb-4">Log In</h1>
        <form className="flex flex-col items-center" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Log In
          </button>
          <p className="mt-2 text-red-600 text-bold">{err ? err : ""}</p>
        </form>
        {/* <div className="my-4 w-full flex items-center before:mt-0.5  before:flex-1 before:border-t before:border-slate-500 after:mt-0.5 after:flex-1 after:border-t after:border-slate-500">
          <p className="mx-4 mb-0 text-center font-semibold dark:text-slate-500">
            Or
          </p>
        </div>{" "}
        <button
          className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-300"
          onClick={() => signIn("google")}
        >
          Sign in with Google
        </button> */}
      </div>
    </div>
  );
};

export default RegisterPage;
