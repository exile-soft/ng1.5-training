import { createStore } from 'redux';

const initialState = {};

export function UserReducer (state = initialState, action) {

	switch(action.type) {

        case 'CHANGE_NAME': {
        	// debugger;
        	state = {...state, name: action.payload}; // spread is not working? use stage to babel plugin
            break;
        }

    }
	debugger;
	return state;
}