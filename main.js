

// Definimos una contraseña para usar como llave de encriptación
const password = "my-secret-password";

// Obtenemos los elementos de los formularios
const formEncrypt = document.getElementById("form-encrypt");
const formDecrypt = document.getElementById("form-decrypt");
const messageInput = document.getElementById("message");
const encryptedMessageInput = document.getElementById("encrypted-message");

// Agregamos un evento de submit al formulario de encriptar
formEncrypt.addEventListener("submit", (event) => {
  // Prevenimos el comportamiento por defecto del formulario
  event.preventDefault();

  // Obtenemos el valor del mensaje a encriptar
  const message = messageInput.value;

  // Encriptamos el mensaje usando AES y la contraseña
  const encrypted = CryptoJS.AES.encrypt(message, password).toString();

  // Asignamos el valor encriptado al elemento de resultado
  const result = document.getElementById("result");
  result.innerHTML = encrypted;
});

// Agregamos un evento de submit al formulario de desencriptar
formDecrypt.addEventListener("submit", (event) => {
  // Prevenimos el comportamiento por defecto del formulario
  event.preventDefault();

  // Obtenemos el valor del mensaje encriptado
  const encryptedMessage = encryptedMessageInput.value;

  // Desencriptamos el mensaje usando AES y la contraseña
  const bytes  = CryptoJS.AES.decrypt(encryptedMessage, password);
  const decrypted = bytes.toString(CryptoJS.enc.Utf8);

  // Asignamos el valor desencriptado al elemento de resultado
  const decryptedResult = document.getElementById("decrypted-result");
  decryptedResult.innerHTML = decrypted;
});

