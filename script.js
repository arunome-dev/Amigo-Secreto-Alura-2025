let amigos = [];

function agregarAmigo() {
    const input = document.getElementById('nombreAmigo');
    const nombre = input.value.trim();

    if (nombre === '') {
        alert('Por favor ingresa un nombre válido.');
        return;
    }

    amigos.push(nombre);
    input.value = '';
    actualizarLista();
}

function actualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Agrega al menos un amigo para sortear.');
        return;
    }

    const indice = Math.floor(Math.random() * amigos.length);
    const ganador = amigos[indice];
    document.getElementById('nombreGanador').textContent = ganador;
    document.getElementById('resultado').style.display = 'flex';
}