// =========================
// BOTÕES DA HOME
// =========================

const btnPerfil = document.querySelector(".primary");
const btnEmpresa = document.querySelector(".secondary");

if (btnPerfil) {
    btnPerfil.addEventListener("click", () => {
        window.location.href = "cadastro-candidato.html";
    });
}

if (btnEmpresa) {
    btnEmpresa.addEventListener("click", () => {
        window.location.href = "cadastro-empresa.html";
    });
}

// =========================
// BUSCA AUTOMÁTICA DE CEP
// =========================

const cepInput = document.getElementById("cep");

if (cepInput) {

    cepInput.addEventListener("blur", async () => {

        const cep = cepInput.value.replace(/\D/g, "");

        if (cep.length !== 8) {
            return;
        }

        try {

            const resposta = await fetch(
                `https://viacep.com.br/ws/${cep}/json/`
            );

            const dados = await resposta.json();

            if (dados.erro) {
                alert("CEP não encontrado.");
                return;
            }

            const endereco = document.getElementById("endereco");
            const bairro = document.getElementById("bairro");
            const cidade = document.getElementById("cidade");
            const estado = document.getElementById("estado");

            if (endereco) endereco.value = dados.logradouro;
            if (bairro) bairro.value = dados.bairro;
            if (cidade) cidade.value = dados.localidade;
            if (estado) estado.value = dados.uf;

        } catch (erro) {

            console.error(erro);
            alert("Erro ao buscar CEP.");

        }

    });

}

// =========================
// CADASTRO DE CANDIDATO
// =========================

const formulario = document.getElementById("formCandidato");
const resultado = document.getElementById("resultado");

if (formulario) {

    formulario.addEventListener("submit", function(event){

        event.preventDefault();

        const candidato = {

            nome: document.getElementById("nome")?.value || "",
            cpf: document.getElementById("cpf")?.value || "",
            email: document.getElementById("email")?.value || "",
            telefone: document.getElementById("telefone")?.value || "",

            cep: document.getElementById("cep")?.value || "",
            endereco: document.getElementById("endereco")?.value || "",
            bairro: document.getElementById("bairro")?.value || "",
            cidade: document.getElementById("cidade")?.value || "",
            estado: document.getElementById("estado")?.value || "",

            resumo: document.getElementById("resumo")?.value || "",
            objetivos: document.getElementById("objetivos")?.value || "",

            area: document.getElementById("area")?.value || "",

            habilidades: document.getElementById("habilidades")?.value || "",
            ferramentas: document.getElementById("ferramentas")?.value || "",

            trabalho:
                document.querySelector(
                    'input[name="trabalho"]:checked'
                )?.value || "",

            modalidade:
                document.querySelector(
                    'input[name="modalidade"]:checked'
                )?.value || ""

        };

        localStorage.setItem(
            "candidatoTalentMatch",
            JSON.stringify(candidato)
        );

        if (resultado) {

            resultado.style.display = "block";

            resultado.innerHTML = `
                <strong>Perfil salvo com sucesso!</strong><br><br>

                Nome: ${candidato.nome}<br>
                Área: ${candidato.area}<br>
                Cidade: ${candidato.cidade} - ${candidato.estado}
            `;

        }

        setTimeout(() => {
            window.location.href = "perfil.html";
        }, 1500);

    });

}