import React, { useEffect, useState } from "react";
import { Product, ProductInCart } from "../interfaces/productInterfaces";

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{[key:string]: ProductInCart}>({});
  
  const onProductCountChange = ({count, product}:{count: number, product: Product}) => {
    setShoppingCart( oldShoppingCart => {
      /////
      if (count === 0) {
        // delete ({...oldShoppingCart})[product.id] ///OTRO METODO PARA ELIMINAR
        const { [product.id]: toDelete, ...rest } = oldShoppingCart;
        return rest;
      }
      return {
        ...oldShoppingCart,
        [product.id]: {...product, count}
      }
     /////
    //  const productInCard: ProductInCart = oldShoppingCart[product.id] || { ...product, count: 0 }
    //  if ( Math.max( productInCard.count + count, 0 ) > 0 ) {
    //   productInCard.count += count;
    //   return {
    //     ...oldShoppingCart, [product.id]:{...product, count}
    //   }
    //  }
    //  if (count === 0 ) {
    //    const { [product.id]: toDelete, ...rest } = oldShoppingCart;
    //    return rest;
    //  }
    //  return oldShoppingCart
     ////
    } )
  }

  // useEffect(() => {
  //   onProductCountChange({count, product})
  // }, [count, product]);
  return {
    shoppingCart,
    onProductCountChange,
  }
};
