import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getGoodsAllData } from '../../redux/goods/goodsOperations';
import {
  getGoodsAll,
  getGoodsAllIsLoading,
  getGoodsAllError,
} from '../../redux/goods/goodsSelectors';

import style from './StylesGoodsList.module.css';
import styleBasicBtn from '../Button/StylesBasicBtn.module.css';
import styleBtnBuy from '../Button/StylesGoodsInfoBtnBuy.module.css';
import styleByCheapBtn from '../Button/StylesBuyCheap.module.css';
import styleModal from '../Modal/StylesModalGoodsOrder.module.css';
import Container from '../Container/Container';
import Notification from '../Notification/Notification';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import UserDataForm from '../UserDataForm/UserDataForm';
import { ReactComponent as IconDollar } from '../../images/icons/icon-dollar.svg';

export default function GoodsList() {
  const dispatch = useDispatch();
  const goods = useSelector(getGoodsAll);
  const goodsAllIsLoading = useSelector(getGoodsAllIsLoading);
  const goodsAllError = useSelector(getGoodsAllError);

  const [showModal, setShowModal] = useState(false);
  const [activeGoodsIndex, setActiveGoodsIndex] = useState(0);

  useEffect(() => {
    dispatch(getGoodsAllData());
  }, [dispatch]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const showGoodsOrderCard = (index) => {
    setActiveGoodsIndex(index);
    toggleModal();
  };

  const onBuyCheapBtnClick = () => {
    const minValueIndex = goods.reduce(
      (acc, curr, i) => (goods[acc].price < curr.price ? acc : i),
      0
    );
    showGoodsOrderCard(minValueIndex);
  };

  const goodsListClasses = ['list', style.goodsList];
  const byCheapBtnClasses = [
    styleBasicBtn.basicBtn,
    styleByCheapBtn.byCheapBtn,
  ];

  return (
    <Container>
      {goodsAllIsLoading && <Notification message="Loading..." />}

      {goodsAllError ? (
        <Notification message="Something went wrong... Try again later" />
      ) : (
        <>
          <ul className={goodsListClasses.join(' ')}>
            {goods.map(({ category, name, price }, index) => (
              <li key={name} className={style.goodsListItem}>
                <span className={style.goodsInfoCategory}>{category}</span>
                <h2 className={style.goodsInfoTitle}>{name}</h2>
                <div className={style.goodsInfoOrderSection}>
                  <span className={style.goodsInfoPrice}>
                    <IconDollar className={style.goodsInfoPriceIcon} />
                    {price}
                  </span>
                  <Button
                    type="button"
                    className={styleBtnBuy.goodsInfoBtnBuy}
                    onClick={() => showGoodsOrderCard(index)}
                  >
                    Buy
                  </Button>
                </div>
              </li>
            ))}
          </ul>

          <Button
            type="submit"
            className={byCheapBtnClasses.join(' ')}
            onClick={onBuyCheapBtnClick}
          >
            <span className={styleByCheapBtn.byCheapBtnText}>Buy cheapest</span>
          </Button>
        </>
      )}

      {showModal && (
        <Modal toggleModal={toggleModal} className={styleModal.modalGoodsOrder}>
          <span className={style.goodsInfoCategory}>
            {goods[activeGoodsIndex].category}
          </span>
          <h2 className={style.goodsInfoTitle}>
            {goods[activeGoodsIndex].name}
          </h2>
          <span className={style.goodsInfoPrice}>
            <IconDollar className={style.goodsInfoPriceIcon} />
            {goods[activeGoodsIndex].price}
          </span>
          <UserDataForm />
        </Modal>
      )}
    </Container>
  );
}
