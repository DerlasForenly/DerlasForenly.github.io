function trapezoidal_rule(f, a, b, N) {
    let i = 0
    a = parseFloat(a)
    b = parseFloat(b)
    N = parseFloat(N)
    h = (b - a) / N

    for (let k = a; k < b; k += h) {
        i += f(k) + f(k + h)
    }

    return i * (h / 2)
}
