module.exports = function check(str, bracketsConfig) {
  // your solution
  let keys = [];
    let dict = {};

    for (let i = 0; i < bracketsConfig.length; i++) {
        keys.push(bracketsConfig[i][1]);
        dict[keys[i]] = bracketsConfig[i][0];
    }

    let stack = [];

    for(let i = 0; i<str.length;i++){
        if (keys.includes(str[i]) && stack[stack.length-1] === dict[str[i]])
            stack.pop();
        else
            stack.push(str[i]);
    }
    
    return stack.length === 0 ? true : false;
}
