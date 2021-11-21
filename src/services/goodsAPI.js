const BASIC_URL = 'https://run.mocky.io/v3';

async function fetchGoodsAll() {
  return await fetch(`${BASIC_URL}/b7d36eea-0b3f-414a-ba44-711b5f5e528e`).then(
    (res) => res.json()
  );
}

const goodsAPI = { fetchGoodsAll };

export default goodsAPI;
