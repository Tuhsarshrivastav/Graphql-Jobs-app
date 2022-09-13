import React from "react";

const Hero = () => {
  return (
    <section className="text-gray-600 bg-gradient-to-r from-[#edd95e] body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Work with GraphQL in a modern startup.
          </h1>
          <p className="mb-8 leading-relaxed">
            Join our weekly GraphQL jobs digest and be the first one to know
            about new positions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
