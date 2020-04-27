const STATUSPOSIBLES = { open: "OPEN", closed: "CLOSED", fondosInsuficientes: "INSUFFICIENT_FUNDS"}

function statusActual(cambioRequerido, cambioDisponible) {
  
    if (Number(cambioRequerido) > Number(cambioDisponible)) {
        return STATUSPOSIBLES.fondosInsuficientes;
    }

    if (Number(cambioRequerido) < Number(cambioDisponible)) {
        return STATUSPOSIBLES.open;
    }

    return STATUSPOSIBLES.closed;
}

function totalCambioDisponible(cambioEnCaja) {
    let total = 0;
    for (let change of cambioEnCaja){
        let valorCambio = change[1];
        total += valorCambio;
    }

    return total.toFixed(2);
}

function totalCambioADevolver(cambioRequerido, cambioEnCaja){
    const cambio = [],
    diccionario = {
        "PENNY": 0.01,
        "NICKEL": 0.05,
        "DIME": 0.1,
        "QUARTER": 0.25,
        "ONE": 1,
        "FIVE": 5,
        "TEN": 10,
        "TWENTY": 20,
        "ONE HUNDRED": 100
    }

    for (let i = (cambioEnCaja.length - 1) ; i >= 0 ; i--) {
        let tipoMoneda = cambioEnCaja[i][0],
            totalMoneda = cambioEnCaja[i][1],
            valorMoneda = diccionario[tipoMoneda],
            cantidadEnMoneda = (totalMoneda / valorMoneda).toFixed(2),
            cantidadDeMonedas = 0;

        while (cambioRequerido >= valorMoneda && cantidadEnMoneda > 0) {
            cambioRequerido -= valorMoneda;
            cambioRequerido = cambioRequerido.toFixed(2);
            cantidadEnMoneda--;
            cantidadDeMonedas++;

        }
    
        if (cantidadDeMonedas > 0) {
        cambio.push([tipoMoneda, ( cantidadDeMonedas * valorMoneda )]);
        }
    }
    return cambio;
}

function checkCashRegister(price, cash, cid) {

    let statusAndChange = { status: "", change: cid },
        cambioRequerido = parseFloat( cash - price ).toFixed(2),
        cambioDisponible = totalCambioDisponible(cid);
    statusAndChange.status = statusActual(cambioRequerido, cambioDisponible);
        
    if (statusAndChange.status === STATUSPOSIBLES.fondosInsuficientes) {
        statusAndChange.change = [];
        return statusAndChange;
    }

    statusAndChange.change = totalCambioADevolver(cambioRequerido, cid);

    if (cambioRequerido > totalCambioDisponible(statusAndChange.change)){
        statusAndChange.status = STATUSPOSIBLES.fondosInsuficientes;
        statusAndChange.change = [];
    }

    if (statusAndChange.status === STATUSPOSIBLES.closed){
        statusAndChange.change = [...cid];
    }

    return statusAndChange;
}


//checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.

//checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}

//checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["QUARTER", 0.5]]}.

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));