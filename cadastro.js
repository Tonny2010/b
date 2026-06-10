const formulario = document.getElementById("formCandidato");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function(event){

    event.preventDefault();

    const candidato = {

        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        telefone: document.getElementById("telefone").value,
        cidade: document.getElementById("cidade").value,
        estado: document.getElementById("estado").value,
        nascimento: document.getElementById("nascimento").value,

        resumo: document.getElementById("resumo").value,
        objetivos: document.getElementById("objetivos").value,

        area: document.getElementById("area").value,

        habilidades: document.getElementById("habilidades").value,
        ferramentas: document.getElementById("ferramentas").value,

        trabalho: document.querySelector(
            'input[name="trabalho"]:checked'
        )?.value || "",

        modalidade: document.querySelector(
            'input[name="modalidade"]:checked'
        )?.value || ""

    };

    localStorage.setItem(
        "candidatoTalentMatch",
        JSON.stringify(candidato)
    );

    resultado.style.display = "block";

    resultado.innerHTML = `
        <strong>Perfil salvo com sucesso!</strong><br><br>

        Nome: ${candidato.nome}<br>
        E-mail: ${candidato.email}<br>
        Área: ${candidato.area}<br>
        Modalidade: ${candidato.modalidade}
    `;
});