var e1 = require('./e1');
var d1 = require('./d1');

function testcryp()
{
    var txt = "a";
    console.log("Text: "+txt)
    var enc = e1.kakashi(txt);
    console.log("Encryption: "+enc);
    var dec = d1.obito(enc);
    console.log("Decryption: "+dec);
    if (txt === dec)
    {
        console.log("Test Successfull!");
    }
}

testcryp();

module.exports =
    {
        testcryp: testcryp
    }
//console.log(kakashi("111111"));
