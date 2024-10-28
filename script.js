
function renderizarPessoas() {
    const container = document.getElementById('peopleContainer');
    pessoas.forEach(pessoa => {
        
        const card = document.createElement('div');
        card.classList.add('card', pessoa.genero === 'Masculino' ? 'male' : 'female');

     
        const header = document.createElement('div');
        header.classList.add('card-header');
        header.textContent = pessoa.nome;
        card.appendChild(header);

        const body = document.createElement('div');
        body.classList.add('card-body');
        body.innerHTML = `
            <p>Idade: ${pessoa.idade}</p>
            <p>Altura: ${pessoa.altura.toFixed(2)}</p>
            <p>Peso: ${pessoa.peso.toFixed(1)}</p>
            <p>Gênero: ${pessoa.genero}</p>
        `;
        card.appendChild(body);

        
        const footer = document.createElement('div');
        footer.classList.add('card-footer');
        footer.innerHTML = `
            <p>${pessoa.profissao}</p>
            <p>R$ ${pessoa.salario.toFixed(2)}</p>
        `;
        card.appendChild(footer);

       
        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', renderizarPessoas);
function corrigirSalario(pessoas) {
    pessoas.forEach(pessoa => {
        if (typeof pessoa.salario === 'string') {
            
            pessoa.salario = parseFloat(pessoa.salario.replace(/\s+/g, ''));
        }
    });
}



console.log(pessoas);
