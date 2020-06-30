const { registerCatRoute } = require("../catRoute");
const { registerCatHandler } = require("../../handlers/index");

jest.mock("../../handlers/index");

const fastify = {
  route: jest.fn(),
};

afterEach(() => {
  fastify.route.mockClear();
});

afterAll(() => {
  dbCloseConnections();
});

it("should call fastify with expected arguments", () => {
  registerCatRoute(fastify);

  expect(fastify.route).toHaveBeenCalledWith({
    method: "POST",
    url: `/cat`,
    schema: {},
    handler: registerCatHandler,
  });
});

it("should call fastify with expected arguments2", () => {
  registerCatRoute(fastify);

  expect(fastify.route).toHaveBeenCalledWith({
    method: "POST",
    url: `/cat`,
    schema: {},
    handler: registerCatHandler,
  });
});
