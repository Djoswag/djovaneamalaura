document.getElementById('avaliacao-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const ondas = [];
    let somaNotas = 0;

    for (let i = 1; i <= 5; i++) {
        const descricao = document.getElementById(`descricao${i}`).value;
        const nota = parseInt(document.getElementById(`nota${i}`).value);

        if (descricao && nota !== NaN && [0, 1, 5, 10].includes(nota)) {
            ondas.push({ descricao, nota });
            somaNotas += nota;
        } else {
            alert(`Preencha corretamente a descrição e a nota da onda ${i}.`);
            return;
        }
    }

    const resultadosLista = document.getElementById('resultados-lista');
    resultadosLista.innerHTML = '';

    ondas.forEach((onda, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `Onda ${index + 1}: ${onda.descricao} | Nota: ${onda.nota}`;
        resultadosLista.appendChild(listItem);
    });

    document.getElementById('soma-notas').textContent = `Soma das notas: ${somaNotas}`;
});
