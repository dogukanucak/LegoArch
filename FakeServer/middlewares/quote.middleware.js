// hello.js
module.exports = (req, res, next) => {
  console.log(req);
  next();
};
