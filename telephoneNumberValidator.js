function telephoneCheck(str) {
    let newArr= str.split("").filter(value => parseInt(value)|| parseInt(value) === 0);
    
    let regexp= /\({1}\b\d{4,}\b\)/,
        regexp2= /^[(]/,
        regexp3= /\)$/,
        secregex= /\({1}/,
        terregex= /\){1}/,
        noquestion= /\?/;
  
    if((terregex.test(str) && !secregex.test(str)) || (secregex.test(str) && !terregex.test(str))) {
        return false;
    }
  
    if(regexp2.test(str) && regexp3.test(str)) {
        return false;
    }
  
    if(noquestion.test(str)) {
      return false;
    }

    if (newArr.length < 10 || newArr.length > 11) {
        return false;
    } else if (newArr.length == 11 && newArr[0] !== "1" || str[0] == "-") {
        return false;
    } else {
        return true;
    }
    
}
  
//telephoneCheck("(555)5(55?)-5555") should return false.
//telephoneCheck("10 (757) 622-7382") should return false.
//telephoneCheck("-1 (757) 622-7382") should return false
//telephoneCheck("(6054756961)") should return false
//telephoneCheck("1(555)555-5555") should return true.
    console.log(telephoneCheck("(555)5(55?)-5555"),
                telephoneCheck("10 (757) 622-7382"),
                telephoneCheck("-1 (757) 622-7382"),
                telephoneCheck("(6054756961)"),
                telephoneCheck("1(555)555-5555"));