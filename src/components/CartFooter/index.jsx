import "./style.scss";
import priceFormatter from "../../utils/priceFormater"

export const CartFooter = ({propertyTotal}) => {

  const {count, price} = propertyTotal

  return (
    <footer className="cart-footer">
      <div className="cart-footer__count">{count} шт.</div>
      <div className="cart-footer__price">{priceFormatter(price)} руб.</div>
    </footer>
  );
};
