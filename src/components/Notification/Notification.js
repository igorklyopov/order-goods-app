import PropTypes from 'prop-types';

import style from './StylesNotification.module.css';

export default function Notification({ children, message, ...props }) {
  return (
    <p className={style.message} {...props}>
      {message}
    </p>
  );
}

Notification.defaultProps = {
  children: null,
  message: '',
};

Notification.propTypes = {
  children: PropTypes.node,
  message: PropTypes.string,
};
