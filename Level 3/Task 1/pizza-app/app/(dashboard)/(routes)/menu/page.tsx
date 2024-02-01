"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

const Menu = () => {
  const [arr, setArr] = useState([]);
  useEffect(() => {
    const fetchPizzas = async () => {
      const pizz = await axios.post("api/getpizzas");
      setArr(pizz.data.data);
    };

    fetchPizzas();
  }, []);
  return (
    <div className="relative flex min-h-screen flex-col bg-background mb-12">
      <main className="flex-1">
        <div className="container1 relative">
          <div className="text-center my-4 mb-10">
            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] hidden md:block">
              Our Delicious Menu
            </h1>
          </div>
          <div className="flex gap-6 items-center justify-center flex-wrap">
            {arr.length ? (
              arr.map((pizz: any) => (
                <div className="w-1/3 shadow-lg rounded-xl" key={pizz.name}>
                  <img
                    src={pizz.image}
                    className="rounded-t-xl"
                    alt="pizza-1"
                  />
                  <div className="p-4">
                    <div className="text-md font-medium">{pizz.name}</div>
                    <div className="flex justify-between mt-2">
                      <div className="flex gap-2">
                        <div className="px-3 py-1 text-sm w-fit rounded-full bg-[#D72E3B] text-white">
                          {pizz.description}
                        </div>
                        {/* <div className="px-3 py-1 text-sm w-fit rounded-full bg-[#D72E3B] text-white">
                          {pizz.bestSeller}
                        </div> */}
                      </div>
                      <div className="text-md font-medium">${pizz.cost}</div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <></>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Menu;
