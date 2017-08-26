var a= prompt("give number 'a'");
var b= prompt("give number 'b'");
var value = (a * a) + (2 * a * b) - (b * b);

if (value < 0) {
	console.log("wynik ujemny")
}
else if (value > 0) {
	console.log("wynik dodatni")
}
else {
	console.log("Wartość jest równa 0")
}
