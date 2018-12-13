function neji() {
    var grid = [];
    grid[0] = [];
    var j = 0, k = 0, co = 1;
    for (i = 48; i <= 122; i++) {

        if (k == 8) {
            j++;
            k = 0;
            grid[co] = [];
            co++;
        }
        if (!((i > 57 && i < 65) || (i > 90 && i < 97))) {
            grid[j][k] = (String.fromCharCode(i));
            k++;
        }
    }
    grid[7][6] = String.fromCharCode(32);
    grid[7][7] = String.fromCharCode(58);
    //console.log(grid);
    return grid;

}

function kakashi(deidara) {
    grid = neji();
    var ro=0;
    var kolom=0;
    var res = "";
    var flg=0;
    //console.log(grid);
    //console.log(deidara);
    len = deidara.length;
    for(i=0;i<len;i++)
    {   ro=0;
        kolom=0;
        flg=0;
        for(j=0;j<8;j++)
        {
            for(k=0;k<8;k++)
            {
                if(deidara[i]==grid[j][k])
                {
                    ro=j;
                    kolom=k;
                    flg++;
                }
                else 
                    continue;
                if(flg!=0)
                break;

            }
            if(flg!=0)
            break;

        }
        if(flg==0)
        {
            res+=deidara[i];
            continue;
        }
        //console.log(res);
        else{
        var l1 = (grid[ro][parseInt((Math.random()*8))]);
        var l2 = (grid[parseInt((Math.random()*8))][kolom]);
        res+=l1+l2;
        }
    }
    return res;
}

//console.log(kakashi("()Zz"));

//console.log(kakashi("karthik"));
//export { kakashi, neji };
module.exports = {
    kakashi: kakashi,
    neji: neji
}