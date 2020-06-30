const { registerCatHandler } = require("../handlers/index");

const registerCatRoute = (fastify) => {
  fastify.route({
    method: "POST",
    url: `/cat`,
    schema: {},
    handler: registerCatHandler,
  });
};

module.exports = { registerCatRoute };
