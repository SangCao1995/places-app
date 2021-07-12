import {placesTypes} from './actionTypes';

export const placesActions = {
  addPlace,
};

function addPlace(data) {
  return {
    type: placesTypes.ADD_PLACE,
    data,
  };
}
