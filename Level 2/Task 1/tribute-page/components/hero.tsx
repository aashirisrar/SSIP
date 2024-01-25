import React from "react";

const Hero = () => {
  return (
    <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-4 md:py-8 md:pb-8 lg:py-16 lg:pb-20">
      <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] hidden md:block">
        Steve Jobs
      </h1>
      <span
        className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl"
        data-br=":R8rq6la:"
        data-brr="1"
        style={{
          display: "inline-block",
          verticalAlign: "top",
          textDecoration: "inherit",
          maxWidth: 560,
        }}
      >
        Visionary, Entreprenuer and Inventor
      </span>
      <div className="flex w-full items-center justify-center mt-8 gap-8">
        <div className="rounded-lg overflow-hidden">
          <img src="/jobs.jpeg" />
        </div>
        <div>
          <div className="text-2xl font-semibold">
            Sometimes when you innovate, you make mistakes. It is best to admit
            them quickly, and get on with improving your other innovations.
          </div>
          <div className="text-lg mt-3 text-muted-foreground ">
            - Steve Jobs
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
