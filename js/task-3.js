function getElementWidth(content, padding, border) {
    const parties = 2;
const contWidth = Number.parseFloat(content);
const horizontalPadding = Number.parseFloat(padding);
const thickNess = Number.parseFloat(border);
const Npx = contWidth + parties * horizontalPadding + parties * thickNess;
return Npx;
}
getElementWidth("50px", "8px", "4px");
getElementWidth("60px", "12px", "8.5px");
getElementWidth("200px", "0px", "0px");
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200

function checkForSpam(message) {
    const ifThereIs1 = "spam";
    const ifThereIs2 = "sale";
    if(message.toLowerCase().includes(ifThereIs1)) {
        return true;
        } else if(message.toLowerCase().includes(ifThereIs2)) {
    return true;
       } else {
        return false;
       }
     
}
checkForSpam("Latest technology news");
checkForSpam("JavaScript weekly newsletter");
checkForSpam("Get best sale offers now!");
checkForSpam("Amazing SalE, only tonight!");
checkForSpam("Get rid of sPaM emails. Our book in on sale!");
checkForSpam("Trust me, this is not a spam message");
checkForSpam("[SPAM] How to earn fast money?");

console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true