module.exports = {
    alphanumeric: () => {
        return 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    },
    alphabetic: () => {
        return 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    },
    numeric: () => {
        return '0123456789'
    },
    hex: () => {
        return '0123456789abcdef'
    }
}
