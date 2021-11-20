import style from './StylesInput.module.css';
import Button from '../Button/Button';
import { ReactComponent as IconCross } from '../../images/icons/icon-cross.svg';

export default function Input({
  type,
  label,
  showLable,
  error,
  className,
  ...props
}) {
  const btnClasses = [style.btnClear];
  if (error) btnClasses.push(style.errorBtn);

  return (
    <>
      <div className={style.inputWrap}>
        <Button
          className={btnClasses.join(' ')}
          type="button"
          onClick={() => {}}
        >
          <IconCross />
        </Button>

        <label className={style.inputLabel}>
          {label && (
            <span
              className={showLable ? style.inputLabelText : 'visuallyHidden'}
            >
              {label}
            </span>
          )}
          <input type={type} className={className} {...props} />
        </label>
      </div>
      {error && <span className={style.inputErrorText}>{error}</span>}
    </>
  );
}

Input.defaultProps = {
  type: 'text',
  error: null,
};
