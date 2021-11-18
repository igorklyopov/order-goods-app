// import style from './name.module.css';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getGoodsAllData } from '../../redux/goods/goodsOperations';
import { getGoodsAll } from '../../redux/goods/goodsSelectors';
import GridContainer from '../GridContainer/GridContainer';
import GridItem from '../GridItem/GridItem';
import style from './StylesGoodsList.module.css';

export default function GoodsList() {
  const dispatch = useDispatch();
  const goods = useSelector(getGoodsAll);

  useEffect(() => {
    dispatch(getGoodsAllData());
  }, [dispatch]);

  return (
    <GridContainer tag="ul" className={style.goodsList}>
      {goods.map(({ name, category, price }) => (
        <GridItem tag="li" key={name}>
          <h2>{name}</h2>
          <span>{category}</span>
          <span>{price}</span>
        </GridItem>
      ))}
    </GridContainer>
  );
}
