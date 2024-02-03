function getShippingCost(country) {
    let price;
    switch(country) {
      case "Australia":
        price = `Shipping to ${country} will cost ${170} credits`;
        break;
      case "China":
        price = `Shipping to ${country} will cost ${100} credits`;
        break;
        case "Chile":
        price = `Shipping to ${country} will cost ${250} credits`;
        break;
      case "Jamaica":
        price = `Shipping to ${country} will cost ${120} credits`;
        break;
      default:
        return `Sorry, there is no delivery to your country`;
        
    }
    return price;
}
getShippingCost("Australia");
getShippingCost("Germany");
getShippingCost("China");
getShippingCost("Chile");
getShippingCost("Jamaica");
getShippingCost("Sweden");

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"