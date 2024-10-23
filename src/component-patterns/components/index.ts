import ProductCard from './ProductCard';

import { ProductButtons } from './ProductButtons';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';
import { ProductCardHOCProps } from '../interfaces/productInterfaces';

export { ProductButtons } from './ProductButtons';
export { ProductImage } from './ProductImage';
export { ProductTitle } from './ProductTitle';

export const ProductCardHOC: ProductCardHOCProps = Object.assign( ProductCard, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons,
})

export default ProductCardHOC;