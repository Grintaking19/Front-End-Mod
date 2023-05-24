export function dateToReadableFormat(date) {
    return new Date(date).toLocaleDateString('en-US');
}

export function timeToReadableFormat(date) {
    return new Date(date).toLocaleTimeString('en-US');
}

export function dateTimeToReadableFormat(date) {
    return new Date(date).toLocaleString('en-US');
}