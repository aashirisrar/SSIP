"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

const AdminPage = () => {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const ord = await axios.post("api/getorders");
      console.log(ord.data.products);
      setProducts(ord.data.products);
      setOrders(ord.data.data);
    };

    fetchOrders();
  }, []);

  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <main className="flex-1">
        <div className="container1 relative">
          <div className="text-center my-4 mb-10">
            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] hidden md:block">
              Orders
            </h1>
          </div>
          <div className="flex flex-col items-center">
            {orders.map((order: any) => (
              <div className="mb-6 shadow-lg rounded-xl p-4" key={order.id}>
                <div>Order Id: {order.id}</div>
                <div className="mt-2 text-[#D72E3B] font-semibold">
                  Order Status:
                  {order.orderStatus ? " Delivered" : " Not Delivered"}
                </div>
                <div className="mt-2 font-semibold">Items:</div>
                <div>
                  {products.map((product: any) => {
                    if (product.orderId === order.id) {
                      return (
                        <div
                          className="flex justify-between"
                          key={product.orderId}
                        >
                          <div>{product.name}</div>
                          <div>x{product.quantity}</div>
                        </div>
                      );
                    }
                  })}
                </div>
                <div className="mt-2 font-semibold text-lg">
                  Total Price: {order.totalPrice}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminPage;
