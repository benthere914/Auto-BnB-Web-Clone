
export const convert = (string) => {
    let newDate = new Date(string);
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const year = string.slice(0, 4)
    let month = months[+string.slice(5,7) - 1]
    // return newDate;
    // return month
    return string;
}
