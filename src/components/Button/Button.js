import style from './StylesButton.module.css';
import addClassNames from '../../utils/addClassNames';

export default function Button({
  children,
  type,
  disabled,
  className,
  onClick,
  ...props
}) {
  const classNames = addClassNames('button', className);
  return (
    <button
      className={classNames}
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
