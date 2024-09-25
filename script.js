// Seleciona o formulário e a lista de contatos
const contactForm = document.getElementById('contactForm');
const contactList = document.getElementById('contactList');

// Adiciona um ouvinte de evento ao formulário
contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Obtém os valores dos campos
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;

    // Cria uma nova linha na tabela
    const newRow = document.createElement('tr');
    newRow.innerHTML = `<td>${nome}</td><td>${telefone}</td>`;

    // Adiciona a nova linha à lista de contatos
    contactList.appendChild(newRow);

    // Limpa os campos do formulário
    contactForm.reset();
});
