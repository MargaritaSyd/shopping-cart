import React, { createContext, ReactElement, CSSProperties } from 'react';
import { useProduct } from '../hooks/useProduct';

import styles from '../styles/styles.module.css'
import { ProductContextProps, Product, OnChangeArgs, InitialValues, ProductCardHandlers } from '../interfaces/productInterfaces';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  // children?: ReactElement | ReactElement[];
  children: (args: ProductCardHandlers) => JSX.Element,
  className?: string;
  style?: CSSProperties;
  onChange?: (args: OnChangeArgs) => void
  value?: number;
  initialValues?: InitialValues;
}

const ProductCard = ({product, children, className, style, onChange, value, initialValues}: Props) => {

  const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct({ onChange, product, value, initialValues });

  return (
    <Provider value={{
      counter,
      increaseBy,
      product,
      maxCount,
    }}>
      <div
        className={ `${styles.productCard} ${className}` }
        style={style}
      >
        { children({
          count: counter,
          isMaxCountReached,
          product,
          increaseBy,
          reset,
        }) }
      </div>
    </Provider>
  );
}

export default ProductCard;
