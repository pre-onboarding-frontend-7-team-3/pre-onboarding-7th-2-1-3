import Header from "components/Header";
import CarDetail from "components/CarDetail";
import { CarContext } from "context/CarContext";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
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
