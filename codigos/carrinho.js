function calcularTotal(itens, cupom) {
let subtotal = 0;

for (let i = 0; i < itens.length; i++) {
subtotal += itens[i].preco * itens[i].quantidade;
}

if (itens.length === 0 || subtotal < 0) {
throw new Error("Carrinho inválido");
}

let desconto = 0;
if (cupom === "PROMO10") {
// CORREÇÃO: era um valor fixo de R$ 10, mas a regra pede 10% do subtotal
desconto = subtotal * 0.1;
}

let frete = 15;
// CORREÇÃO: era "> 100", o que cobrava frete indevidamente quando o subtotal era exatamente R$ 100
if (subtotal >= 100) {
frete = 0;
}

let total = subtotal - desconto + frete;

// CORREÇÃO: retornava o número "cru" (ex.: 48.333333333333336); Number(toFixed(2)) arredonda
// para 2 casas decimais e devolve number, não string, para bater com os testes (toBe/===)
return Number(total.toFixed(2));
}

module.exports = { calcularTotal };
