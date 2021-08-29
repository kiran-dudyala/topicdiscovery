module.exports = {
  env: {
    DEV_TOPIC: "http://localhost:7071/api/Topic?topic=",
    DEV_TOPICS: "http://localhost:7071/api/Topics",
    DEV_SEARCH_TOPIC: "http://localhost:7071/api/SearchTopic?topic=",
    PROD_TOPIC:
      "https://topicdiscovery-apim.azure-api.net/TopicDiscovery/Topic?topic=",
    PROD_TOPICS:
      "https://topicdiscovery-apim.azure-api.net/TopicDiscovery/Topics",
    PROD_SEARCH_TOPIC:
      "https://topicdiscovery-apim.azure-api.net/TopicDiscovery/SearchTopic?topic=",
    SUB_KEY: "dc65a273321945f0b88671d34518e68a",
  },
};
