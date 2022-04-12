const phoneNumber = ["097.123.1234", "091-303-0000", "0123 0123 0123"];

function santitize(phoneNumberArr) {
  return phoneNumberArr.map((str) => str.replace(/[. -]/g, ""));
}

console.log("the phone number after santize: ", santitize(phoneNumber));
