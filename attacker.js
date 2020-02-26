const axios = require("axios");

const { pinifyNumber } = require("./lib/randomPin");
const { maxPin } = require("./config");

async function main() {
  for (let i = 0; i < maxPin; i++) {
    const tryPin = pinifyNumber(i);
    const { data } = await axios.get(`http://localhost:3000/${tryPin}`);

    if (data) {
      console.log(
        `
        Success the pin is: ${pinifyNumber(i, 4)}
        failed attempts:  ${i - 1}
        `
      );

      break;
    }
  }

  return null;
}

main().catch((e) => {
  console.error(e);
});
