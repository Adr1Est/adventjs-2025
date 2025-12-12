// El grinch quiere robar los regalos de Navidad del almacén. Para ello necesita saber qué regalos no tienen vigilancia.

// El almacén se representa como un array de strings (string[]), donde cada regalo (*) está protegido si su posición está junto a una cámara (#). Cada espacio vacío se representa con un punto (.).

// Tu tarea es contar cuántos regalos están sin vigilancia, es decir, que no tienen ninguna cámara adyacente (arriba, abajo, izquierda o derecha).

// Ten en cuenta: solo se considera como "adyacente" las 4 direcciones cardinales, no en diagonal.

// Los regalos en las esquinas o bordes pueden estar sin vigilancia, siempre que no tengan cámaras directamente al lado.

function findUnsafeGifts(warehouse: string[]): number {
    let unsafeGifts: number = 0;

    for(let i = 0; i < warehouse.length; i++){
      for(let x = 0; x < warehouse[i].length; x++){

        if(warehouse[i][x] === "*"){
          let hasCamera = false;

          if(i > 0 && warehouse[i-1][x] === "#")hasCamera = true;
          if(i < warehouse.length-1 && warehouse[i+1][x] === "#")hasCamera = true;
          if(x > 0 && warehouse[i][x-1] === "#") hasCamera = true;
          if(x < warehouse[i].length-1 && warehouse[i][x+1] === "#") hasCamera = true;

          if(!hasCamera)unsafeGifts++;
        }

      }
    }
    return unsafeGifts;
}

export const findUnsafeGiftsTest = () => {
  console.log(findUnsafeGifts([
    '.*.',
    '*#*',
    '.*.'
  ])) // ➞ 0

  // Todos los regalos están junto a una cámara

  console.log(findUnsafeGifts([
    '...',
    '.*.',
    '...'
  ])) // ➞ 1

  // Este regalo no tiene cámaras alrededor

  console.log(findUnsafeGifts([
    '*.*',
    '...',
    '*#*'
  ])) // ➞ 2
  // Los regalos en las esquinas superiores no tienen cámaras alrededor

  console.log(findUnsafeGifts([
    '.....',
    '.*.*.',
    '..#..',
    '.*.*.',
    '.....'
  ])) // ➞ 4

  // Los cuatro regalos no tienen cámaras, porque están en diagonal a la cámara
}