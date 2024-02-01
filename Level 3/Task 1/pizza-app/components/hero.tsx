import React from "react";

const Hero = () => {
  return (
    <section className="container1 flex justify-between  max-w-screen-2xl overflow-hidden items-center ">
      <div className="flex max-w-[750px] flex-col items-start gap-6 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
        <a
          className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium"
          href="/menu"
        >
          🎉{" "}
          <div
            data-orientation="vertical"
            role="none"
            className="shrink-0 bg-border w-[1px] mx-2 h-4"
          ></div>{" "}
          <span className="sm:hidden">New flavours.</span>
          <span className="hidden sm:inline">New flavours and more.</span>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-1 h-4 w-4"
          >
            <path
              d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] hidden md:block">
          PIZZA
          <br />
          DELIVERY
        </h1>
        <span
          className="max-w-[650px] text-lg text-muted-foreground sm:text-xl"
          data-br=":R8rq6la:"
          data-brr="1"
          style={{
            display: "inline-block",
            verticalAlign: "top",
            textDecoration: "inherit",
            maxWidth: 540,
          }}
        >
          Browse through our mouthwatering menu and experience pizza like never
          before! With a tantalizing array of flavors, toppings, and crusts,
          your perfect slice is just a tap away. Order now and get ready for a
          piping hot, freshly made pizza delivered straight to your doorstep.
          Satisfaction guaranteed, one slice at a time.
        </span>
        <div className="flex items-center space-x-4 md:pb-10">
          <a
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-[#D72E3B] text-white shadow hover:bg-primary/90 h-10 px-4 py-2 rounded-[6px]"
            href="/order"
          >
            Order Now
          </a>
        </div>
      </div>
      <div className="w-1/2 py-6 md:py-16 lg:py-26 overflow-hidden">
        <div className="w-[740px]">
          <img
            className="h-1/2 rounded-l-[100px]"
            src="/hero.jpg"
            alt="pizza-cool"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
