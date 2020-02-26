const axios = require("axios");

const { pinifyNumber } = require("./lib/randomPin");
const { maxPin } = require("./config");

async function main() {
  let pin;
  console.time("TryPin");

  for (let i = 0; i < maxPin; i++) {
    pin = pinifyNumber(i, maxPin.toString().length);
    const { data } = await axios.get(`http://localhost:3000/${pin}`);
    console.log(pin);
    if (data) {
      console.log(
        `
        Success the pin is: ${pin}
        failed attempts:  ${i - 1}
        `
      );

      console.timeEnd("TryPin");
      break;
    }
  }

  return pin;
}

main().catch((e) => {
  console.error(e);
});
