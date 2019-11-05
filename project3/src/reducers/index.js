//import every reducer here.
import counterReducer from './counter';
import searchReducer from './search';
import albumsReducer from './albums';
import filterReducer from './filter';
import detailsReducer from './details';
import pageReducer from './page';
import {combineReducers} from 'redux';


const allReducers = combineReducers({
    counter : counterReducer,
    search : searchReducer,
    albums : albumsReducer,
    filter : filterReducer,
    details : detailsReducer,
    page : pageReducer
})

export default allReducers;



//App.js:
//Visualize:

//import {useSelector} from 'react-redux';
//const counter = useSelector(state => state.counter);

//Action:
//import {increment} from './actions';
//import {usedispatch} from 'react-redux';
//const dispatch = useDispatch();
//onClick{() => dispatch(increment)}