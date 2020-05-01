import axios from "axios";

export const artistService = {
  getArtistData,
  updateArtist,
  artistSearch,
};

//Get artist data for user (for profile page)
async function getArtistData(req) {
  console.log(req);
  return axios
    .get("/api/artistData", {
      params: { email: req.email, password: req.password },
    })
    .then((res) => {
      if (res.data) {
        console.log("have data for ", res.data);
        return res.data;
      } else {
        console.log("no data ", res);
      }
    })
    .catch((err) => console.log(err));
}

//Update artist data for user (for profile page)
async function updateArtist(req) {
  console.log(req);
  return axios
    .post("/api/artistData", {
      params: {
        user: { email: req.email, password: req.password },
        artist: {
          name: req.name,
          type: req.type,
          instrument: req.instrument,
          //videoLinks: req.videoLinks,
        },
      },
    })
    .then((res) => {
      if (res.data) {
        console.log("have data for ", res.data);
        return res.data;
      } else {
        console.log("no data ", res);
      }
    })
    .catch((err) => console.log(err));
}

//Search artist  with search text and type (req.search and req.category)
async function artistSearch(req) {
  console.log(req);
  return axios
    .get("/api/artistSearch", { params: { search: req.search } })
    .then((res) => {
      if (res.data) {
        console.log("we have data");
        return res.data;
      } else {
        console.log("no data");
      }
    })
    .catch((err) => console.log(err));
}
