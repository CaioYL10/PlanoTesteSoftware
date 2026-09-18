# Plano de Teste de Software – Carrinho de Compras

Atividade de teste de software (TSOF) focada em identificar e corrigir bugs na função
`calcularTotal` de um carrinho de compras em Node.js, cobrindo cálculo de subtotal,
desconto por cupom, frete e arredondamento.

## Estrutura

- `codigos/carrinho.js` — função `calcularTotal(itens, cupom)` testada.
- `codigos/index.js` — testes manuais (caixa-preta), executados com `node index.js`.
- `codigos/carrinho.test.js` — testes automatizados com Jest, executados com `npm test`.
- `documentacao/` — Plano de Testes de Software, com a matriz de casos de teste (GOT)
  e as evidências de execução antes e depois da correção dos bugs.

## Como rodar

```
npm install --save-dev jest
node codigos/index.js
npm test
```
