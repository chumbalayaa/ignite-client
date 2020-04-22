import axios from "axios";

export const projectService = {
  getProjectsByUser,
  searchProject,
};

//Get project list for a user
async function getProjectsByUser(req) {
  console.log(req);
  return axios
    .get('/api/myprojects', {params: {email: req.email, password: req.password}})
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
}

//Search project with search text (req.search)
async function searchProject(req) {
  console.log(req);
  return axios
    .get("/api/projectSearch", { params: {text: req.search }})
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
