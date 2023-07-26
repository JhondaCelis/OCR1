/*const T = require ("tesseract.js")

T.recognize('./Texto2.jpg', 'spa', {logger: e => console.log(e) })
.then(out => console.log(out))*/






const Tesseract = require('tesseract.js');

// Ruta de la imagen que deseas procesar
const imagePath = './Texto5.png';

// Realiza el OCR en la imagen
Tesseract.recognize(
  imagePath,           // Ruta de la imagen
  'eng',               // Idioma de reconocimiento (en este caso, inglés)
  {
    logger: info => console.log(info.progress) // Mostrar el progreso del OCR en la consola
  }
).then(({ data: { text } }) => {
  // Aplicar expresión regular para extraer el total y su valor
  const totalPattern = /TOTAL\D*([\d.,\s]+)/i; // Expresión regular para buscar "TOTAL" seguido de cualquier combinación de dígitos, puntos, comas y espacios
  const match = text.match(totalPattern);

  if (match) {
    const totalValue = match[1].replace(/[^\d.-]/g, ''); // Eliminar cualquier caracter que no sea dígito, punto o signo de menos
    const resultJSON = {
      total: parseFloat(totalValue)
    };
    console.log('Resultado en JSON:', resultJSON);
  } else {
    console.log('Total no encontrado en el texto.');
  }
}).catch(error => {
  console.error('Error:', error);
});
