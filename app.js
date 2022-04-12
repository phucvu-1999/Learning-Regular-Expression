const phoneNumber = ["097.123.1234", "091-303-0000", "0123 0123 0123"];

function santitize(phoneNumberArr) {
  return phoneNumberArr.map((str) => str.replace(/[. -]/g, ""));
}

// Test method of reg

const text01 = `Hello hello HeLlo heLLO hello my name is Tien Phuc and my phone number is 038-699-1929 or 038 699 1929. My email is tienphuc@futurify.vn`;

const pattern = /hello/gi;

const result = text01.match(pattern);

// Test method;

const number1 = new RegExp("^0[0-9]{9}$");
const testNum1 = "0123456789";

console.log(number1.test(testNum1));
