import axios from "axios";
import { findbynewsId, getPrepareURL, search } from "../../app/APIClient";

const getNewsData = async ({ filterBy, tags, page, query, numericFilters }) => {
  console.log("callll", filterBy);
  const res = await search(
    getPrepareURL(filterBy, query, tags, page, numericFilters)
  );
  // console.log("data from api", res.hits);
  return res;
};
const getNewsDataById = async ({ newsId }) => {
  // console.log("callll", filterBy);
  const res = await search(findbynewsId(newsId));
  // console.log("data from api", res.hits);
  return res;
};

const newsService = { getNewsData, getNewsDataById };

export default newsService;
