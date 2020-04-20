import axios from "axios";

export const artistService = {
  searchArtist,
};

//Search artist  with search text and type (req.search and req.category)
async function searchArtist(req) {
  console.log(req);
  return axios
    .get("/api/artistSearch", { params: { text: req.search } })
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
