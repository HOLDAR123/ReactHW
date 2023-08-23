import React from "react";
import { useGetProductsQuery, useDeleteProductMutation } from "../../redux";

import s from "./ProductsContainer.module.css";
import ProductsCreator from "../ProductsCreator";

function ProductsContainer() {
  const { data = [], isLoading } = useGetProductsQuery("getProducts");

  const [deleteProduct] = useDeleteProductMutation();

  if (isLoading) return <h1>Loading...</h1>;

  const handleDeleteProduct = (id: number) => {
    deleteProduct(id);
  };

  return (
    <div className={s.container}>
      <ProductsCreator />
      <ul className={s.productList}>
        {data.map((item: any) => (
          <li key={item.id} className={s.productItem}>
            <img className={s.productImage} src={item.img} alt="flowers" />
            <div className={s.productInfo}>
              <span className={s.productName}>Name: {item.name}</span>
              <span className={s.productPrice}>Price: {item.price}</span>
              <button
                type="button"
                className={s.deleteIcon}
                onClick={() => handleDeleteProduct(item.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsContainer;
