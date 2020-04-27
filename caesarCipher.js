function rot13(str) {
    let newArr= str.split("").map(function value(x) {
        if (x.charCodeAt() > 64 && x.charCodeAt() < 78) {
            return String.fromCharCode((x.charCodeAt() + 13));
        } else if (x.charCodeAt() > 77 && x.charCodeAt() < 91) {
            return String.fromCharCode((x.charCodeAt() - 13));
        } else {
            return x;
        }
    });
    return newArr.join("");
}

//rot13("SERR PBQR PNZC") decodes to FREE CODE CAMP
//rot13("SERR CVMMN!") decodes to FREE PIZZA!
//rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") decodes to THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
console.log(rot13("SERR PBQR PNZC"),
            rot13("SERR CVMMN!"),
            rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));