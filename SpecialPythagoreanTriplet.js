// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

// a2 + b2 = c2
// For example, 32 + 42 = 9 + 16 = 25 = 52.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

var findTriple = function() {
	var a,b,c
	var max = 1000

	for (a = 1; a < 333; a++) {
		for (b = a + 1; b < (max - a) / 2; b++) {
			c = 1000 - b - a
			if (c * c == (a * a) + (b * b)) {
				return a * b * c ;
			}
		}
	}

	return "I couldn't find it :("
}