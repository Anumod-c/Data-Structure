function ispalindrome(str) {
  if (str.length === 1) {
    return true; 
  }
  if(str[0]===str.slice(-1)){
    return ispalindrome(str.slice(1,-1))
  }
  return false
}
console.log(ispalindrome("malayalam"));
console.log(ispalindrome("mhellom"));
