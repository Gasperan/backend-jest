// no cambia wrapper
const buildRegisterCat = ({ registerCat }) => {
  const SUCCESS_STATUS_CODE = 200;

  //funcion ejecutable
  return async (request, reply) => {
    // do some requst validations....

    console.log("xzcvbnm");
    const { name, address, age } = request.body;

    // do some data validations....

    //execute use case
    const cat = await registerCat({ name, address, age });

    reply.code(SUCCESS_STATUS_CODE).send(cat);
  };
};

module.exports = {
  buildRegisterCat,
};
