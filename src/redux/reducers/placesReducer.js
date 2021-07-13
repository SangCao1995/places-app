import {placesTypes} from '../actions/actionTypes';

const initialState = {
  places: [],
};

const placesReducer = (state = initialState, action) => {
  switch (action.type) {
    case placesTypes.ADD_PLACE:
      const newPlaces = {
        id: new Date().toString(),
        title: action.data.title,
        image: action.data.image,
      };
      return {...state, places: [...state.places, newPlaces]};
  }

  return state;
};

export default placesReducer;
