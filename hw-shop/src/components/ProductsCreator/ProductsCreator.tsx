import React, { useState } from "react";

import { useAddProductMutation } from "../../redux";

import s from "./ProductsCreator.module.css";

function ProductsCreator() {
  const [newProductName, setNewProductName] = useState<string>("");
  const [newProductPrice, setNewProductPrice] = useState<string>("");
  const [newProductImg, setNewProductImg] = useState<string>("");

  const [addProduct] = useAddProductMutation();

  const handleAddProduct = async (
    name: string,
    price: string,
    img: string | ""
  ) => {
    await addProduct({
      name: newProductName,
      price: newProductPrice,
      img: newProductImg,
    });
    setNewProductName("");
    setNewProductPrice("");
    setNewProductImg("");
  };
  return (
    <div className={s.container}>
      <div className={s.addNewProduct}>
        <input
          type="text"
          placeholder="Name"
          value={newProductName}
          onChange={(e) => setNewProductName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Price"
          value={newProductPrice}
          onChange={(e) => setNewProductPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="Url"
          value={newProductImg}
          onChange={(e) => setNewProductImg(e.target.value)}
        />
        <button
          type="submit"
          onClick={() =>
            handleAddProduct(newProductName, newProductPrice, newProductImg)
          }
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default ProductsCreator;
