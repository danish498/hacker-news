import axios from "axios";
import { getPrepareURL, search } from "../../app/APIClient";

const getNewsData = async ({ tags, page, query, numericFilters }) => {
  console.log("callll");
  const res = await search(getPrepareURL(query, tags, page, numericFilters));
  // console.log("data from api", res.hits);
  return res;
};

const newsService = { getNewsData };

export default newsService;
