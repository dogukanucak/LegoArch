/* eslint-disable @typescript-eslint/no-var-requires */
// server.js
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("FakeServer/data/quotes.json");
const middlewares = jsonServer.defaults();

const SUCCESS_RATE = 0.6;

function genRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

function returnSuccessResponse(data) {
  return {
    isSuccess: true,
    data: data[genRandomNumber(42)],
    message: "Success",
  };
}

function returnErrorResponse(data, error) {
  return {
    isSuccess: false,
    data: null,
    error: "Upppss......",
    message: error || "Error happened",
  };
}

function returnSuccessorErrorResponseRandomly(data, error) {
  const isSuccess = Math.random() < SUCCESS_RATE;

  if (isSuccess) {
    return returnSuccessResponse(data);
  } else {
    return returnErrorResponse(data, error);
  }
}

router.render = (req, res) => {
  res.jsonp(returnSuccessorErrorResponseRandomly(res.locals.data));
};

server.use(middlewares);
server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running");
});
