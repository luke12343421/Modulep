


function limite() {
var R_R = require('./Config.json')
R_R = R_R['Limite']
if (R_R[2] == false) {
    throw new Error('Desativer')
} 
return R_R

}

exports.limite = limite