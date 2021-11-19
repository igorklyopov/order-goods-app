// import style from './name.module.css';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getGoodsAllData } from '../../redux/goods/goodsOperations';
import { getGoodsAll } from '../../redux/goods/goodsSelectors';
import style from './StylesGoodsList.module.css';
import styleBtn from '../Button/StylesGoodsInfoBtnBuy.module.css';
import Container from '../Container/Container';
import GridContainer from '../GridContainer/GridContainer';
import GridItem from '../GridItem/GridItem';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import UserDataForm from '../UserDataForm/UserDataForm';
import ButtonCross from '../ButtonCross/ButtonCross';
import { ReactComponent as IconCross } from '../../images/icons/icon-cross.svg';
import { ReactComponent as IconDollar } from '../../images/icons/icon-dollar.svg';

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

  const goodsListClasses = ['list', style.goodsList];

  return (
    <Container>
      <GridContainer tag="ul" className={goodsListClasses.join(' ')}>
        {goods.map(({ name, category, price }) => (
          <GridItem tag="li" key={name} className={style.goodsInfoCard}>
            <span className={style.goodsInfoCategory}>{category}</span>
            <h2 className={style.goodsInfoTitle}>{name}</h2>
            <div className={style.goodsInfoPriceWrap}>
              <span className={style.goodsInfoPrice}>
                <IconDollar className={style.goodsInfoPriceIcon} />
                {price}
              </span>
              <Button
                type="button"
                className={styleBtn.goodsInfoBtnBuy}
                onClick={toggleModal}
              >
                Buy
              </Button>
            </div>
          </GridItem>
        ))}
      </GridContainer>
      <Button type="button">Buy cheapest</Button>
      {showModal && (
        <Modal toggleModal={toggleModal}>
          {/* <ButtonCross /> */}
          <Button
            type="button"
            onClick={() => {
              console.log('onCloseModalBtnClick');
            }}
          >
            <IconCross />
          </Button>
          <UserDataForm />
        </Modal>
      )}
    </Container>
  );
}
