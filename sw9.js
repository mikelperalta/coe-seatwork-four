var isLeapYear = function (numHours) {
if(numHours % 4 === 0)
{
return "Leap Year!";
}
else {
return "Not Leap Year";
}
};
isLeapYear(2012);
isLeapYear(1997);
