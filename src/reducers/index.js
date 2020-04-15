import {combineReducers} from 'redux';
import pokedataReducer from './pokedataReducer'
import pokedetailsReducer from "./pokedetailsReducer";

export default combineReducers({
    pokedata:pokedataReducer,
    pokedetails: pokedetailsReducer,
})