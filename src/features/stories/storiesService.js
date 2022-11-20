import axios from "axios";

const STORIES_API = "http://hn.algolia.com/api/v1/search?query=foo&tags=story";

const getStoesData = async () => {
  const response = await axios.get(STORIES_API);

  console.log("response data from service", response.data.hits);
  // console.log(response.data.hits);
  return response.data.hits;
};

const storiesService = { getStoesData };

export default storiesService;
