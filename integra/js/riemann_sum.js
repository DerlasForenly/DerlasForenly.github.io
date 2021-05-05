function riemann_sum_left(f, a, b, N) {
    let I = 0
    let h = parseFloat((b - a) / N)

    for (let i = a; i < b; i += h) {
        I += f(i)
    }

    return I * h
}

function riemann_sum_right(f, a, b, N) {
    let I = 0
    let h = parseFloat((b - a) / N)

    for (let i = a + h; i <= b; i += h) {
        I += f(i)
    }

    return I * h
}

function riemann_sum_middle(f, a, b, N) {
    let I = 0
    let h = parseFloat((b - a) / N)

    for (let i = 0; i < N; i++) {
        I += f(a + h * (i + 0.5))
    }

    return I * h
}
