import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

import { CarContext } from 'context/CarContext';

import Header from 'components/Header';
import CarDetail from 'components/CarDetail';
import { getCars } from 'api';

const Detail = () => {
  const router = useRouter();
  const { id } = router.query;


  
  const {
    carState: { carList, selectedCar },
    findCars,
  } = useContext(CarContext);

  useEffect(() => {
    findCars(id);
  }, [carList]);

  return (
    <section>
      <Header title="차량상세" />
      {selectedCar && <CarDetail selectedCar={selectedCar} />}
    </section>
  );
};

export default Detail;

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const res = await getCars()

  return {
    props: res.filter(car => {
      return car.id === Number(params.id)
    })[0]
  }
}
