function getShippingMessage(country, price, deliveryFee) {

    const totalCost = Number.parseFloat(price);
    const shippingCost = Number.parseFloat(deliveryFee);
    const totalPrice = totalCost + shippingCost;
const texDroids = `Shipping to ${country} will cost ${totalPrice} credits`;
    return texDroids;
}
getShippingMessage("Australia", "120", "50");
getShippingMessage("Germany", "80", "20");
getShippingMessage("Sweden", "100", "20");
console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"

function formatMessage(message, maxLength) {
    if(message.length <= maxLength) {
        return message;
    } else if(message.slice(0, maxLength) + "...") {
        return message.slice(0, maxLength) + "...";
    }
}
formatMessage("Curabitur ligula sapien", "16")
formatMessage("Curabitur ligula sapien", "23")
formatMessage("Vestibulum facilisis purus nec", "20");
formatMessage("Vestibulum facilisis purus nec", "30");
formatMessage("Nunc sed turpis a felis in nunc fringilla", "15")
formatMessage("Nunc sed turpis a felis in nunc fringilla", "41")
console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"