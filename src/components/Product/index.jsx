import "./style.scss";
import { Count } from "../Count";
import { ButtonDelete } from "../ButtonDelete";
import priceFormatter from "../../utils/priceFormater"

export const Product = ({
  productNameItemProperty,
  deleteProductProperty,
  countPlusProperty,
  countMinusProperty,
  changeValueProperty,
}) => {
  const { img, title, priceTotal, count, id } = productNameItemProperty;

  return (
    <section className="product">
      <div className="product__img">
        <img src={`./img/products/${img}`} alt={title} />
      </div>
      <div className="product__title">{title}</div>
      <div className="product__count">
        {
          <Count
            propertyCount={count}
            propertyPlus={countPlusProperty}
            propertyMinus={countMinusProperty}
            propertyId={id}
            propertyChangeValue={changeValueProperty}
          />
        }
      </div>
      <div className="product__price">{priceFormatter(priceTotal)} руб.</div>
      <div className="product__controls">
        <ButtonDelete
          propertyDeleteProduct={deleteProductProperty}
          propertyDeleteProductId={id}
        />
      </div>
    </section>
  );
};
