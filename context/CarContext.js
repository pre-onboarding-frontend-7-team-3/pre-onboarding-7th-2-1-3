import {
  createContext,
  useReducer,
  useEffect,
  useCallback,
  useContext,
} from 'react';
import { getCars } from 'apis';
import { carReducer } from 'helpers/useCarReducer';
import { CAR_ACTION_TYPES } from 'constants/actionType';

const state = {
  carList: [],
  loading: false,
  error: null,
  selectedCar: null,
};

export const CarContext = createContext('');

export default function CarContextWrapper({ children }) {
  const [carState, dispatch] = useReducer(carReducer, state);

  const getCarsHandler = useCallback((params = {}) => {
    dispatch({ type: CAR_ACTION_TYPES.GET_CAR_LIST_LOADING });
    getCars(params)
      .then(res => {
        dispatch({ type: CAR_ACTION_TYPES.GET_CAR_LIST_SUCCESS, cars: res });
      })
      .catch(error => {
        dispatch({ type: CAR_ACTION_TYPES.GET_CAR_LIST_ERROR });
        throw new Error(error);
      });
  }, []);

  const findCarsHandler = id => {
    dispatch({ type: CAR_ACTION_TYPES.FIND_CAR_DETAIL, id });
  };

  useEffect(getCarsHandler, []);

  return (
    <CarContext.Provider
      value={{ carState, getCars: getCarsHandler, findCars: findCarsHandler }}
    >
      {children}
    </CarContext.Provider>
  );
}

export const useCarState = () => {
  const state = useContext(CarContext);
  if (!state) {
    throw new Error('Error finding CarContext Provider');
  }
  return state;
};