//this should be a external library....
const apiClient = {
  post: ({ url, method, content }) => {
    console.log(
      `*** executing method: ${method}, to: ${url} with content: ${JSON.stringify(
        content
      )} ***`
    );
  },
};

module.exports = {
  apiClient,
};
