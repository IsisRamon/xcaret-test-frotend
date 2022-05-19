import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "~/redux/redux";
import {IInitialState} from "~/interfaces"

export const loadState = ():IInitialState => {
  try {
    let serializedState = localStorage.getItem("landingpage");
    if (serializedState === null) {
      return undefined;
    }    
    let algo:IInitialState = serializedState = JSON.parse(serializedState);
    return algo;
  } catch (err) {    
    return undefined;
  }
};

const persistedState = loadState();
const store = createStore(
  reducer, 
  persistedState, 
  applyMiddleware(thunk) 
);

const saveState = state => {
  try {
    let serializedState = JSON.stringify(state);
    
    localStorage.setItem("landingpage", serializedState);
    localStorage.setItem("landingpage_version", "1.0.0");
  } catch (err) {
    
  }
};


store.subscribe(() => {
  saveState(store.getState());
});

export default store;