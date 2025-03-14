function localizarpar(N){
    const arraypares = [];
    for (let i = 1; arraypares.length < N; i++){
        if (i%2 === 0) {
            arraypares.push(i);
        } 
    }
    return arraypares;
}

module.exports = localizarpar;