function previousLetter(a){
  let previousletter = a.charCodeAt(0);
  switch (previousletter) {
    case 65:
    return 'A';
    default:
    return String.fromCharCode(--previousletter);
  }
}
function nextLetter(a){
  let previousletter = a.charCodeAt(0);
  switch (previousletter) {
    case 90:
    return 'Z';
    default:
    return String.fromCharCode(++previousletter);
  }
}
  //Função para Cifrar:

function encryptMessage(){
  let message = $('#message').val();
  let displacement = $('#deslocamento').val();
  let decipherMessage = "";
  for (i=0; i<message.length; i++){
    let newCharacter = String.fromCharCode(message.charCodeAt(i));
    for(d=0;d<displacement; d++){
    newCharacter = nextLetter(newCharacter);
    }
    decipherMessage = decipherMessage + newCharacter;
  }
  document.getElementById('message').value = decipherMessage;

  //Função para Decifrar
}
function decipherMessage(){
  let message = $('#message').val();
  let displacement = $('#deslocamento').val();
  let decipherMessage = "";
  for (i=0; i<message.length; i++){
    let newCharacter = String.fromCharCode(message.charCodeAt(i));
    for(d=0;d<displacement; d++){
    newCharacter = previousLetter(newCharacter);
    }
    decipherMessage = decipherMessage + newCharacter;
  }
  document.getElementById('message').value = decipherMessage
}
