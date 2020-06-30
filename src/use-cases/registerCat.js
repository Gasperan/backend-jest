const buildRegisterCat = ({ apiClient, url }) => {
  const METHOD = "POST";
  return async ({ name, address, age }) => {
    const cat = Object.freeze({
      name,
      address,
      age,
    });

    const catRegistered = await apiClient.post({
      url,
      method: METHOD,
      content: cat,
    });

    const catRegistered2 = await apiClient.post({
      url,
      content: cat,
    });

    return {
      name: "",
      address: {
        department: {
          number: 1234,
        },
      },
      age: "",
    };
  };
};

module.exports = {
  buildRegisterCat,
};
