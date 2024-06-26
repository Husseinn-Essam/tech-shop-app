"use client";
import React, { useState } from "react";
import { getProviders, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import LoadingScreen from "@/components/LoadingScreen";
type FormDataType = {
  username: string;
  email: string;
  password: string;
};
type FormErrorType = {
  username: string;
  email: string;
  password: string;
};

const RegisterPage: React.FC = () => {
  const [errors, setErrors] = useState<FormErrorType>({
    username: "",
    email: "",
    password: "",
  });
  const router = useRouter();
  const [formData, setFormData] = useState<FormDataType>({
    username: "",
    email: "",
    password: "",
  });
  const [Loading, setLoading] = useState(false);
  const validateForm = () => {
    const errors: FormErrorType = {
      username: "",
      email: "",
      password: "",
    };

    if (!formData.username.trim()) {
      errors.username = "Username is required";
      setErrors(errors);

      return false;
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is not valid";
      setErrors(errors);
      return false;
    }

    if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
      setErrors(errors);
      return false;
    }
    console.log(errors.username);

    // setErrors(errors);
    return true;
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (validateForm()) {
      try {
        console.log("hi");

        setLoading(true);
        const res = await fetch("/api/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: formData.username,
            email: formData.email,
            password: formData.password,
          }),
        });
        try {
          const sign = await signIn("credentials", {
            username: formData.username,
            password: formData.password,
            callbackUrl: "/store?cat=",
            redirect: false,
          });
          console.log(sign.error);
          if (sign.ok) {
            setLoading(false);
            router.push("/store?cat=");
          }
        } catch (e) {
          console.log(e);
        }
      } catch (e) {
        console.log(e);
      }
    }
  };
  if (Loading === true) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate">
      <div className="flex flex-col items-center bg-slate border-2 border-secondary p-8 rounded-lg shadow-md w-full max-w-sm">
        <h1 className=" text-3xl font-semibold mb-4">Register</h1>
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
              className="input input-bordered w-full max-w-xs w-full p-2 border border-gray-300 rounded-md  bg-slate "
            />
          </div>
          <div className="mb-4">
            <label className="block text-white font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="input input-bordered w-full max-w-xs w-full p-2 border border-gray-300 rounded-md bg-slate "
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
              className="text-white input input-bordered w-full max-w-xs w-full p-2 border border-gray-300 rounded-md bg-slate "
            />
          </div>
          <div>
            {Object.values(errors).map((err: any, index: number) => (
              <p key={index} className="text-red-500">
                {err}
              </p>
            ))}
          </div>
          <button
            type="submit"
            className=" text-white py-2 px-4 rounded-md btn btn-secondary"
          >
            Register
          </button>
        </form>
        {/* <div className="my-4 w-full flex items-center before:mt-0.5  before:flex-1 before:border-t before:border-slate-500 after:mt-0.5 after:flex-1 after:border-t after:border-slate-500">
          <p className="mx-4 mb-0 text-center font-semibold dark:text-slate-500">
            Or
          </p>
        </div>{" "} */}
      </div>
    </div>
  );
};

export default RegisterPage;
