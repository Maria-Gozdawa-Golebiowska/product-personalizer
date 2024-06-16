import styles from './ProductForm.module.scss';
import Button from '../Button/Button';
import OptionSize from '../OptionSize/OptionSize';
import Colors from '../Colors/Colors';
import PropTypes from 'prop-types';
import { useMemo } from 'react';

const ProductForm = (props) => {

  const addPrice = (a, b) => {
    return a + b;
  };

  const getPrice = useMemo(
    () => addPrice(props.basePrice, props.currentPrice),
    [props.basePrice, props.currentPrice]
  );

  const cartSummary = e => {
    e.preventDefault();
    console.log('Cart:', '\n',
      props.title, '\n',
      'Price: ' + getPrice, '\n',
      'Size: ' + props.currentSize, '\n',
      'Color: ' + props.currentColor
    );
  }

  return (
    <form onSubmit={cartSummary}>
      <OptionSize
        size={props.size}
        sizes={props.sizes}
        currentSize={props.currentSize}
        setCurrentSize={props.setCurrentSize}
        setCurrentPrice={props.setCurrentPrice}
      />
      <Colors
        colors={props.colors}
        currentColor={props.currentColor}
        setCurrentColor={props.setCurrentColor}
      />
      <Button className={styles.button} type={'submit'}>
        <span className='fa fa-shopping-cart' />
      </Button>
    </form>
  );
};

ProductForm.propTypes = {
  sizes: PropTypes.array.isRequired,
  colors: PropTypes.array.isRequired,
  currentColor: PropTypes.string.isRequired,
  currentSize: PropTypes.string.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
  setCurrentPrice: PropTypes.func.isRequired,
  basePrice: PropTypes.number.isRequired, 
  currentPrice: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default ProductForm;
