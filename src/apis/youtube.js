import axios from "axios";

const KEY = "AIzaSyDJSsfxc89mhpnnvBlUwAUZY_aa1qG8JOU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
