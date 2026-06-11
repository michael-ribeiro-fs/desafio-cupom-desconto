# 🏆 Desafio: Validador de Cupom de Desconto

O objetivo deste desafio é implementar a funcionalidade de validação e aplicação de cupom de desconto em um sistema de checkout de e-commerce, utilizando conceitos fundamentais de JavaScript e manipulação do DOM.

## Etapas do Desafio

### 📌 Passo 1: Capturar os Elementos do DOM

Selecionar os elementos necessários da interface utilizando seletores do DOM.

Exemplos:

- Campo de entrada do cupom
- Botão de aplicação do cupom
- Elementos responsáveis por exibir os totais da compra

### 📌 Passo 2: Adicionar um Evento de Clique

Implementar um listener para capturar o clique do usuário no botão de aplicação do cupom.

### 📌 Passo 3: Validar o Cupom

Verificar se o valor digitado corresponde ao cupom válido:

```text
SOUDEVSENIOR
```

### 📌 Passo 4: Tratar Cupons Inválidos

Exibir uma mensagem ao usuário quando:

- O cupom for inválido
- O campo estiver vazio

### 🌟 Passo 5: Impedir Reutilização do Cupom

Após a aplicação bem-sucedida do desconto:

- Atualizar os valores exibidos na interface
- Desabilitar o botão de aplicação do cupom
- Impedir que o desconto seja aplicado mais de uma vez

---

# 🎉 Como Testar

1. Adicione produtos ao carrinho.
2. Digite `SOUDEVSENIOR` no campo de cupom.
3. Clique em **Aplicar Cupom**.
4. Verifique o desconto aplicado ao valor total da compra.
5. Confirme que o botão foi desabilitado após a aplicação.

## Conceitos Praticados

- Manipulação do DOM
- Seletores com `querySelector()`
- Variáveis (`const` e `let`)
- Condicionais (`if` / `else`)
- Eventos (`addEventListener`)
- Funções
- Arrays
- Atualização dinâmica da interface

Este desafio foi desenvolvido para reforçar os principais conceitos apresentados durante o webinar de JavaScript.
