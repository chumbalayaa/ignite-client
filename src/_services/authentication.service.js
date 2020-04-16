import { BehaviorSubject } from "rxjs";

import axios from "axios";

const currentUserSubject = new BehaviorSubject(
  JSON.parse(localStorage.getItem("currentUser"))
);

export const authenticationService = {
  storeUserAuth,
  logout,
  currentUser: currentUserSubject.asObservable(),
  get currentUserValue() {
    return currentUserSubject.value;
  },
};

function storeUserAuth(user) {
  // store user details and jwt token in local storage to keep user logged in between page refreshes
  localStorage.setItem("currentUser", JSON.stringify(user));
  currentUserSubject.next(user);
  window.location.reload(true);
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem("currentUser");
  currentUserSubject.next(null);
}
