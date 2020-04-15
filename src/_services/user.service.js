import axios from 'axios';
import {authenticationService} from './authentication.service';
import {handleResponse} from '../_helpers';

export const userService = {
  createNewUser
};

function createNewUser(newUser) {
  axios.post('/api/users', newUser)
    .then(handleResponse.handleResponse)
    .then(res => {
      if (res.data){
        alert("Success");
        authenticationService.storeUserAuth(newUser);
      } else{
        console.log("ERROR");
    }
    })
    .catch(err => console.log(err))
}
