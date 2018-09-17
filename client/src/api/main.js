import axios from "axios";

const ROOT_URL = "http://localhost:3000/price";

export const FETCHCT_BY_NAME = "FETCHCT_BY_NAME";

export function fetchByName(searchTerm) {
  const url = `${ROOT_URL}/name/${searchTerm}`;
  const request = axios.get(url);

  return {
    type: FETCHCT_BY_NAME,
    payload:request
  }
}
