function printDate () {
    let date = new Date().getDate()
    console.log(date);
}
function printMonth () {
    let month = new Date().getMonth()+1
    console.log(month);
}
function getBatchInfo () {
    console.log(" Technetium, W3D4, the topic for today is Nodejs module system");
}
module.exports.printDate = printDate
module.exports.printMonth = printMonth
module.exports.getBatchInfo = getBatchInfo