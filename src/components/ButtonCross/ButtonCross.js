import style from './StylesButtonCross.module.css';
import Button from '../Button/Button';
import { ReactComponent as IconCross } from '../../images/icons/icon-cross.svg';

export default function ButtonCross() {
  return (
    <Button className={style.modalCloseBtn} type="button">
      <IconCross />
    </Button>
  );
}
