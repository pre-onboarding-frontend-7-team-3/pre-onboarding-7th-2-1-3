import { CarContext } from 'context/CarContext';
import { useContext } from 'react';

export const useCarState = () => {
  const state = useContext(CarContext);
  if (!state) {
    throw new Error('Error finding CarContext Provider');
  }
  return state;
};
