
const listaProjetos = ["Cantina", "Equipamentos", "Biblioteca", "Almoxarifado", "Inscrições"];
const statusProjetos = ["em andamento", "finalizado", "finalizado", "em andamento", "finalizado"];
const notasProjetos  = [8.5, 7.0, 9.2, 6.0, 10.0]; 


function mostrarProjetos(nomes, status, notas) {
    console.log("\n--- 📋 TODOS OS PROJETOS CADASTRADOS ---");
    for (let i = 0; i < nomes.length; i++) {
        console.log(`Projeto: ${nomes[i]} | Status: ${status[i]} | Nota: ${notas[i]}`);
    }
}

function filtrarPorStatus(nomes, status, statusDesejado) {
    console.log(`\n--- 🔍 PROJETOS: ${statusDesejado.toUpperCase()} ---`);
    for (let i = 0; i < nomes.length; i++) {
        if (status[i] === statusDesejado) {
            console.log(`- ${nomes[i]}`);
        }
    }
}

