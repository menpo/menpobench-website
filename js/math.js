
export function sort(x) {
    const sorted = [...x]
    sorted.sort((a, b) => a - b)
    return sorted
}

function ced_range(n) {
     Array.apply(null, Array(n)).map((_, i) => (i + 1) / n)
}

export function ced_data(errors) {
    return {
        x: sort(errors),
        y: ced_range(errors.length)
    }
}
