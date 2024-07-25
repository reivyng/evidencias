function tabla(pnumHasta,ptabla){
    let numHasta=pnumHasta;
    let tabla=ptabla;
    let resultado;
    for(contador=1; contador<=numHasta;contador++){
     resultado=tabla*contador;
     console.log( +tabla+"x"+contador+"="+resultado);
    }
}

const tablaExpresion=function(pnumHasta,ptabla){
    let numHasta=pnumHasta;
    let tabla=ptabla;
    let resultado;
    for(contador=1; contador<=numHasta;contador++){
     resultado=tabla*contador;
     console.log( +tabla+"x"+contador+"="+resultado);
    }
}