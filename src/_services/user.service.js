import axios from "axios";
import { authenticationService } from "./authentication.service";
import { handleResponse } from "../_helpers";

export const userService = {
  createNewUser,
  getUser
};

function createNewUser(newUser) {
  axios
    .post("/api/user", newUser)
    .then(handleResponse.handleResponse)
    .then((res) => {
      if (res.data) {
        alert("Success");
        authenticationService.storeUserAuth(newUser);
      } else {
        console.log("ERROR");
      }
    })
    .catch((err) => console.log(err));
}

//Gets users with email and pass (req.email and req.password)
async function getUser(req) {
  console.log(req);
  axios
    .get("/api/user", {params: {email: req.email, password: req.password}
  })
    .then((res) => {
      if (res.data) {
        console.log('we have data');
        return res.data;
      } else {
        console.log('no data');
        let poop = 'poop'
        return poop;
      }
    })
    .catch((err) => console.log(err));
}
