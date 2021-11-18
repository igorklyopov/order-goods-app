import style from './StylesGridItem.module.css';
import addClassNames from '../../utils/addClassNames';

export default function GridItem({ children, tag, className, ...props }) {
  const Tag = tag;
  const classNames = addClassNames(style.gridItem, className);

  return (
    <Tag className={classNames} {...props}>
      {children}
    </Tag>
  );
}

GridItem.defaultProps = {
  children: null,
  tag: 'div',
  className: '',
};
