import axios from "axios";

export const BASE_URL = "http://hn.algolia.com/api/v1/search";

const makeRequestCreator = () => {
  let token;

  return async (query) => {
    // Check if we made a request
    if (token) {
      // Cancel the previous request before making a new request
      token.cancel();
    }
    // Create a new CancelToken
    token = axios.CancelToken.source();
    // console.log("tocken", token);
    try {
      const res = await axios(query, { cancelToken: token.token });
      const result = res.data;
      console.log(result);
      return result;
    } catch (error) {
      if (axios.isCancel(error)) {
        // Handle if request was cancelled
        console.log("Request canceled", error.message);
      } else {
        // Handle usual errors
        console.log("Something went wrong: ", error.message);
      }
    }
  };
};

export const search = makeRequestCreator();

export const getPrepareURL = (query, tags, page, numericFilters) => {
  // return `${BASE_URL}?${query&&`query=${query}`}

  // =${query}&tags=${tags}&numericFilters=${numericFilters}&page=${page}`;

  if (query && tags && page && numericFilters) {
    return `${BASE_URL}?query=${query}&tags=${tags}&numericFilters=${numericFilters}&page=${page}`;
  } else if (query && tags && page) {
    return `${BASE_URL}?query=${query}&tags=${tags}&page=${page}`;
  } else if (tags && page) {
    return `${BASE_URL}?tags=${tags}&page=${page}`;
  } else if (query && tags) {
    return `${BASE_URL}?query=${query}&tags=${tags}`;
  } else if (page) {
    return `${BASE_URL}?page=${page}`;
  } else if (query) {
    return `${BASE_URL}?query=${query}`;
  } else if (tags) {
    return `${BASE_URL}?tags=${tags}`;
  } else if (numericFilters) {
    return `${BASE_URL}?numericFilters=${numericFilters}`;
  } else {
    return `${BASE_URL}`;
  }
};
