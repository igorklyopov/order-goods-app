// import style from './name.module.css';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getGoodsAllData } from '../../redux/goods/goodsOperations';
import { getGoodsAll } from '../../redux/goods/goodsSelectors';
import style from './StylesGoodsList.module.css';
import Container from '../Container/Container';
import GridContainer from '../GridContainer/GridContainer';
import GridItem from '../GridItem/GridItem';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import UserDataForm from '../UserDataForm/UserDataForm';

export default function GoodsList() {
  const dispatch = useDispatch();
  const goods = useSelector(getGoodsAll);

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    dispatch(getGoodsAllData());
  }, [dispatch]);

  return (
    <Container>
      <GridContainer tag="ul" className={style.goodsList}>
        {goods.map(({ name, category, price }) => (
          <GridItem tag="li" key={name}>
            <h2>{name}</h2>
            <span>{category}</span>
            <span>{price}</span>
            <Button type="button" onClick={toggleModal}>
              Buy
            </Button>
          </GridItem>
        ))}
      </GridContainer>
      {showModal && (
        <Modal toggleModal={toggleModal}>
          <UserDataForm />
        </Modal>
      )}
    </Container>
  );
}
