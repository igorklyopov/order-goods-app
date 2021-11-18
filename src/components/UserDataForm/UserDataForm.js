import style from './StylesUserDataForm.module.css';
import Input from '../Input/Input';
import Button from '../Button/Button';

export default function UserDataForm() {
  const onUserDataFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onUserDataFormSubmit}>
      <Input type="text" label="Input phone number" />
      <Input type="tel" label="Input phone number" />
      <Button type="submit">Order</Button>
    </form>
  );
}
