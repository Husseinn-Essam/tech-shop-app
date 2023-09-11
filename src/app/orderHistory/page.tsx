import React from "react";

const OrderHistory = () => {
  return (
    <div className="cart mt-4 p-3 flex flex-col">
      <h2 className="text-xl font-semibold mb-2 text-white">Order History</h2>
      <table className="w-full border-collapse bg-gray-100">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 text-left"> Order ID</th>
            <th className="py-2 px-4 text-center">Date</th>
            <th className="py-2 px-4 text-left">Total Amount</th>
            <th className="py-2 px-4 text-left">Status</th>
          </tr>
        </thead>
        {/* {session ? <Cart /> : ""} */}
      </table>
      {/* <button className="bg-white text-black mx-auto mt-5 p-5 rounded-lg">
            Cash Out
          </button> */}
    </div>
  );
};

export default OrderHistory;
