import { createStore } from 'redux';

const initialState = {
  fetching: false,
  fetched: false,
  trainings: [],
  error: null
};

export function TrainingReducer (state = initialState, action) {

	switch(action.type) {

        case 'FETCHING_TRAININGS': {
        	state = {...state, fetching: true}; // spread is not working? use stage-2 preset
          break;
        }
        case 'FETCHING_ERROR': {
          state = {...state, fetching: false, fetched: true, error: action.payload};
          break;
        }
        case 'FETCHED_TRAININGS': {
          state = {...state, fetching: false, fetched: true, trainings: action.payload};
          break;
        }

    }
	
	return state;
}