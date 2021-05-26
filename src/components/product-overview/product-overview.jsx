import React from "react";
import { useSelector } from "react-redux";
import PRODUCTS_LIST from "../../content/products-list";
import style from "./product-overview.scss";
import QuantityModifier from "../../components/quantity-modifier";

const ProductOverview = ({ history }) => {
  // fetch("http://localhost:3000/products")
  //   .then((response) => response.json())
  //   .then((commits) => console.log(commits));
  const cn = useSelector((state) => state.filter.categoryName);
  const manufacturer = useSelector((state) => state.filter.manufacturer);
  let filteredProducts = PRODUCTS_LIST;
  if (cn.length) {
    filteredProducts = filteredProducts.filter((el) =>
      cn.find((e) => e === el.category)
    );
  }
  if (manufacturer.length) {
    filteredProducts = filteredProducts.filter((el) =>
      manufacturer.find((e) => e === el.manufacturer)
    );
  }

  const productsList = filteredProducts.map((el) => (
    <div key={el.title} className={style.productsList}>
      <img
        href="#"
        alt="Product picture"
        onClick={() => history.push(`/products/${el.id}`)}
      />
      <p className={style.title}>{el.title}</p>
      <p className={style.price}>Price: {el.price}</p>
      <QuantityModifier productId={el.id}></QuantityModifier>
    </div>
  ));

  if (productsList.length) {
    return productsList;
  }

  return (
    <div className={style.noProducts}>
      <span>&#128039;</span>
      There's nothing in here ^_^
      <span>&#129413;</span>
    </div>
  );
};

export default ProductOverview;
