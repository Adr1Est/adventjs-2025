// ¡Es hora de decorar el árbol de Navidad 🎄! Escribe una función que reciba:

// height → la altura del árbol (número de filas).
// ornament → el carácter del adorno (por ejemplo, "o" o "@").
// frequency → cada cuántas posiciones de asterisco aparece el adorno.
// El árbol se dibuja con asteriscos *, pero cada frequency posiciones, el asterisco se reemplaza por el adorno.

// El conteo de posiciones empieza en 1, desde la copa hasta la base, de izquierda a derecha. Si frequency es 2, los adornos aparecen en las posiciones 2, 4, 6, etc.

// El árbol debe estar centrado y tener un tronco # de una línea al final. Cuidado con los espacios en blanco, nunca hay al final de cada línea.

function drawTree(height: number, ornament: string, frequency: number): string {
  const base = 2 * height - 1;
  let result = "";
  let counter = 1;

  for(let i = 1; i <= height; i++){
    const stars = 2*i-1;
    const spaces = (base - stars) / 2;

    result += " ".repeat(spaces);

    for(let x = 1; x <= stars; x++){
      if(counter % frequency === 0){
        result += ornament;
      }else{
        result += "*";
      }
      counter++;
    }

    result += "\n";
  }
  result += " ".repeat((base-1)/2);
  result += "#";

  return result;
}

export const drawTreeTest = () => {
  console.log(drawTree(5, 'o', 2));
  //     *
  //    o*o
  //   *o*o*
  //  o*o*o*o
  // *o*o*o*o*
  //     #

  console.log(drawTree(3, '@', 3));
  //   *
  //  *@*
  // *@**@
  //   #

  console.log(drawTree(4, '+', 1));
  //    +
  //   +++
  //  +++++
  // +++++++
  //    #
}