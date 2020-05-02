import axios from "axios";
import { authenticationService } from "./authentication.service";
import { handleResponse, authHeader } from "../_helpers";

export const userService = {
  createNewUser,
  getUser,
};

//Create new user from sign-up, then auth
async function createNewUser(newUser) {
  return axios
    .post("/api/user", newUser)
    .then(handleResponse.handleResponse)
    .then((res) => {
      if (res.data) {
        console.log("Success");
        return authenticationService.storeUserAuth(
          res.data.token,
          res.data.user
        );
      } else {
        console.log("ERROR");
      }
    })
    .catch((err) => console.log(err));
}

//Login user with email and pass (req.email and req.password) - then auth
async function getUser(req) {
  console.log(req);
  return axios
    .get("/api/user", { params: { email: req.email, password: req.password } })
    .then(handleResponse.handleResponse)
    .then((res) => {
      if (res.data) {
        console.log("we have data");
        console.log(res.data);
        return authenticationService.storeUserAuth(
          res.data.token,
          res.data.user
        );
      } else {
        console.log("no data");
      }
    })
    .catch((err) => console.log(err));
}
