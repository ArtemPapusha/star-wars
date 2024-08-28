import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { default as logger } from 'redux-logger';
import { createLogicMiddleware } from 'redux-logic';

import filmsReducer from './films/reducer';
import peopleReducer from './people/reducer';
import planetsReducer from './planets/reducer';
import rootLogic from './rootLogic';
import speciesReducer from './species/reducer';
import starshipsReducer from './starships/reducer';
import vehiclesReducer from './vehicles/reducer';

const logicMiddleware = createLogicMiddleware(rootLogic);

// @ts-expect-error logger
const middlewares = applyMiddleware(logger, logicMiddleware);
const enhancer = composeWithDevTools(middlewares);

const rootReducer = combineReducers({
  people: peopleReducer,
  planets: planetsReducer,
  films: filmsReducer,
  vehicles: vehiclesReducer,
  starships: starshipsReducer,
  species: speciesReducer,
});

const store = createStore(rootReducer, enhancer);

export default store;
