import { useEffect, useState } from 'react';

import style from './StylesUserDataForm.module.css';
import styleOrderBtn from '../Button/StylesOrderBtn.module.css';
import styleBasicBtn from '../Button/StylesBasicBtn.module.css';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { ReactComponent as IconArrowRight } from '../../images/icons/icon-arrow-right.svg';
import {
  makeValidation,
  checkEmpty,
  checkIsLetter,
  checkIsNumber,
  checkLength,
} from '../../utils/validationInputFields';

export default function UserDataForm() {
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userNameValidation, setUserNameValidation] = useState(null);
  const [userPhoneValidation, setUserPhoneValidation] = useState(null);
  const [showBtnClearName, setShowBtnClearName] = useState(false);
  const [showBtnClearPhone, setShowBtnClearPhone] = useState(false);

  useEffect(() => {
    userName === '' ? setShowBtnClearName(false) : setShowBtnClearName(true);
    userPhone === '' ? setShowBtnClearPhone(false) : setShowBtnClearPhone(true);
  }, [userName, userPhone]);

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

    setUserName('');
    setUserPhone('');
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

  const inputNameClasses = [style.userDataInput, style.userName];
  const inputPhoneClasses = [style.userDataInput, style.userPhone];
  const orderBtnClasses = [styleBasicBtn.basicBtn, styleOrderBtn.orderBtn];

  return (
    <form className={style.userDataForm} onSubmit={onUserDataFormSubmit}>
      <Input
        label="Input name"
        name="userName"
        placeholder="Name"
        value={userName}
        setValue={setUserName}
        showBtnClear={showBtnClearName}
        className={inputNameClasses.join(' ')}
        error={userNameValidation?.message}
        onChange={onInputUserDataChange}
        onBlur={onInputUserDataBlur}
      />
      <Input
        type="tel"
        label="Input phone number"
        name="userPhone"
        placeholder="Number"
        value={userPhone}
        setValue={setUserPhone}
        showBtnClear={showBtnClearPhone}
        className={inputPhoneClasses.join(' ')}
        error={userPhoneValidation?.message}
        onChange={onInputUserDataChange}
        onBlur={onInputUserDataBlur}
      />

      <Button type="submit" className={orderBtnClasses.join(' ')}>
        <span className={styleOrderBtn.orderBtnText}>Order</span>
        <IconArrowRight className={styleOrderBtn.iconArrowRight} />
      </Button>
    </form>
  );
}
