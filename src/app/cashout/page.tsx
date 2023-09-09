"use client";
import React, { useState } from "react";

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

function Cashout() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    creditNumber: "",
    ExpDate: "",
    CCV: "",
  });

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
  };

  return (
    <div className="cash-out-container ">
      <section className="flex p-7 bg-white flex-col w-fit flex-wrap ">
        <h1 className="text-2xl font-bold">Cash Out</h1>
        <form
          className="flex  flex-col gap-2 mt-10"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="flex flex-col gap-2">
            <label>Name on card</label>
            <input
              className="border-solid border-2 border-gray-400  shadow-lg focus:border-solid focus:border-2 rounded-lg p-2 focus:border-black"
              placeholder="Name"
              type="test"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
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
              onChange={(e) =>
                setFormData({ ...formData, CCV: e.target.value })
              }
            ></input>
          </div>
          <p>
            {Object.values(errors).map((err: any) => (
              <>
                <p className="text-red-500">{err} </p>
              </>
            ))}
          </p>
          <button className="bg-blue-600 text-white p-3 mt-4" type="submit">
            Cash Out
          </button>
        </form>
      </section>
      <section className="flex bg-white flex-col flex-wrap  ">Items</section>
    </div>
  );
}

export default Cashout;

{
  /* <div className="w-full md:w-1/2 p-4 mt-4 md:mt-0 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Cart Items</h2>
        <div className="flex flex-col gap-2">
          {user?.data?.cart?.map((item) => (
            <div key={item.id} className="flex justify-between items-center">
              <p>
                {item.quantity} of {item.name}
              </p>
              <p>EGP{item.price.toFixed(2)} </p>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <p className="text-xl font-semibold">
            Total:{" "}
            {user?.data?.cart
              ?.reduce((total, item) => {
                return total + item.price * item.quantity;
              }, 0)
              ?.toFixed(2) || "0.00"}{" "}
            EGP
          </p>
        </div>
      </div>
    </div>
  ); */
}
