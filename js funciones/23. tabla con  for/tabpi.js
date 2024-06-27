function tabla(pnumHasta,ptabla){
    let numHasta=pnumHasta;
    let tabla=ptabla;
    let resultado;
    for(contador=1; contador<=numHasta;contador++){
     resultado=tabla*contador;

     if (resultado%2==0){
        console.log (+resultado+" = es par");
    }
    else{
        console.log (+resultado+ " = es impar");
    }

    }
}

const tablaExpresion=function(pnumHasta,ptabla){
    let numHasta=pnumHasta;
    let tabla=ptabla;
    let resultado;
    for(contador=1; contador<=numHasta;contador++){
     resultado=tabla*contador;

     if (resultado%2==0){
        console.log (+resultado+" = es par");
    }
    else{
        console.log (+resultado+ " = es impar");
    }

    }
}