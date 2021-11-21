import PropTypes from 'prop-types';

import styles from '../Container/StylesContainer.module.css';

const Container = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;

Container.defaultProps = {
  children: null,
};

Container.propTypes = {
  children: PropTypes.node,
};
