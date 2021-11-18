// import style from './name.module.css';
// import goodsAPI from '../../services/goodsAPI';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getGoodsAllData } from '../../redux/goods/goodsOperations';
import GridContainer from '../GridContainer/GridContainer';
import GridItem from '../GridItem/GridItem';

export default function GoodsList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGoodsAllData());
  }, [dispatch]);

  return (
    <GridContainer>
      <GridItem></GridItem>
    </GridContainer>
  );
}
