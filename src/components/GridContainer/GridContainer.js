import style from './StylesGridContainer.module.css';
import addClassNames from '../../utils/addClassNames';

export default function GridContainer({ children, tag, className, ...props }) {
  const Tag = tag;
  const classNames = addClassNames(style.gridContainer, className);

  return (
    <Tag className={classNames} {...props}>
      {children}
    </Tag>
  );
}

GridContainer.defaultProps = {
  children: null,
  tag: 'div',
  className: '',
};
