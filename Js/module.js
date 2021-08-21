function onFormSubmit(){
    var formData = readFormData();
    insertNewRecord(formData);
}

function readFormData(){
    var formData = {};
    formData["moduletitle"] = document.getElementById("moduletitle").value;
    formData["project "] = document.getElementById("project").value;
    formData["description"] = document.getElementById("description").value;
   
    return formData;
}

function insertNewRecord(data){
    var table = document.getElementById("module").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.moduletitle;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.project;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.description;
    cell3 = newRow.insertCell(3);
    cell3.innerHTML = `<a>Edit</a>
                       <a>Delete</a>`;

}