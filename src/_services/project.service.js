import axios from "axios";
import { handleResponse, authHeader } from "../_helpers";

export const projectService = {
  getProjectsByUser,
  searchProject,
  createNewProject,
};

//Get project list for a user
async function getProjectsByUser(req) {
  console.log(req);
  return axios
    .get("/api/myprojects", {
      params: { email: req.email, password: req.password },
    })
    .then(handleResponse.handleResponse)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
}

//Create new project for user
async function createNewProject(req) {
  console.log("posting project ", req);
  return axios
    .post("/api/project", {
      params: {
        email: req.email,
        password: req.password,
        title: req.title,
        type: req.type,
        requirements: req.requirements,
      },
    })
    .then(handleResponse.handleResponse)
    .then((res) => {
      if (res.data) {
        console.log("data ", res);
        return res.data;
      } else {
        console.log("no data");
      }
    })
    .catch((err) => console.log(err));
}

//Search project with search text (req.search)
async function searchProject(req) {
  console.log(req);
  return axios
    .get("/api/projectSearch", { params: { text: req.search } })
    .then(handleResponse.handleResponse)
    .then((res) => {
      if (res.data) {
        console.log("we have data");
        console.log(res.data);
      } else {
        console.log("no data");
      }
    })
    .catch((err) => console.log(err));
}
