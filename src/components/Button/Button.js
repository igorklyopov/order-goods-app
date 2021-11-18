import style from './StylesButton.module.css';

export default function Button({
  children,
  type,
  disabled,
  onClick,
  ...props
}) {
  return (
    <button type={type} disabled={disabled} onClick={onClick} {...props}>
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
