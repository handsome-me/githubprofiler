import { combineReducers } from 'redux';
//import posts from '../reducer/post'
 import auth from './countInfo';
 import bio from './bio';
 import mostPopularData from './mostPopular';
 import followersList from './followersList';

export default combineReducers({
 // posts,
  //auth,
  auth,
  bio,
  mostPopularData,
  followersList

});
