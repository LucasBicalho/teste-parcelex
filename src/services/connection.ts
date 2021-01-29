import axios from "axios";

const connectionService = axios.create({
  baseURL: "http://localhost:3333",
});

export default connectionService;
