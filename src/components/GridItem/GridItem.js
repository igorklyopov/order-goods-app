import style from './StylesGridItem.module.css';

export default function GridItem({ children, tag, className, ...props }) {
  const Tag = tag;
  const classNames = [style.gridItem, className];

  return (
    <Tag className={classNames.join(' ')} {...props}>
      {children}
    </Tag>
  );
}

GridItem.defaultProps = {
  children: null,
  tag: 'div',
  className: '',
};
