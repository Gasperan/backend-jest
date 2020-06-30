const { buildRegisterCat } = require("./registerCat");
const { apiClient } = require("../gateways/index");
const url = "https://www.cats.com/register";

const registerCat = buildRegisterCat({ apiClient, url });

module.exports = {
  registerCat,
};
