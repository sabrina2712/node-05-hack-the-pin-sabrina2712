const axios = require("axios");

const { pinifyNumber } = require("./lib/randomPin");
const { maxPin } = require("./config");

// Optional Progressbar
const cliProgress = require("cli-progress");
const progress = new cliProgress.SingleBar(
  {},
  cliProgress.Presets.shades_classic
);

async function main() {
  progress.start(maxPin, 0);

  for (let i = 0; i < maxPin; i++) {
    const tryPin = pinifyNumber(i, maxPin.toString().length);
    const { data } = await axios.get(`http://localhost:3000/${tryPin}`);

    progress.increment();

    if (data) {
      progress.stop();
      console.log("\u001b[2J\u001b[0;0H");
      console.log(
        `Success the pin is: ${pinifyNumber(i, 4)} \n failed attempts:  ${i - 1}
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
