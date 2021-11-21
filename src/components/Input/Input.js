import PropTypes from 'prop-types';

import style from './StylesInput.module.css';
import styleBtnClear from '../Button/StylesBtnClear.module.css';
import Button from '../Button/Button';
import { ReactComponent as IconCross } from '../../images/icons/icon-cross.svg';

export default function Input({
  type,
  label,
  showLable,
  showBtnClear,
  setValue,
  error,
  className,
  ...props
}) {
  const onClearBtnClick = () => {
    setValue('');
  };

  const btnClasses = [styleBtnClear.btnClear];

  if (error) btnClasses.push(styleBtnClear.errorBtn);

  return (
    <div className={style.inputWrap}>
      {showBtnClear && (
        <Button
          className={btnClasses.join(' ')}
          type="button"
          onClick={onClearBtnClick}
        >
          <IconCross />
        </Button>
      )}

      <label className={style.inputLabel}>
        {label && (
          <span className={showLable ? style.inputLabelText : 'visuallyHidden'}>
            {label}
          </span>
        )}
        <input type={type} className={className} {...props} />
      </label>
      {error && <span className={style.inputErrorText}>{error}</span>}
    </div>
  );
}

Input.defaultProps = {
  type: 'text',
  error: null,
  setValue: () => {},
};

Input.propTypes = {
  type: PropTypes.string,
  error: PropTypes.string,
  setValue: PropTypes.func,
  label: PropTypes.string,
  showLable: PropTypes.bool,
  showBtnClear: PropTypes.bool,
};
