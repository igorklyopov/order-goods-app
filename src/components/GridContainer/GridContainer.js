import style from './StylesGridContainer.module.css';

export default function GridContainer({ children, tag, className, ...props }) {
  const Tag = tag;
  const classNames = [style.gridContainer, className];

  return (
    <Tag className={classNames.join(' ')} {...props}>
      {children}
    </Tag>
  );
}

GridContainer.defaultProps = {
  children: null,
  tag: 'div',
  className: '',
};
