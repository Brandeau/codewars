function validateRut(rut){
    const regex = /^[1-3]?\d\.?\d{3}\.?\d{3}-?(\d|(k|K))$/;

    return regex.test(rut);
}


console.log(validateRut("16.22.4132k"))