// BOTÕES PRINCIPAIS

const btnPerfil = document.querySelector(".primary");
const btnEmpresa = document.querySelector(".secondary");

// CRIAR PERFIL

btnPerfil.addEventListener("click", () => {
    alert("Área de cadastro de candidatos em desenvolvimento.");
});

// ÁREA EMPRESA

btnEmpresa.addEventListener("click", () => {
    alert("Área empresarial em desenvolvimento.");
});

// ANIMAÇÃO DOS CARDS

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
    });
});

// SCROLL SUAVE

const links = document.querySelectorAll("nav a");

links.forEach(link => {
    link.addEventListener("click", (e) => {

        const destino = link.getAttribute("href");

        if(destino.startsWith("#")) {
            e.preventDefault();

            const secao = document.querySelector(destino);

            if(secao) {
                secao.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }

    });
});