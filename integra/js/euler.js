function Euler_method(f, a, b, y0, N) {
    function Euler_iteration(f, x, x0, y0, N) {
        let d = (x - x0) / N
        let yi = y0
        let xi = x0
    
        for (let i = 0; i < N; i++) {
            yi += d * f(xi, yi)
            xi += d 
        }
    
        return yi
    }

    let y = []
    let h = (b - a) / N

    for (let k = a + h; k <= b; k += h) {
        y.push(Euler_iteration(f, k, a, y0, N))
    }

    return y
}
