const {red, blue} = require("colorette");
var {limite} = require('./Config/limite');
const prompt = require('prompt-sync')({ sigint: true });
limite = limite()
function e_1(_b){
    return prompt(red(_b) + ` :`)
}
function start_1(_list){
    if (isNaN(_list))throw new Error(blue('Chiffre uniquement'));
    var max  = e_1(`Max de chiffre générer`)
    return verifi(max, _list)
}

exports.start = start_1
function verifi(max, _list){
    if (max == "debug"){
        let _a_ = e_1(`Modepase`)
        if (_a_ === "DeBuG"){
            _a_ = e_1(`Debug menu`)

            start(_a_, max)
            return true
        }
    }
        if(isNaN(max)){
            throw new Error(red(`Chiffre uniquement !`))
    }
     if (max > limite[0]) {
        throw new Error(red(`Max ${limite[0]} ! pas ${max}`))
    }
    _a_ = undefined
    start(_a_, max)
    return false
}




function local_1(_b, _if, max){
        if (_if !== undefined){
        max = _if
    }
            if(isNaN(_b)){
   throw new Error(red(`Chiffre uniquement !`))
    
    }
if (_b > limite[1]) {
       throw new Error(red(`Max ${limite[1]} ! pas ${_b}`))
    } else if (_b <= 0 ){
       throw new Error(red(`${_b} > 1 !`))
    }
 var _a = []
  for (let i = 0; i < max; i++) {
  _a +=  " " + [Math.floor((Math.random() * _b) + 1)]
}
 console.log([_a])
return _a
}
function local_2(_b, _if, max, _list){
    var list = []
    for (let i = 0; i < max; i++) {
    if (_list == i) list += []

    }
    if (_if !== undefined){
        max = _if
    }
var _a = ``
var _1 = 0
var _2 = 0
var _3 = 0
var _4 = 0
var _5 = 0 
var _6 = 0
var _7 = 0
var _8 = 0
var _c = `${_b}`
for (let i = 0; i < max; i++) {
 if (_c.match(/1/i)){
     _c = _c.replace(1, "")
    _1 += 1
}
if (_c.match(/2/i)){
    _c = _c.replace(2, "")
    _2 += 1
}
if (_c.match(/3/i)){
    _c = _c.replace(3, "")
    _3 += 1
}
if (_c.match(/4/i)){
    _c = _c.replace(4, "")
    _4 += 1
}
if (_c.match(/5/i)){
    _c = _c.replace(5, "")
    _5 += 1
}
if (_c.match(/6/i)){
    _c = _c.replace(6, "")
    _6 += 1
}
if (_c.match(/7/i)){
    _c = _c.replace(7, "")
    _7 += 1
}
if (_c.match(/8/i)){
    _c = _c.replace(8, "")
    _8 += 1
}
if (list[i] = true) {

}
}

return  _a
}

function start(_info, max, _list){
    if (_info !== undefined){
    var lo_1 = local_1(e_1(`Max de verifi des chiffre`), _info, max)
var lo_2 = local_2(lo_1, _info, max, _list)
    }else {
        _info = undefined
            var lo_1 = local_1(e_1(`Max de verifi des chiffre`), _info, max)
var lo_2 = local_2(lo_1, _info, max, _list)
    }

console.log(lo_2)
}