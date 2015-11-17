
export function sort(x) {
    const sorted = [...x]
    sorted.sort((a, b) => a - b)
    return sorted
}

function ced_range(n) {
     return Array.apply(null, Array(n)).map((_, i) => (i + 1) / n)
}

export function errors_to_ced(errors) {
    const xs = sort(errors)
    const ys = ced_range(errors.length)
    return xs.map((x, i) => {
            return {
                x: x,
                y: ys[i]
            }
        })
}
