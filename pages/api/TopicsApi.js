const TOPIC_SEARCH_URL = process.env.PROD_SEARCH_TOPIC;

export const FetchSearchTopics = async (topic) => {
  const res = await fetch(TOPIC_SEARCH_URL + topic, {
      headers: {
        "Ocp-Apim-Subscription-Key": process.env.SUB_KEY,
      },
  });
  return await res.json();
};
