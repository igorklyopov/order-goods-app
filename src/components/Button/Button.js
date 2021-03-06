import PropTypes from 'prop-types';

export default function Button({
  children,
  type,
  disabled,
  className,
  onClick,
  ...props
}) {
  const classNames = ['button', className];
  return (
    <button
      className={classNames.join(' ')}
      type={type}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  children: null,
  type: 'button',
  disabled: false,
  onClick: () => {},
};

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};
