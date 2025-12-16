// Al Polo Norte ha llegado ChatGPT y el elfo Sam Elfman está trabajando en una aplicación de administración de regalos y niños.

// Para mejorar la presentación, quiere crear una función drawTable que reciba un array de objetos y lo convierta en una tabla de texto.

// La tabla dibujada debe tener:

// Cabecera con letras de columna (A, B, C…).
// El contenido de la tabla son los valores de los objetos.
// Los valores deben estar alineados a la izquierda.
// Los campos dejan siempre un espacio a la izquierda.
// Los campos dejan a la derecha el espacio necesario para alinear la caja.
// La función recibe un segundo parámetro sortBy que indica el nombre del campo por el que se deben ordenar las filas. El orden será alfabético ascendente si los valores son strings y numérico ascendente si son números.

type Data = Array<Record<string, string | number>>
type SortBy = string

function drawTable(data: Data, sortBy: SortBy): string {
  const sortedData = [...data].sort((a, b) => {
    if(a[sortBy] > b[sortBy]) return 1;
    if(a[sortBy] < b[sortBy]) return -1;    
    return 0;
  });
  let table = "";
  const columns = Object.keys(sortedData[0]);
  const widths = columns.map(col => {
    return Math.max(...sortedData.map(item => String(item[col]).length)) + 2;
  });
  const alphabet = [...columns].map((_, i) => String.fromCharCode(65 + i));

  let separator = "+";
  for(const width of widths){
    separator += "-".repeat(width) + "+";
  }

  let header = "|";
  for(let i = 0; i < alphabet.length; i++){
    header += ` ${alphabet[i]}`.padEnd(widths[i]) + "|";
  }
  
  table += separator + "\n";
  table += header + "\n";
  table += separator + "\n";

  for(let row = 0; row < sortedData.length; row++){
    let info = "|";

    for(let col = 0; col < columns.length; col++){
      info += ` ${sortedData[row][columns[col]]}`.padEnd(widths[col]) + "|";
    }
    table += info + "\n";
  }

  table += separator;
  
  return table;
}

export const drawTableTest = () => {
  console.log(drawTable(
    [
      { name: 'Charlie', city: 'New York' },
      { name: 'Alice', city: 'London' },
      { name: 'Bob', city: 'Paris' }
    ],
    'name'
  ));
  // +---------+----------+
  // | A       | B        |
  // +---------+----------+
  // | Alice   | London   |
  // | Bob     | Paris    |
  // | Charlie | New York |
  // +---------+----------+

  console.log(drawTable(
    [
      { gift: 'Book', quantity: 5 },
      { gift: 'Music CD', quantity: 1 },
      { gift: 'Doll', quantity: 10 }
    ],
    'quantity'
  ));
  // +----------+----+
  // | A        | B  |
  // +----------+----+
  // | Music CD | 1  |
  // | Book     | 5  |
  // | Doll     | 10 |
  // +----------+----+

  console.log(drawTable(
    [
      { a: 2, b: "Y", c: "X" },
      { a: 1, b: "Z", c: "W" },
      { a: 3, b: "A", c: "B" },
    ],
    'a'
  ));
}