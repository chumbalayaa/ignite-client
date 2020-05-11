import { BehaviorSubject } from "rxjs";
import axios from "axios";

const currentUserSubject = new BehaviorSubject(
  JSON.parse(localStorage.getItem("currentUser"))
);

const currentJWTSubject = new BehaviorSubject(localStorage.getItem("JWT"));

export const authenticationService = {
  storeUserAuth,
  logout,
  currentUser: currentUserSubject.asObservable(),
  get currentUserValue() {
    return currentUserSubject.value;
  },
  currentJWT: currentJWTSubject.asObservable(),
  get currentJWTValue() {
    return currentJWTSubject.value;
  },
};

//TODO
export const validJWT = async () => {
  return await checkJWT();
};

async function checkJWT() {
  console.log("checking jwt token");
  const accessString = localStorage.getItem("JWT");
  const accessUser = localStorage.getItem("currentUser");
  if (accessString == null || accessUser == null) {
    return false;
  }
  try {
    const response = await axios.get("/api/validateJWT", {
      headers: {
        Authorization: `JWT ${accessString}`,
      },
    });
    console.log(response.data);
    return true;
  } catch (err) {
    console.log(err);
  }
}

async function storeUserAuth(jwtToken, user) {
  // store user details and jwt token in local storage to keep user logged in between page refreshes
  console.log("auth time");
  localStorage.setItem("JWT", jwtToken);
  localStorage.setItem("currentUser", JSON.stringify(user));
  currentUserSubject.next(user);
  currentJWTSubject.next(jwtToken);
  return true;
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem("JWT");
  localStorage.removeItem("currentUser");
  currentUserSubject.next(null);
  currentJWTSubject.next(null);
}
