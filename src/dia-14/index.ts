// En el Polo Norte, los elfos han simplificado su sistema de almacenamiento para evitar errores.
// Ahora guardan los regalos en un objeto mágico con profundidad limitada, donde cada valor aparece una sola vez.

// Santa necesita una forma rápida de saber qué camino de claves debe seguir para encontrar un regalo concreto.

// Tu tarea es escribir una función que, dado un objeto y un valor, devuelva el array de claves que hay que recorrer para llegar a ese valor.

// Reglas:

// El objeto tiene como máximo 3 niveles de profundidad.
// El valor a buscar aparece como mucho una vez.
// El objeto solo contiene otros objetos y valores primitivos (strings, numbers, booleans).
// Si el valor no existe, devuelve un array vacío.

type Gift = string | number | boolean
type Workshop = Record<string, any>
type Path = string[]

function findGiftPath(workshop: Workshop, gift: Gift): Path {
  let path: string[] = [];

  for(const l1 in workshop){

    if(workshop[l1] === gift){
      path.push(l1);
      return path;
    }

    for(const l2 in workshop[l1]){

      if(workshop[l1][l2] === gift){
        path.push(l1);
        path.push(l2);
        return path;
      }

      for(const l3 in workshop[l1][l2]){
        if(workshop[l1][l2][l3] === gift){
          path.push(l1);
          path.push(l2);
          path.push(l3);
          return path;
        }
      }

    }
    
  }
  return path;
}

export const findGiftPathTest = () => {
  const workshop = {
    storage: {
      shelf: {
        box1: 'train',
        box2: 'switch'
      },
      box: 'car'
    },
    gift: 'doll'
  }

  console.log(findGiftPath(workshop, 'train'));
  // ➜ ['storage', 'shelf', 'box1']

  console.log(findGiftPath(workshop, 'switch'));
  // ➜ ['storage', 'shelf', 'box2']

  console.log(findGiftPath(workshop, 'car'));
  // ➜ ['storage', 'box']

  console.log(findGiftPath(workshop, 'doll'));
  // ➜ ['gift']

  console.log(findGiftPath(workshop, 'plane'));
  // ➜ []
}