import axios from "axios";

export const projectService = {
  searchProject,
};

//Search project with search text (req.search)
async function searchProject(req) {
  console.log(req);
  return axios
    .get("/api/projectSearch", { params: { text: req.search } })
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
