const TOPIC_SEARCH_URL =
  "https://topicdiscovery-api.azure-api.net/TopicDiscovery/SearchTopic?topic=";

export const FetchSearchTopics = async (topic) => {
  const res = await fetch(TOPIC_SEARCH_URL + topic, {
    headers: {
      "Ocp-Apim-Subscription-Key": process.env.SUB_KEY,
    },
  });
  return await res.json();
};
