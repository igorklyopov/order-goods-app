import { useState } from 'react';
import style from './StylesUserDataForm.module.css';
import Input from '../Input/Input';
import Button from '../Button/Button';
import {
  makeValidation,
  checkEmpty,
  checkIsLetter,
  checkIsNumber,
  checkLength,
} from '../../utils/validationInputFields';

export default function UserDataForm() {
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState(0);
  const [userNameValidation, setUserNameValidation] = useState(null);
  const [userPhoneValidation, setUserPhoneValidation] = useState(null);

  const validationUserNameOpts = {
    checkEmpty,
    checkIsLetter,
  };

  const validationUserPhoneOpts = {
    checkEmpty,
    checkIsNumber,
    checkLength,
  };

  const onUserDataFormSubmit = (e) => {
    e.preventDefault();

    const validationUserName = makeValidation(userName, validationUserNameOpts);

    const validationUserPhone = makeValidation(
      userPhone,
      validationUserPhoneOpts
    );

    setUserNameValidation(validationUserName);
    setUserPhoneValidation(validationUserPhone);

    if (!validationUserName.isValid || !validationUserPhone.isValid) return;

    const data = new FormData(e.currentTarget);

    const userData = {
      userName: data.get('userName'),
      userPhone: Number(data.get('userPhone')),
    };
    console.log(userData);
  };

  const onInputUserDataChange = (e) => {
    if (e.target.name === 'userName') {
      setUserNameValidation(null);
      setUserName(e.target.value);
    }

    if (e.target.name === 'userPhone') {
      setUserPhoneValidation(null);
      setUserPhone(e.target.value);
    }
  };

  const onInputUserDataBlur = (e) => {
    if (e.target.name === 'userName') {
      const validationUserName = makeValidation(
        userName,
        validationUserNameOpts
      );

      setUserNameValidation(validationUserName);
    }

    if (e.target.name === 'userPhone') {
      const validationUserPhone = makeValidation(
        userPhone,
        validationUserPhoneOpts
      );

      setUserPhoneValidation(validationUserPhone);
    }
  };

  return (
    <form onSubmit={onUserDataFormSubmit}>
      <Input
        label="Input name"
        name="userName"
        //value={userName}
        // required
        error={userNameValidation?.message}
        onChange={onInputUserDataChange}
        onBlur={onInputUserDataBlur}
      />
      <Input
        type="tel"
        label="Input phone number"
        name="userPhone"
        // required
        // value={userPhone}
        error={userPhoneValidation?.message}
        onChange={onInputUserDataChange}
        onBlur={onInputUserDataBlur}
      />
      <Button type="submit">Order</Button>
    </form>
  );
}
