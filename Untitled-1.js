  /*  'TOTAL $ 1,500.00\n' + */




 /*  
  const Tesseract = require('tesseract.js');

// Ruta de la imagen que deseas procesar
const imagePath = './Texto2.jpg';

// Realiza el OCR en la imagen
Tesseract.recognize(
  imagePath,           // Ruta de la imagen
  'eng',               // Idioma de reconocimiento (en este caso, inglés)
  {
    logger: info => console.log(info.progress) // Mostrar el progreso del OCR en la consola
  }
).then(({ data: { text } }) => {
  // Aplicar expresión regular para extraer el total y su valor
  const totalPattern = /TOTAL\s+(\d+\.\d+\s*€)/i; // Expresión regular para buscar "TOTAL" seguido de un valor numérico con el símbolo "€"
  const match = text.match(totalPattern);

  if (match) {
    const totalValue = match[1];
    const resultJSON = {
      total: totalValue
    };
    console.log('Resultado en JSON:', resultJSON);
  } else {
    console.log('Total no encontrado en el texto.');
  }
}).catch(error => {
  console.error('Error:', error);
});

*/








/*
const Tesseract = require('tesseract.js');

// Ruta de la imagen que deseas procesar
const imagePath = './Texto2.jpg';

// Realiza el OCR en la imagen
Tesseract.recognize(
  imagePath,           // Ruta de la imagen
  'eng',               // Idioma de reconocimiento (en este caso, inglés)
  {
    logger: info => console.log(info.progress) // Mostrar el progreso del OCR en la consola
  }
).then(({ data: { text } }) => {
  console.log('Texto extraído:', text);
}).catch(error => {
  console.error('Error:', error);
});
*/