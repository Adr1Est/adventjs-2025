/*
  Santa ha recibido una lista de regalos, pero algunos están defectuosos. Un regalo es defectuoso si su nombre contiene el carácter #.
  Ayuda a Santa escribiendo una función que reciba una lista de nombres de regalos y devuelva una nueva lista que solo contenga los regalos sin defectos.
*/

function filterGifts(gifts: string[]): string[] {
  if(gifts.length === 0)return [];
  return [...gifts].filter(gift => !gift.includes("#"));
}

export const filterGiftsTest = () => {
  console.log(filterGifts(['car', 'doll#arm', 'ball', '#train']));
  console.log(filterGifts(['#broken', '#rusty']));
  console.log(filterGifts([]));
}