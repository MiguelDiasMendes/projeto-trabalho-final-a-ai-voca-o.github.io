// =============================================
// AÇAI DOBAHIANO - DADOS DO CARDÁPIO
// Arquivo: js/dados.js
//
// COMO ADICIONAR UM ITEM NOVO:
// 1. Copie um bloco { ... } existente
// 2. Cole depois da última vírgula
// 3. Mude nome, descricao, preco, imagem e categoria
// 4. Para categoria, use: "acai" ou "acompanhamentos"
// =============================================

// 'const' cria uma variável que não muda (constante)
// 'ITENS' é o nome que damos à nossa lista de lanches
// Os colchetes [ ] indicam que é uma lista (variedade) de objetos
const ITENS = [
  {
    nome: "Copo Clássico 300ml",
    descricao: "Açai tradicional, na medida certa pra matar a vontade, escolha 3 acompanhamentos.",
    preco: "R$ 29,00",
    precoNum: 29.00,
    categoria: "acai",
    imagem: "img/300ML.png"
  },
  {
    nome: "Copo Grande 500ml",
    descricao: "Açai em quantidade maior, perfeito para os amantes de açai, escolha 5 acompanhamentos.",
    preco: "R$ 35,00",
    precoNum: 35.00,
    categoria: "acai",
    imagem: "img/500ML.png"
  },
  {
    nome: "Copo MEGA 700ml",
    descricao: "Açai em quantidade máxima, perfeito para os amantes de açai, escolha 7 acompanhamentos.",
    preco: "R$ 45,00",
    precoNum: 45.00,
    categoria: "acai",
    imagem: "img/700ML.png"
  },
  {
    nome: "Barca de Açai",
    descricao: "barca de açai com 1,5L, ideal para compartilhar, escolha 10 acompanhamentos.",
    preco: "R$ 80,00",
    precoNum: 80.00,
    categoria: "acai",
    imagem: "img/BARCA.png"
  },
  {
    nome: "Morangos Frescos",
    descricao: "Morangos frescos, perfeito para complementar seu açai.",
    preco: "R$ 7,00",
    precoNum: 7.00,
    categoria: "acompanhamentos",
    imagem: "img/MORANGOS.jpg"
  },
  {
    nome: "Nutella",
    descricao: "Nutella, perfeito para complementar seu açai.",
    preco: "R$ 10,00",
    precoNum: 10.00,
    categoria: "acompanhamentos",
    imagem: "img/NUTELLA.jpg"
  },
  {
    nome: "Ninho",
    descricao: "Ninho, perfeito para complementar seu açai.",
    preco: "R$ 5,00",
    precoNum: 5.00,
    categoria: "acompanhamentos",
    imagem: "img/NINHO.jpg"
  },{
    nome: "Banana",
    descricao: "banana, perfeito para complementar seu açai.",
    preco: "R$ 3,00",
    precoNum: 3.00,
    categoria: "acompanhamentos",
    imagem: "img/BANANAS.jpg"
  },{
    nome: "Granola",
    descricao: "granola, perfeito para complementar seu açai.",
    preco: "R$ 3,00",
    precoNum: 3.00,
    categoria: "acompanhamentos",
    imagem: "img/GRANOLA.jpg"
  },{
    nome: "Uva verde",
    descricao: "uva verde, perfeito para complementar seu açai.",
    preco: "R$ 5,00",
    precoNum: 5.00,
    categoria: "acompanhamentos",
    imagem: "img/UVA VERDE.jpg"
  },{
    nome: "Ovomaltine",
    descricao: "ovomaltine, perfeito para complementar seu açai.",
    preco: "R$ 8,00",
    precoNum: 8.00,
    categoria: "acompanhamentos",
    imagem: "img/OVOMALTINE.jpg"
  },
];

// =============================================
// BEBIDAS
// Para adicionar: copie um bloco e cole abaixo
// =============================================

const BEBIDAS = [
  {
    nome: "Coca-Cola lata 350ml",
    descricao: "Lata bem gelada 350ml.",
    preco: "R$ 7,00",
    precoNum: 7.00,
    imagem: "img/COCA COLA.jpeg"
  },{
    nome: "Coca-Cola Zero lata 350ml",
    descricao: "Lata bem gelada 350ml.",
    preco: "R$ 7,00",
    precoNum: 7.00,
    imagem: "img/COCA COLA ZERO.jpeg"
  },
  {
    nome: "Água com Gás",
    descricao: "Garrafa 500ml gelada.",
    preco: "R$ 5,00",
    precoNum: 5.00,
    imagem: "img/AGUA COM GAS.jpg"
  }
];