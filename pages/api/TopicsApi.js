const TOPIC_SEARCH_URL =
  "https://topicdiscovery-api.azure-api.net/TopicDiscovery/SearchTopic?topic=";

export const FetchSearchTopics = async (topic) => {
  const res = await fetch(TOPIC_SEARCH_URL + topic, {
    headers: {
      "Ocp-Apim-Subscription-Key": "dc65a273321945f0b88671d34518e68a",
    },
  });
  return await res.json();
};
