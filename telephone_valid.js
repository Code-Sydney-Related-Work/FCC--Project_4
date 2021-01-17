function telephoneCheck(str){
    let rex3 = /^(1[\s]?)?((\([2-9][0-9][0-9]\))|([2-9][0-9][0-9]))([\s\-]?)?[2-9][0-9][0-9]([\s\-]?)?[2-9][0-9][0-9][0-9]$/;          
    
    return rex3.test(str);
}
module.exports = telephoneCheck;