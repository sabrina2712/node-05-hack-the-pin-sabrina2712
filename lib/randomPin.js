const pinifyNumber = (number, digits) => {
  let pin = "";
  if (typeof number === "number") {
    number = number.toString();
  }
  pin = number;

  while (pin.length < digits) {
    pin = "0" + pin;
  }

  return pin;
};

const newPin = (max) => {
  max += 1;
  const pin = Math.floor(Math.random() * Math.floor(max));

  return pinifyNumber(pin, max.toString().length);
};

module.exports = {
  newPin,
  pinifyNumber
};
