function cutIt(arr) {
    const minLength = Math.min(...arr.map(x => x.length));
    return arr.map(x => x.slice(0, minLength));
}