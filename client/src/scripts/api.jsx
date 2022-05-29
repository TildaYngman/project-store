import * as config from "../config";

export function fetchQueryItems(query, setItems) {
  fetch(`${config.API_BASE_URL}/items/${query}`)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      setItems(result);
    })
    .catch((err) => {
      console.error(err);
    });
}
