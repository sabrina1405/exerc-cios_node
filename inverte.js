function inverter(arrayOriginal){
        const arrayinverso = [];
        for (let i = arrayOriginal.length - 1; i >= 0; i--) {
            arrayinverso.push(arrayOriginal[i]);
          }
          return arrayinverso;
        }
        
module.exports = inverter;