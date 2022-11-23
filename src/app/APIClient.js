import axios from "axios";

// let URL = 'https://hn.algolia.com/api/v1/'

// export const BASE_URL =  URL === undefined ? `${URL}`

export const BASE_URL = "https://hn.algolia.com/api/v1/";

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
      console.log("apiiiiii set up", result);
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

const getUrl = (query, tags, page, numericFilters) => {
  if (query && tags && page && numericFilters) {
    return `?query=${query}&tags=${tags}&numericFilters=${numericFilters}&page=${page}`;
  } else if (query && tags && page) {
    return `?query=${query}&tags=${tags}&page=${page}`;
  } else if (query && tags) {
    return `?query=${query}&tags=${tags}`;
  } else if (query && page) {
    return `?query=${query}&page=${page}`;
  } else if (query && numericFilters) {
    return `?query=${query}&numericFilters=${numericFilters}`;
  } else if (query) {
    return `?query=${query}`;
  } else if (tags && page && numericFilters) {
    return `?tags=${tags}&page=${page}&numericFilters=${numericFilters}`;
  } else if (tags && page) {
    return `?tags=${tags}&page=${page}`;
  } else if (tags && numericFilters) {
    return `?tags=${tags}&numericFilters=${numericFilters}`;
  } else if (tags) {
    return `?tags=${tags}`;
  } else if (page && numericFilters) {
    return `?page=${page}&numericFilters=${numericFilters}`;
  } else if (page) {
    return `?page=${page}`;
  } else if (numericFilters) {
    return `?numericFilters=${numericFilters}`;
  }
};

// } else if (tags && page) {
//   return `?tags=${tags}&page=${page}`;

export const getPrepareURL = (filterBy, query, tags, page, numericFilters) => {
  console.log("filter byyyyyyyyyyyyyyyyyyyyyyyyyyyyyy", filterBy);
  if (filterBy) {
    return `${BASE_URL}/${filterBy}${getUrl(
      query,
      tags,
      page,
      numericFilters
    )}`;
  } else {
    return `${BASE_URL}/search`;
  }
};

export const findbynewsId = (newsId) => {
  return `${BASE_URL}/items/${newsId}`;
};
