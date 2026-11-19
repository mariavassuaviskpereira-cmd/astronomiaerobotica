// Banco de dados simples com especificações técnicas das missões
const missionData = {
    rovers: {
        title: "Rovers Planetários (Ex: Perseverance & Curiosity)",
        desc: "Projetados para sobreviver a temperaturas extremas e tempestades de poeira, utilizam geradores termoelétricos de radioisótopos (energia nuclear) e câmeras estereoscópicas para mapear rotas em 3D sem ajuda da Terra.",
        specs: "Autonomia: Navegação por IA | Instrumentos: Espectrômetros a laser, brocas de coleta e radares de subsolo."
    },
    sondas: {
        title: "Sondas de Espaço Profundo (Ex: Voyager & Cassini)",
        desc: "Não pousam em planetas; realizam sobrevoos de alta velocidade ou entram em órbita. Usam assistência gravitacional de planetas gigantes para ganhar impulso rumo aos limites do sistema solar.",
        specs: "Comunicação: Antenas de alto ganho (Deep Space Network) | Sensores: Magnetômetros e detectores de plasma."
    },
    bracos: {
        title: "Braços Robóticos Orbitais (Ex: Canadarm2)",
        desc: "Manipuladores articulados com 7 graus de liberdade que imitam o movimento de um braço humano, capazes de mover cargas de dezenas de toneladas na microgravidade com precisão milimétrica.",
        specs: "Alcance: Até 17 metros | Função: Acoplamento de naves, suporte a caminhadas espaciais e inspeção térmica."
    }
};

// Seleção de elementos do DOM
const modal = document.getElementById("tech-modal");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const modalSpecs = document.getElementById("modal-specs");
const closeBtn = document.querySelector(".close-btn");
const detailButtons = document.querySelectorAll(".btn-details");

// Abre o modal ao clicar em "Ver Especificações"
detailButtons.forEach(button => {
    button.addEventListener("click", () => {
        const missionKey = button.getAttribute("data-mission");
        const data = missionData[missionKey];

        if (data) {
            modalTitle.textContent = data.title;
            modalDesc.textContent = data.desc;
            modalSpecs.textContent = data.specs;
            modal.style.display = "flex";
        }
    });
});

// Fecha o modal no botão X
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Fecha o modal ao clicar fora da caixa de conteúdo
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});