
import axios from "axios";
import { environment } from "src/environments/environment";

export default axios.create({
  baseURL: environment.apiURL
});
