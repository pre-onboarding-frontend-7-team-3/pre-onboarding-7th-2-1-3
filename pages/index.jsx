import { useCarState } from "hooks/useCarContext";

import CarList from "components/CarList";
import Header from "components/Header";
import Nav from "components/Nav";

import Loading from "components/common/Loading/Loading";

function Home() {
  const {
    carState: { carList, loading },
  } = useCarState();

  return (
    <div id="app-layout">
      <Header title="전체차량" header />
      <Nav />
      {loading ? <Loading /> : <CarList carList={carList} />}
    </div>
  );
}

export default Home;
