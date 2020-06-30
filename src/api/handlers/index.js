const { buildRegisterCat } = require("./catHandler");

const { registerCat } = require("../../use-cases/index");

const registerCatHandler = buildRegisterCat({ registerCat });

module.exports = {
  registerCatHandler,
};
