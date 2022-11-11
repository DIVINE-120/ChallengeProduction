var selectedRow = null;
function onFormSubmit(event){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }
    else{ 
        

    }


}
// retrive data
function readFormData(){
    var formData = {};
    formData["productCode"] = document.getElementById("productCode").value;
    formData["Product"] = document.getElementById("product").value;
    formData["Description"] =document.getElementById("Description").value;
    formData["date"] =document.getElementById("date").value;
    formData["price"] =document.getElementById("price").value;
    formData["category"] =document.getElementById("category").value;
    formData["uploadingProduct"] =document.getElementById("uploadingProduct").value;
return formData;

}
// insert product
function insertNewRecord(data){
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.productCode;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.product;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.Description;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.date;
    var cell4 = newRow.insertCell(4);
        cell4.innerHTML = data.price;
    var cell5 = newRow.insertCell(5);
        cell5.innerHTML = data.category;
    var cell6 = newRow.insertCell(6);
       cell6.innerHTML = data.uploadingProduct;
     
}