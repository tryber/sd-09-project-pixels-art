window.onload = function(){
  let tr = document.body.table.createElement('tr');
  let td = document.body.table.tr.appendChild('td');

  function createsTable() {
    for (let indexRow = 0; indexRow < 5; indexRow += 1) {
      let tr = document.body.table.createElement('tr');
      for (let indexLine = 0; indexLine < 5; indexLine += 1) {
        if (indexRow === 5 && indexLine === 5) {
          break;
        } else {
          var td = document.createElement('td');
          td.appendChild(tr);
        }
      }
    }
  }
  createsTable();
}