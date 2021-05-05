function f1(x) {
    return Math.exp(-x)
}

function f2(x) {
    return Math.sin(x)
}

function f3(x) {
    return Math.exp(-3*x + x**2)
}

function f4(x) {
    return Math.exp(-4*x - x**3)
}

function fxy1(x, y) {
    return -x * y
}

function fxy2(x, y) {
    return y + x
}

function fxy3(x, y) {
    return (3 * x - 12 * (x ** 2)) * y
}

function fxy4(x, y) {
    return x * y
}

function fxy5(x, y) {
    return x ** 2 * y
}

function fxy6(x, y) {
	return 6 * x * x + 5 * x * y
}

function fxy7(x, y) {
    return y
}
