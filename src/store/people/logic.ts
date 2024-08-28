import axios from 'axios';
import { createLogic } from 'redux-logic';

import {
  setPeopleItemsAction,
  setPeopleCountAction,
  setPeopleLoaderAction,
  setPersonAction,
} from './actions';
import PeopleActionTypes from './actionTypes';

const fetchPeopleLogic = createLogic({
  type: PeopleActionTypes.FETCH_PEOPLE,
  latest: true,
  async process({ action }, dispatch, done) {
    
    dispatch(setPeopleLoaderAction(true));
    try {
      const currentPage = action.payload;

      const response = await axios.get(
        `https://swapi.dev/api/people/?page=${currentPage}`,
      );
        
      dispatch(setPeopleItemsAction(response.data.results));

      dispatch(setPeopleCountAction(response.data.count));
      
    } catch (error) {
      console.error('Error fetching people data: ', error);
    } finally {
      dispatch(setPeopleLoaderAction(false));
      done();
    }
  },
});

const fetchPeopleIdLogic = createLogic({
  type: PeopleActionTypes.FETCH_PEOPLE_ID,
  latest: true,
  async process({ action }, dispatch, done) {

    dispatch(setPeopleLoaderAction(true));

    try {
      const id = action.payload;

      const response = await axios.get(`https://swapi.dev/api/people/${id}`);

      dispatch(setPersonAction(response.data));

    } catch (error) {
      console.error('Error fetching people id data: ', error);
    } finally {
      dispatch(setPeopleLoaderAction(false));
      done();
    }
  },
});

export default [fetchPeopleLogic, fetchPeopleIdLogic];
