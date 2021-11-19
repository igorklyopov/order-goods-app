import style from './StylesInput.module.css';

export default function Input({ type, label, showLable, error, ...props }) {
  return (
    <div>
      <label>
        {label && (
          <span className={showLable ? '' : 'visuallyHidden'}>{label}</span>
        )}
        <input type={type} {...props} />
      </label>
      {error && <span className="inputError">{error}</span>}
    </div>
  );
}

Input.defaultProps = {
  type: 'text',
  error: null,
};
