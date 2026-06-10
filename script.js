// =============================================================
//  TEMA 8 — Desafio Prático de Fixação
//  Webinar: Sistema de Checkout de E-commerce
// =============================================================
//
//  🏆 PARABÉNS POR CHEGAR ATÉ AQUI!
//
//  Este é o seu desafio pós-webinar. O objetivo é criar um
//  VALIDADOR DE CUPOM DE DESCONTO usando tudo que aprendemos:
//
//    ✅ Tema 1: Seletores do DOM (querySelector)
//    ✅ Tema 2: Variáveis (const, let)
//    ✅ Tema 3: Condicionais (if / else)
//    ✅ Tema 4: Objetos literais
//    ✅ Tema 5: Funções e eventos (addEventListener)
//    ✅ Tema 6: Arrays (.push, .length)
//    ✅ Tema 7: Loops (for...of)
//
// =============================================================

// =============================================================
// 🔧 CÓDIGO BASE (já pronto — NÃO modifique esta seção)
// Este bloco monta a loja funcional construída durante o webinar.
// CUPOM DE DESCONTO VÁLIDO: SOUDEVSENIOR
// =============================================================

const produtos = [
  { nome: "Teclado Mecânico RGB", preco: 250, emoji: "⌨️", emEstoque: true },
  { nome: "Mouse Gamer Pro", preco: 189, emoji: "🖱️", emEstoque: true },
  { nome: "Mousepad Speed XL", preco: 79, emoji: "🖥️", emEstoque: true },
  { nome: "Webcam HD 1080p", preco: 320, emoji: "📷", emEstoque: false },
];

const listaCarrinho = [];
let totalCarrinho = 0;

function calcularNovoTotal(totalAtual, precoItem) {
  return totalAtual + precoItem;
}

// --- Elementos do DOM ---
const badgeContador = document.querySelector("#badge-contador");
const carrinhoVazio = document.querySelector("#carrinho-vazio");
const listaItensDOM = document.querySelector("#lista-itens-carrinho");
const resumoValores = document.querySelector("#resumo-valores");
const sidebarTotal = document.querySelector("#sidebar-total");
const elementoTotalCarrinho = document.querySelector("#total-carrinho-contador");

// --- Funções de Renderização ---
function renderizarCarrinho() {
  if (listaItensDOM) {
    listaItensDOM.innerHTML = "";
    for (let item of listaCarrinho) {
      const novoLi = document.createElement("li");
      novoLi.innerText = item;
      listaItensDOM.appendChild(novoLi);
    }
  }

  if (badgeContador) badgeContador.innerText = listaCarrinho.length;
  if (elementoTotalCarrinho) elementoTotalCarrinho.innerText = totalCarrinho.toFixed(2);
  if (sidebarTotal) sidebarTotal.innerText = `R$ ${totalCarrinho.toFixed(2)}`;

  if (listaCarrinho.length > 0) {
    if (carrinhoVazio) carrinhoVazio.classList.add("escondido");
    if (listaItensDOM) listaItensDOM.classList.remove("escondido");
    if (resumoValores) resumoValores.classList.remove("escondido");
  } else {
    if (carrinhoVazio) carrinhoVazio.classList.remove("escondido");
    if (listaItensDOM) listaItensDOM.classList.add("escondido");
    if (resumoValores) resumoValores.classList.add("escondido");
  }
}

function carregarProdutos() {
  const template = document.querySelector("#template-card");
  const vitrine = document.querySelector("#vitrine-produtos");

  if (!template || !vitrine) return;

  const cardsAntigos = vitrine.querySelectorAll(".card");
  for (let card of cardsAntigos) {
    card.remove();
  }

  for (let prod of produtos) {
    const clone = template.content.cloneNode(true);

    clone.querySelector(".card__nome").innerText = prod.nome;
    clone.querySelector(".card__preco").innerText = `R$ ${prod.preco.toFixed(2)}`;
    clone.querySelector(".card__imagem").innerText = prod.emoji;

    const freteElemento = clone.querySelector(".card__frete");
    if (prod.preco >= 200) {
      freteElemento.innerText = "Frete Grátis!";
      freteElemento.classList.add("frete-gratis");
    } else {
      freteElemento.innerText = "Frete: R$ 29,90";
    }

    const estoqueElemento = clone.querySelector(".card__estoque");
    if (prod.emEstoque) {
      estoqueElemento.innerText = "✅ Em estoque";
      estoqueElemento.style.color = "#00b894";
    } else {
      estoqueElemento.innerText = "❌ Indisponível";
      estoqueElemento.style.color = "#d63031";
    }

    const btnAdd = clone.querySelector(".btn-adicionar");
    if (!prod.emEstoque) {
      btnAdd.disabled = true;
      btnAdd.innerText = "Indisponível";
    }

    btnAdd.addEventListener("click", function () {
      totalCarrinho = calcularNovoTotal(totalCarrinho, prod.preco);
      listaCarrinho.push(prod.nome);
      renderizarCarrinho();
    });

    vitrine.appendChild(clone);
  }
}

// Inicializa a página
carregarProdutos();
renderizarCarrinho();

// =============================================================
//
// 🏆🏆🏆  SEU DESAFIO COMEÇA AQUI!  🏆🏆🏆
//
// =============================================================

// -------------------------------------------------------------
// 📌 PASSO 1 — Capturar os elementos do DOM
// -------------------------------------------------------------

// -------------------------------------------------------------
// 📌 PASSO 2 — Adicionar um evento de clique ao botão
// -------------------------------------------------------------

// -----------------------------------------------------------
// 📌 PASSO 3 — Validar o cupom com condicional
// -----------------------------------------------------------

// -----------------------------------------------------------
// 📌 PASSO 4 — Tratar cupom inválido ou vazio
// -----------------------------------------------------------

// -------------------------------------------------------------
// 🌟 PASSO 5 — AVANÇADO
// -------------------------------------------------------------
// Após o cupom ser aplicado com sucesso, DESABILITE o botão
// para evitar que o desconto seja aplicado mais de uma vez.


// =============================================================
// 🎉 FIM DO DESAFIO!
//
// Após completar, abra este arquivo no navegador e teste:
//   1. Adicione produtos ao carrinho
//   2. Digite "SOUDEVSENIOR" no campo de cupom
//   3. Clique em "Aplicar Cupom"
//   4. Veja o desconto sendo aplicado na tela!
//
// 💡 Se travar, volte aos temas anteriores e revise os
//    conceitos. Cada passo usa algo que já aprendemos!
// =============================================================
