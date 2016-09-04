import { combineReducers } from 'redux';  
import { UserReducer }  from './user.reducer';
import { TrainingReducer }  from './training.reducer';

export const RootReducer = combineReducers({  
    user: UserReducer,
    training: TrainingReducer
});