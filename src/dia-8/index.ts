// Santa 🎅 quiere saber cuál es la primera letra no repetida en el nombre de un juguete 🎁.

// Escribe una función que reciba un string y devuelva la primera letra que no se repite, ignorando mayúsculas y minúsculas al contar, pero devolviendo la letra tal como aparece en el string.

// Si no hay ninguna, devuelve una cadena vacía ("").

function findUniqueToy(toy: string): string {
  const inventory: Record<string, number> = {};
  for(let i = 0; i < toy.length; i++){
    if(toy[i].toLowerCase() in inventory){
      inventory[toy[i].toLowerCase()]++;
    }else{
      inventory[toy[i].toLowerCase()] = 1;
    }
  }
  for(const char of toy){
    if(inventory[char.toLowerCase()] === 1) return char;
  }
  return "";
}

export const findUniqueToyTest = () => {
  console.log(findUniqueToy('Gift')); // 'G'
  // ℹ️ La G es la primera letra que no se repite
  // y la devolvemos tal y como aparece

  console.log(findUniqueToy('sS')); // ''
  // ℹ️ Las letras se repiten, ya que no diferencia mayúsculas

  console.log(findUniqueToy('reindeeR')); // 'i'
  // ℹ️ La r se repite (aunque sea en mayúscula)
  // y la e también, así que la primera es la 'i'

  // Más casos:
  console.log(findUniqueToy('AaBbCc')); // ''
  console.log(findUniqueToy('abcDEF')); // 'a'
  console.log(findUniqueToy('aAaAaAF')); // 'F'
  console.log(findUniqueToy('sTreSS')); // 'T'
  console.log(findUniqueToy('z'));// 'z'
}