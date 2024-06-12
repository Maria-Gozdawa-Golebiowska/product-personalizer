import styles from './Colors.module.scss';
import clsx from 'clsx';
import shortid from 'shortid';
import PropTypes from 'prop-types';


const prepareColor = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  };

const Colors = (props) => {
    return (
      <div className={styles.colors}>
        <h3 className={styles.optionLabel}>Colors</h3>
        <ul className={styles.choices}>
          {props.colors.map((color) => (
            <li key={shortid()}>
              <button onClick={() => { props.setCurrentColor(color) }} className={clsx(prepareColor(color), color === props.currentColor && styles.active)}>  </button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  Colors.propTypes = {
    colors: PropTypes.array.isRequired,
    currentColor: PropTypes.string.isRequired,
    setCurrentColor: PropTypes.func.isRequired,
  };
  

export default Colors;
