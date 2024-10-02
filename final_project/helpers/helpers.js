async function getInnerTextsFromWebElements(elements) {
    const texts = [];
    const count = await elements.count();
    
    for (let i = 0; i < count; i++) {
      const innerText = await elements.nth(i).innerText();
      texts.push(innerText);
    }
    return texts;
}
  

async function parsePricesFromElements(elements) {
  const prices = [];
  const count = await elements.count();
  
  for (let i = 0; i < count; i++) {
    const innerText = await elements.nth(i).innerText();
    const numericPrice = parseFloat(innerText.replace(/[^\d.]/g, ''));
    prices.push(numericPrice);
  }
  
  return prices;
}


module.exports = { getInnerTextsFromWebElements, parsePricesFromElements }