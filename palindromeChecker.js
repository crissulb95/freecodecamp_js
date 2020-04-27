function palindrome(str) {
    let firstStr= str,
        oneRegEx= /[a-z0-9]/ig,
        filteredStr= str.toLowerCase().match(oneRegEx),
        someArr= [],
        newArr= filteredStr.map(value=> someArr.unshift(value));
    let arrToStr1= someArr.join(""),
        arrToStr2=filteredStr.join("");

        if (arrToStr2 == arrToStr1){
            return true;
        } else {
            return false;
        }
    }

//palindrome("A man, a plan, a canal. Panama") returns true.
//palindrome("never odd or even") returns true.
//palindrome("almostomla") returns false
//palindrome("My age is 0, 0 si ega ym.") returns true.
console.log(palindrome("A man, a plan, a canal. Panama"),
            palindrome("My age is 0, 0 si ega ym."),
            palindrome("almostomla"),
            palindrome("never odd or even"));