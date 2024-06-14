import { makeOrder } from "@/services/userServices";
import React from "react";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

type FormData = {
  name: string;
  creditNumber: string;
  ExpDate: string;
  CCV: string;
};

type FormErrors = {
  creditNumber: string;
  ExpDate: string;
  CCV: string;
};
export const CashOutForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    creditNumber: "",
    ExpDate: "",
    CCV: "",
  });
  const { data: session, status } = useSession();
  const router = useRouter();
  const [errors, setErrors] = useState<FormErrors>({
    creditNumber: "",
    ExpDate: "",
    CCV: "",
  });

  const isValidCardNumber = (creditNumber: string) => {
    const regex = /^[0-9]{16}$/;
    return regex.test(creditNumber);
  };

  const isValidExpirationDate = (ExpDate: string) => {
    const currentDate = new Date();
    const [month, year] = ExpDate.split("/").map(Number);
    const expiration = new Date(2000 + year, month - 1);

    return expiration > currentDate;
  };

  const isValidCVV = (CCV: string) => {
    return CCV.length === 3;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors: FormErrors = {
      creditNumber: "",
      ExpDate: "",
      CCV: "",
    };

    if (!isValidCardNumber(formData.creditNumber)) {
      newErrors = { ...newErrors, creditNumber: "Invalid card number" };
    }

    if (!isValidExpirationDate(formData.ExpDate)) {
      newErrors = { ...newErrors, ExpDate: "Invalid expiration date" };
    }

    if (!isValidCVV(formData.CCV)) {
      newErrors = { ...newErrors, CCV: "Invalid CVV" };
    }

    setErrors(newErrors);

    if (Object.values(newErrors).every((error) => !error)) {
      makeOrder(session?.user?._doc._id).then(() => {
        router.push("/order-history");
        console.log(session?.user);
      });
      // router.push("/order-history");
    }
  };

  return (
    <section className="lg:w-2/3 md:w-full sm:w-full md:block flex p-7 bg-white flex-col flex-wrap rounded-lg">
      <h1 className="text-2xl font-bold">Cash Out</h1>
      <form
        className="flex flex-wrap  flex-col gap-2 mt-10"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="flex flex-col gap-2">
          <label>Name on card</label>
          <input
            className="border-solid border-2 border-gray-400  shadow-lg focus:border-solid focus:border-2 rounded-lg p-2 focus:border-black"
            placeholder="Name"
            type="test"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          ></input>
        </div>
        <div className="flex flex-col gap-2">
          <label>Credit Card Number</label>
          <input
            className="border-solid border-2 border-gray-400  shadow-lg focus:border-solid focus:border-2 rounded-lg p-2 focus:border-black"
            placeholder="XXXX-XXXX-XXXX-XXXX"
            value={formData.creditNumber}
            onChange={(e) =>
              setFormData({ ...formData, creditNumber: e.target.value })
            }
          ></input>
        </div>
        <div className="flex flex-col gap-2">
          <label>Expiration Date</label>
          <input
            className="border-solid border-2 border-gray-400  shadow-lg focus:border-solid focus:border-2 rounded-lg p-2 focus:border-black"
            placeholder="MM/YY"
            value={formData.ExpDate}
            onChange={(e) =>
              setFormData({ ...formData, ExpDate: e.target.value })
            }
          ></input>
        </div>
        <div className="flex flex-col gap-2">
          <label>CCV</label>
          <input
            className="border-solid border-2 border-gray-400  shadow-lg focus:border-solid focus:border-2 rounded-lg p-2 focus:border-black"
            placeholder="CCV"
            value={formData.CCV}
            onChange={(e) => setFormData({ ...formData, CCV: e.target.value })}
          ></input>
        </div>
        <div>
          {Object.values(errors).map((err: any, index: number) => (
            <p key={index} className="text-red-500">
              {err}
            </p>
          ))}
        </div>
        <button className="bg-blue-600 text-white p-3 mt-4" type="submit">
          Cash Out
        </button>
        <button
          className="bg-blue-600 text-white p-3 mt-4"
          onClick={(e) => {
            e.preventDefault();
            makeOrder(session?.user?._doc._id);
            router.push("/order-history");
          }}
        >
          Bruh Just let me test your app
        </button>
      </form>
    </section>
  );
};
