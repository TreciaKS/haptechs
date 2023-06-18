import React from 'react'

const ProductsLayout = ({children}) => {
  return (
    <section
      className="relative w-full max-w-6xl px-10 mx-auto text-gray-800 bg-white md:text-left lg:p-16"
      id="products"
    >
      <h1 className="mt-5 mb-4 text-5xl text-center underline max-md:text-3xl underline-offset-8">
        Products
      </h1>
      {children}
    </section>
  );
}

export default ProductsLayout