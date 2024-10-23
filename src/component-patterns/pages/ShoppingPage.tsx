import React from 'react';
import ProductCard from '../components/ProductCard';
import { ProductButtons, ProductTitle, ProductImage } from '../components';
import { useShoppingCart } from '../hooks/useShoppingCart';
import '../styles/custom-styles.css'
import { products } from '../data/products';


const ShoppingPage = () => {
  const { onProductCountChange, shoppingCart} = useShoppingCart();
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{display:'flex', flexDirection: 'row'}}>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}>
        {
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              className='bg-dark'
              onChange={(e) => onProductCountChange(e)}
              value={shoppingCart[product.id]?.count || 0 }
            >{
              () => (
              <>
                <ProductImage img={product.img} className='custom-image' />
                <ProductTitle title={product.title} className="text-white" />
                <ProductButtons className="custom-buttons" />
              </>
              )
            }
            </ProductCard>
          ))
        }
      </div>

      <div className='shopping-cart' style={{width: '100px'}}>
        {
          Object.entries(shoppingCart).map(([key, product]) => (
            <ProductCard
              key={key}
              product={product}
              className='bg-dark'
              onChange={(e) => onProductCountChange(e)}
              style={{width: '100px'}}
              value={product.count}
            >{
              () => (
                <>
                  <ProductImage img={product.img} className='custom-image' />
                  <ProductTitle title={product.title} className="text-white" />
                  <ProductButtons className="custom-buttons" />
                </>
              )}
            </ProductCard>
          ))
        }
      </div>
      </div>
    </div>
  );
}

export default ShoppingPage;