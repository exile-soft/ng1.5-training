import { createStore } from 'redux';

const initialState = {};

export function TrainingReducer (state = initialState, action) {

	if (!action || !action.type) {
   		return state;
  	}

	switch(action.type) {

        case 'GET_ALL_TRAININGS': {
        	// debugger;
        	state = {...state, name: action.payload}; // spread is not working? use stage-2 preset
        }

    }
	
	return state;
}