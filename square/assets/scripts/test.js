// String js = 
//    "var performance = window.performance || window.mozPerformance" +
//                    " || window.msPerformance || window.webkitPerformance || {};" +
//    " return performance.getEntries() || {};";
// String netData = executeJavaScript(js).toString();
var performance = window.performance;
console.log(performance.getEntries);