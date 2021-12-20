const regExURL = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;

const URLtest = function(urlStr) {console.log(`URL ${urlStr}` + regExURL.test(urlStr))}

const format1 = 'https://www.google.com';
const format2 = 'http://dogs.murphyhighlander246kdfakef.org/'
const format3 = 'www.github.com/JaynewDee'
const format4 = 'google.com'
const format5 = 'g.b.s'
const format6 = 'goofy'

URLtest(format1)
URLtest(format2)
URLtest(format3)
URLtest(format4)
URLtest(format5)
URLtest(format6)