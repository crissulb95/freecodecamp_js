function convertToRoman(num) {

    if (typeof num != "number") {
        return undefined
    }

    let newArr="";
    
    while (num > 0) {
        if ( num < 4 ){
            newArr+="I";
            num-= 1;
        } else if (num == 4) {
            newArr+= "IV";
            num-=4;
        } else if (num >= 5 && num < 9) {
            newArr+= "V";
            num-=5;
        } else if (num == 9) {
            newArr+= "IX";
            num-=9;
        } else if (num >= 10 && num < 40) {
            newArr+= "X";
            num-= 10;
        } else if (num >= 40 && num < 50) {
            newArr+= "XL";
            num-= 40;
        } else if (num >= 50 && num < 90) {
            newArr+= "L";
            num-= 50;
        } else if (num >= 90 && num < 100) {
            newArr+= "XC";
            num-= 90;
        } else if (num >= 100 && num < 400) {
            newArr+= "C";
            num-= 100;
        } else if (num >= 400 && num < 500) {
            newArr+= "CD";
            num-=400;
        } else if (num >= 500 && num < 900) {
            newArr+= "D";
            num-= 500;
        } else if (num >= 900 && num < 1000) {
            newArr+= "CM";
            num-= 900
        } else {
            newArr+= "M";
            num-=1000;
        }
    }
    return newArr;
}
//convertToRoman(2) should return "II".
//convertToRoman(4) should return "IV"
//convertToRoman(29) should return "XXIX".
//convertToRoman(83) should return "LXXXIII"
//convertToRoman(798) should return "DCCXCVIII"
//convertToRoman(3999) should return "MMMCMXCIX"
console.log(convertToRoman(2),
            convertToRoman(4),
            convertToRoman(29),
            convertToRoman(83),
            convertToRoman(798),
            convertToRoman(3999));