var e1 = require('./e1');

function obito(deidara) {
    grid = e1.neji();
    var res1 = "";
    var ro = 0;
    var flg = 0;
    var kolom = 0;
    var flag1 = 0;
    var l = 0;
    //console.log(grid);
    var len = deidara.length;
    while (true) {
        ro = kolom = flg = 0;
        if (l > len - 1) {
            break;
        }
        for (i = 0; i < 8; i++) {
            if (grid[i].includes(deidara[l])) {
                ro = i;
                l++;
                break;
            }
            else {
                flg++;
            }
        }
        if (flg == 8) {
            res1 += deidara[l];
            l++;
            continue;

        }
        for (i = 0; i < 8; i++) {
            if (grid[i].includes(deidara[l])) {
                kolom = grid[i].indexOf(deidara[l]);
                l++;
                break;
            }
        }
        res1 += grid[ro][kolom];
    }
    return res1;
}
//console.log("a3cp()");
//console.log(e1.kakashi("a3cp()"));
//console.log(obito("a3cp()"));    

module.exports =
    {
        obito: obito
    }
//console.log(kakashi("111111"));
