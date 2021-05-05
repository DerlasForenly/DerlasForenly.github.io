function simpsons_rule(f, a, b, N) {
    a = parseFloat(a)
    b = parseFloat(b)
    N = parseFloat(N)

    let i = 0
    i += (f(a) + f(b)) / 2
    let h = (b - a) / N

    for (let k = a + h; k < b; k += h) {
        i += f(k)
    }

    for (let k = a + h; k <= b; k += h) {
        i += f((k - h + k) / 2) * 2
    } 

    return i * h / 3

    //return (b - a) / 6 * (f(a) + 4 * f((a + b) / 2) + f(b))
}
