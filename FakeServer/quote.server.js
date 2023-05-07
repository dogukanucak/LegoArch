/* eslint-disable no-undef */

function getRandomQuote() {
  return returnSuccessorErrorResponseRandomly({ message: "This is a random quote" });
}

module.exports = () => {
  const data = { quotes: [] };

  for (let index = 0; index < 100; index++) {
    data.quotes.push(getRandomQuote());
  }

  return data;
};
