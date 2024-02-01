import React from "react";

const About = () => {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <main className="flex-1">
        <div className="container1 relative">
          <div className="text-center my-4 mb-10">
            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] hidden md:block">
              About Us
            </h1>
          </div>
          <div className="flex flex-col items-center gap-5">
            <div className="text-start w-1/2">
              <div>
                Prizza is a pizza outlet located in the midst of Lahore. This is
                the best pizza outlet that you would enjoy eating from!
              </div>
            </div>
            <div className="w-1/2">
              <div className="text-2xl font-medium">Contact Us</div>
              <div className="flex flex-col gap-1 mt-4">
                <div>prizza@gmail.com</div>
                <div>+923343847384</div>
                <div>Lahore, Pakistan</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
