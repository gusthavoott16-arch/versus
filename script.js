const textosMotivacionais = [
    "Acredite em você! Grandes conquistas começam com pequenos passos.",
    "A persistência realiza o impossível.",
    "Cada dia é uma nova oportunidade para ser melhor.",
    "Você é mais forte do que imagina.",
    "Não desista. O início é sempre o mais difícil.",
    "Seja a mudança que você deseja ver no mundo.",
    "O sucesso é a soma de pequenos esforços repetidos diariamente.",
    "Faça hoje o que seu futuro agradecerá.",
    "Confie no processo. O tempo traz resultados.",
    "A coragem não é a ausência do medo, mas o triunfo sobre ele.",
    "Versus: inspire-se, motive-se, vença!"
];

function getDiaAtual() {
    const hoje = new Date();
    return hoje.getDate() + hoje.getMonth() + hoje.getFullYear();
}

function mostrarTextoDiario() {
    const indice = getDiaAtual() % textosMotivacionais.length;
    document.getElementById('textoMotivacional').innerText = textosMotivacionais[indice];
}

function mostrarNovoTexto() {
    const indiceAleatorio = Math.floor(Math.random() * textosMotivacionais.length);
    document.getElementById('textoMotivacional').innerText = textosMotivacionais[indiceAleatorio];
}

// Mostra o texto do dia ao abrir o site
mostrarTextoDiario();