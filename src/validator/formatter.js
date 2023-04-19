function trim () {
    let vis = " functionUp   ";
    console.log(vis.trim());
}
function toLowerCase () {
    let abcdef= "Call toLowerCase() on a hardcoded string";
    console.log(abcdef.toLowerCase());
}
function toUpperCase ()  {
    let xyzabc = "Call toUpperCase() on a hardcoded string";
    console.log(xyzabc.toUpperCase());
}

module.exports.trim = trim
module.exports.toLowerCase = toLowerCase
module.exports.toUpperCase = toUpperCase