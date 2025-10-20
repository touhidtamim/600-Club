//1
function convertMileToYard(mile) {
  const yard = mile * 1760;
  return yard;
}

console.log(convertMileToYard(13));

//2
function convertKWhToKcal(kWh) {
  const kcal = kWh * 860;
  return kcal;
}

console.log(convertKWhToKcal(1));

//3
function convertHourToSecond(hour) {
  const seconds = hour * 60 * 60;
  return seconds;
}

console.log(convertHourToSecond(1));

//4
function convertCmToMeter(cm) {
  const meter = cm / 100;
  return meter;
}

console.log(convertCmToMeter(100));

//5
function convertInchToCm(inch) {
  const cm = inch * 2.54;
  return cm;
}

console.log(convertInchToCm(1));

//6
function convertPoundToKilogram(pound) {
  const kilogram = pound * 0.453;
  return kilogram;
}

console.log(convertPoundToKilogram(1));

//7
function convertGaugeToMeter(gauge) {
  const meter = gauge * 0.91;
  return meter;
}

console.log(convertGaugeToMeter(1));
