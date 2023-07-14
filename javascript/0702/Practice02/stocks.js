//주식 추가 함수

function newElement() {
  const row = document.getElementById('stockTable');
  const newRow = row.insertRow() 
  
  const stockName = document.querySelector('#stockName');
  const purchasePrice = document.querySelector('#purchasePrice');
  const quantity = document.querySelector('#quantity');

  if(stockName.value === "" || purchasePrice.value === "" || quantity.value === "" ) {
    alert("All fields must be filled out!");
  }
  else{
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);

    cell1.innerHTML = stockName.value;
    cell2.innerHTML = purchasePrice.value;
    cell3.innerHTML = quantity.value;
  
    let cell4 = newRow.insertCell(3);
    cell4.innerHTML = '<button class="deleteBtn">Delete</button>';
    cell4.querySelector(".deleteBtn").addEventListener("click", function() {
      this.parentElement.parentElement.remove();
    });
  }
  stockName.value = "";
  purchasePrice.value = "";
  quantity.value = "";
}

document.getElementById("addBtn").addEventListener("click", newElement);