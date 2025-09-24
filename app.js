//Almacenar la lista de amigos
let amigos = []; 

function agregarAmigo() {
  let amigoInput = document.getElementById('amigo');
  let nombreAmigo = amigoInput.value;
  
  if (nombreAmigo.trim() !== '') {
    amigos.push(nombreAmigo);
    actualizarListaAmigos(); 
    amigoInput.value = '';
  } else {
    alert('Por favor, inserte un nombre.');
  }
}

function actualizarListaAmigos() {
  let listaAmigos = document.getElementById('listaAmigos');
  
  listaAmigos.innerHTML = '';
  
  for (let i = 0; i < amigos.length; i++) {
    listaAmigos.innerHTML += `<li>${amigos[i]}</li>`;
  }
}

function actualizarListaAmigos() {
  let listaAmigos = document.getElementById('listaAmigos');
  
  listaAmigos.innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join('');
}

function sortearAmigo() {
  if (amigos.length < 2) {
    alert('Por favor, agrega al menos dos amigos para sortear.');
    return; 
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];
  
  let resultadoElemento = document.getElementById('resultado');
  resultadoElemento.innerHTML = `<p>${amigoSorteado}</p>`;
}