import { authenticationService } from "../_services";

export function authHeader() {
  // return authorization header with jwt token
  const currentUser = authenticationService.currentUserValue;
  const currentToken = authenticationService.currentJWT;
  if (currentUser && currentToken) {
    return { Authorization: `Bearer ${currentToken}` };
  } else {
    return {};
  }
}
