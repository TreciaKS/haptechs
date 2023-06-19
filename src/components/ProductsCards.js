import React from "react";
import ProductsLayout from "../Layouts/ProductsLayout";

const ProductsCards = ({ products }) => {
  return (
    <ProductsLayout>
      {products.map((product) => (
        <article className="items-center py-10 -mx-10 md:flex" key={product.id}>
          <div className="w-full px-10 mb-10 md:mb-0 md:w-1/2">
            <img
              src={product.image}
              className="relative z-10 w-full"
              alt={product.alt}
              loading='lazy'
            />
          </div>
          <div className="w-full px-10 md:w-1/2">
            <div className="mb-10">
              <h1 className="mb-5 text-2xl font-bold uppercase">
                {product.title}
              </h1>
              <p className="text-sm">{product.description}</p>
            </div>
            <div>
              <div className="inline-block mr-5 align-bottom">
                <span className="text-2xl leading-none align-baseline">$</span>
                <span className="text-5xl font-bold leading-none align-baseline">
                  {product.price}
                </span>
                <span className="text-2xl leading-none align-baseline">
                  .99
                </span>
              </div>
              <div className="inline-block align-bottom">
                <button
                  className="px-10 py-2 font-semibold rounded-full opacity-75 text-cream bg-accent hover:text-secondary hover:opacity-100 max-sm:mt-3 max-xl:mt-4"
                  disabled
                  aria-label="Coming Soon"
                >
                  COMING SOON
                </button>
              </div>
            </div>
          </div>
        </article>
      ))}
    </ProductsLayout>
  );
};

export default ProductsCards;
