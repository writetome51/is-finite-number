export function isFiniteNumber(arg) {
    return (typeof arg === 'number' && (arg - arg === 0));
}


export function notFiniteNumber(arg) {
    return !(isFiniteNumber(arg));
}
