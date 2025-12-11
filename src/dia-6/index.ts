// En el taller de Santa, los elfos han encontrado una montaña de guantes mágicos totalmente desordenados. Cada guante viene descrito por dos valores:

// hand: indica si es un guante izquierdo (L) o derecho (R)
// color: el color del guante (string)
// Tu tarea es ayudarles a emparejar guantes: Un par válido es un guante izquierdo y uno derecho del mismo color.

// Debes devolver una lista con los colores de todos los pares encontrados. Ten en cuenta que puede haber varios pares del mismo color. El orden se determina por el que se pueda hacer primero el par.

type Glove = { hand: 'L' | 'R'; color: string }

function matchGloves(gloves: Glove[]): string[] {
  const inventory: Record<string, Record<string, number>> = {};
  const pairs: string[] = [];
  
  for (const { hand, color } of gloves) {
    if (!inventory[color]) {
      inventory[color] = { L: 0, R: 0 };
    }
    
    const oppositeHand = hand === 'L' ? 'R' : 'L';
    
    if (inventory[color][oppositeHand] > 0) {
      pairs.push(color);
      inventory[color][oppositeHand]--;
    } else {
      inventory[color][hand]++;
    }
  }
  
  return pairs;
}

export const matchGlovesTest = () => {
  const gloves: Glove[] = [
    { hand: 'L', color: 'red' },
    { hand: 'R', color: 'red' },
    { hand: 'R', color: 'green' },
    { hand: 'L', color: 'blue' },
    { hand: 'L', color: 'green' }
  ]

  console.log(matchGloves(gloves))
  // ["red", "green"]

  const gloves2: Glove[] = [
    { hand: 'L', color: 'gold' },
    { hand: 'R', color: 'gold' },
    { hand: 'L', color: 'gold' },
    { hand: 'L', color: 'gold' },
    { hand: 'R', color: 'gold' }
  ]

  console.log(matchGloves(gloves2))
  // ["gold", "gold"]

  const gloves3: Glove[] = [
    { hand: 'L', color: 'red' },
    { hand: 'R', color: 'green' },
    { hand: 'L', color: 'blue' }
  ]

  console.log(matchGloves(gloves3))
  // []

  const gloves4: Glove[] = [
    { hand: 'L', color: 'green' },
    { hand: 'L', color: 'red' },
    { hand: 'R', color: 'red' },
    { hand: 'R', color: 'green' }
  ]

  console.log(matchGloves(gloves4))
  // ['red', 'green']
}