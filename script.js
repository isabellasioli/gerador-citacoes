const quotes = [
    { text: "Eu nunca olho para trás, querida. Isso distraí o agora.", author: "Edna Modas" },
    { text: "A maior beleza não é vista com os olhos, mas sentida com o coração.", author: "Pequeno Príncipe" },
    { text: "A vida não nos dá um propósito, nós damos um propósito a vida.", author: "Flash" },
    { text: "Nosso destino vive dentro de nós, você só tem que ser corasojo o suficiente apara vê-lo.", author: "Chapeleiro Maluco" },
    { text: "Mostre para os seus medos, que eles não sabem nada da sua coregem.", author: "Coragem, o cão covarde" },
];

// 2. Conexão com o DOM (HTML)
const quoteText = document.getElementById("quote-text");
const quoteAthor = document.getElementById("quote-author");
const quoteCount = document.getElementById("quote-count");
const newQuoteBtn = document.getElementById("new-quote-btn");

// 3. Funções de lógica
let lastIndex = -1;

let quoteCounter = 0;

function updateDOM(quoteObject) {
    // Pega o texto do objeto e o insere no elemento <p id="quote-text">
    quoteText.textContent = quoteObject.text;

    // Pega o autor do objeto e o insere no elemento <p id="quote-author">
    quoteAthor.textContent = `- ${quoteObject.author}`;

    quoteCount.textContent = `Citações Geradas: ${quoteCounter}`;

    // Registra a citação na Console do navegador
    console.log(`${quoteObject.text} - ${quoteObject.author}`);
}

function generateQuote() {
    let randomIndex; 
    // "Math.floor" gera um número aleatório inteiro entre 0 e 1
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastIndex);

    lastIndex = randomIndex;

    quoteCounter++;

    const randomQuote = quotes[randomIndex];

    updateDOM(randomQuote);
}

// 4. Conexão dos eventos 
// Associa a função ao clique do botão
newQuoteBtn.addEventListener("click", generateQuote);

// Chama a função uma vez para exibir a primeira citação ao carregar a página
generateQuote();