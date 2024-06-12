import React, { useState} from 'react';
import PropTypes from 'prop-types';
import styles from './Product.module.scss';
import ProductImage from '../ProductImage/ProductImage';
import ProductButton from '../ProductForm/ProductForm';

const Product = (props) => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);
  const [currentPrice, setCurrentPrice] = useState(props.sizes[0].additionalPrice);

  const getPrice = () => {
    return props.basePrice + currentPrice;
  };

  const cardData ={
    name: props.title,
    price: getPrice(),
    size: currentSize,
    color: currentColor
 }

 return (
  <article className={styles.product}>
    <ProductImage
      title={props.title}
      name={props.name}
      color={currentColor}
    ></ProductImage>

    <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>

        <ProductButton
          sizes={props.sizes}
          size={props.size}
          currentSize={currentSize}
          setCurrentSize={setCurrentSize}
          price={props.currentPrice}
          additionalPrice={props.additionalPrice}
          setCurrentPrice={setCurrentPrice}
          colors={props.colors}
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
          productToBasket={cardData}
          onClick={props.onClick}
          title={props.title}
        ></ProductButton>

      </div>
    </article>
  );
};

Product.propTypes = {
 id: PropTypes.number.isRequired,
 title: PropTypes.string.isRequired,
 basePrice: PropTypes.number.isRequired,
 name: PropTypes.string.isRequired,
 basePrice: PropTypes.number.isRequired

};

export default Product;
