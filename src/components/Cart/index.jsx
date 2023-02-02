import { useEffect, useState } from "react";
import { CartFooter } from "../CartFooter";
import { CartHeader } from "../CartHeader";
import { Product } from "../Product";
import data from "./../../data";

export const Cart = () => {
  const [cart, setCart] = useState(data);

  const [total, setTotal] = useState({
    price: cart.reduce((acc, item) => {
      return acc + item.priceTotal;
    }, 0),
    count: cart.reduce((acc, item) => {
      return acc + item.count;
    }, 0),
  });

  useEffect(() => {
    setTotal({
      price: cart.reduce((acc, item) => {
        return acc + item.priceTotal;
      }, 0),
      count: cart.reduce((acc, item) => {
        return acc + item.count;
      }, 0),
    });
  }, [cart]);

  const deleteProductFunction = (id) => {
    setCart((cartNow) => {
      return cartNow.filter((item) => {
        return id !== item.id;
      });
    });
  };

  const countPlusFunction = (id) => {
    setCart((cartNow) => {
      return cartNow.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            count: ++item.count,
            priceTotal: item.count * item.price,
          };
        }
        return item;
      });
    });
  };

  const countMinusFunction = (id) => {
    setCart((cartNow) => {
      return cartNow.map((item) => {
        if (item.id === id) {
          const newCount = item.count - 1 > 1 ? --item.count - 1 : 1;

          return {
            ...item,
            count: newCount,
            priceTotal: newCount * item.price,
          };
        }
        return item;
      });
    });
  };

  const changeValueFunction = (id, value) => {
    setCart((cartNow) => {
      return cartNow.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            count: value,
            priceTotal: value * item.price,
          };
        }
        return item;
      });
    });
  };

  const products = cart.map((item) => {
    return (
      <Product
        productNameItemProperty={item}
        key={item.id}
        deleteProductProperty={deleteProductFunction}
        countPlusProperty={countPlusFunction}
        countMinusProperty={countMinusFunction}
        changeValueProperty={changeValueFunction}
      />
    );
  });

  return (
    <section className="cart">
      <CartHeader />
      {products}
      <CartFooter propertyTotal={total} />
    </section>
  );
};
