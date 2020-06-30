const { buildRegisterCat } = require("../registerCat");

it("should call apiClient with expected params", async () => {
  //Arrange Act Assert
  const dependencies = {
    apiClient: {
      post: jest.fn().mockResolvedValue({
        name: "catName",
        address: "catAddress",
        age: "catAge",
      }),
    },
    url: "sufhiñdlhbf",
  };

  const registerCatUseCase = buildRegisterCat(dependencies);

  //act
  const result = await registerCatUseCase({
    name: "catName",
    address: "catAddress",
    age: "catAge",
  });

  //assert

  expect(result).toEqual({
    name: "catName",
    address: expect.objectContaining({ department: { number: 1234 } }),
    age: "catAge",
  });
  expect(dependencies.apiClient.post).toHaveBeenCalledTimes(2);
  expect(dependencies.apiClient.post).toHaveBeenCalled();
  //expect(dependencies.apiClient.post).toHaveBeenCalledWith();
  expect(dependencies.apiClient.post).toHaveBeenNthCalledWith(1, {
    url: "sufhiñdlhbf",
    method: "POST",
    content: {
      name: "catName",
      address: "catAddress",
      age: "catAge",
    },
  });
  expect(dependencies.apiClient.post).toHaveBeenNthCalledWith(2, {
    url: "sufhiñdlhbf",
    content: {
      name: "catName",
      address: "catAddress",
      age: "catAge",
    },
  });
});
