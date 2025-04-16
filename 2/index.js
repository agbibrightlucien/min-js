const input = document.getElementById("inputString");

function reverseString(str) {
    return str.split("").reverse().join("");
}


function check() {
    const value = input.value;
    const reversed = reverseString(value);
    
    if (value === reversed) {
        alert("The string is a palindrome.");
    }
    else {
        alert("The string is not a palindrome.");
    }    
    

}