const fastify = require("fastify")({ logger: true });
const { registerCatRoute } = require("./api/routes/index");
const APP_PORT = process.env.APP_PORT || 4444;

const create = async () => {
  fastify.register(registerCatRoute);
  return fastify;
};

const start = async () => {
  let fastifyInstance;
  try {
    fastifyInstance = await create();
    await fastifyInstance.listen(APP_PORT);
    fastifyInstance.log.info(
      `server listening on ${fastifyInstance.server.address().port}`
    );
  } catch (err) {
    fastifyInstance.log.error(err);
    process.exit(1);
  }
};

try {
  if (process.env.NODE_ENV !== "test") {
    start();
  }
} catch (err) {
  console.error(
    err,
    `Invalid arg '${process.argv[2]}'. Please supply: 'start' OR 'docs'`
  );
}

module.exports = {
  create,
};
