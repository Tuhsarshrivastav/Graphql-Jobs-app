import React from "react";

const Navbar = () => {
  return (
    <header class="text-gray-600 body-font border">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span class="ml-3 text-xl">GraphQL.jobs</span>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
