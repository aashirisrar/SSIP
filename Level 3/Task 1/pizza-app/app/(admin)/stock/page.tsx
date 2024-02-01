"use client";

import { StockForm } from "@/components/stock-form";
import { Button } from "@/components/ui/button";
import axios from "axios";
import React, { useEffect, useState } from "react";

const StockPage = () => {
  const [products, setProducts] = useState([]);

  const fetchOrders = async () => {
    const ord = await axios.post("api/getstock");
    setProducts(ord.data.products);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const deleteProduct = async (prodId: any) => {
    const values = { id: prodId };
    await axios.post("api/deleteproduct", values);
    fetchOrders();
  };

  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <main className="flex-1">
        <div className="container1 relative">
          <div className="text-center my-4 mb-10">
            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] hidden md:block">
              Stock Management
            </h1>
          </div>
          <div className="flex flex-col items-center my-6">
            <div className="my-4 text-lg font-semibold">Add Stock</div>
            <StockForm />
          </div>
          <div className="text-center font-semibold mb-4 mt-14 text-lg">
            Current Items in Stock
          </div>
          {/* ------------------------------------------------ */}
          <div className="flex flex-col items-center">
            {products.map((products: any) => (
              <div className="mb-6 shadow-lg rounded-xl p-4" key={products.id}>
                <div>Product Id: {products.id}</div>
                <div className="mt-2 font-semibold flex gap-4">
                  Stock Status:
                  {products.quantity ? (
                    <div className="text-green-700">In Stock</div>
                  ) : (
                    <div className="text-red-700">Not in Stock</div>
                  )}
                </div>
                <div className="mt-2 font-semibold">Quantity:</div>
                <div>
                  <div className="flex justify-between" key={products.id}>
                    <div>{products.name}</div>
                    <div>x{products.stock}</div>
                  </div>
                  <Button
                    className="my-2"
                    onClick={() => deleteProduct(products.id)}
                  >
                    Delete Product
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default StockPage;
