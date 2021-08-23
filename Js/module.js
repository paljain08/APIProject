// var selectedRow = null

function onFormSubmit() {
    // var formData = readFormData();
    // if (selectedRow == null)
    readFormData();
    // insertNewRecord(formData, count);
    // else
    //     updateRecord();

    // resetForm();
}



function readFormData() {
    // var formData = {};
    // formData["moduletitle"] = document.getElementById("moduletitle").value;
    // formData["project"] = document.getElementById("project").value;
    // formData["description"] = document.getElementById("description").value;

    var count = Math.round(Math.random() * 100000);
    //localStorage.clear();
    localStorage.setItem('uid' + count, count);
    localStorage.setItem('ModuleTitle' + count, document.myform.moduletitle.value);
    localStorage.setItem('Project' + count, document.myform.project.value);
    localStorage.setItem('Description' + count, document.myform.description.value);
    



    var formData = {};
    formData["ModuleTitle"] = document.myform.moduletitle.value
    formData["Project"] = document.myform.project.value
    formData["Description"] = document.myform.description.value
    
    // return (formData, count);
    insertNewRecord(formData, count);
}

function insertNewRecord(formData, count) {
    var table = document.getElementById("module").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);


    cell0 = newRow.insertCell(0);
    cell0.innerHTML = count;
    cell1 = newRow.insertCell(1);
    cell1.innerHTML = formData.ModuleTitle;
    cell2 = newRow.insertCell(2);
    cell2.innerHTML = formData.Project;
    cell3 = newRow.insertCell(3);
    cell3.innerHTML = formData.Description;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<button type="button" class="btn btn-warning" onClick="onEdit(this)">Edit</button>
                        <button type="button" class="btn btn-danger"  onClick="onDelete(this)">Delete</button>`;

    document.myform.reset();


}

// function resetForm()
// {
//     document.getElementByName("moduletitle").value = "";
//     document.getElementByName("project").value = "";
//     document.getElementByName("description").value = "";

// }

function onEdit(td) {
    // console.log(td);
    // console.log(td.parentElement);
    selectedRow = td.parentElement.parentElement;
    // console.log(selectedRow);
    // document.getElementsByName("moduletitle").value = selectedRow.cells[0].innerHTML;
    document.myform.update.disabled = false;
    document.myform.submit.disabled = true;
    document.myform.uid.value = selectedRow.cells[0].innerHTML;
    document.myform.moduletitle.value = selectedRow.cells[1].innerHTML;
    document.myform.project.value = selectedRow.cells[2].innerHTML;
    document.myform.description.value = selectedRow.cells[3].innerHTML;

    // button.disabled = false;

}

function updateRecord() {
    //     selectedRow.cells[0].innerHTML = formData.moduletitle;
    //     selectedRow.cells[1].innerHTML = formData.project;
    //     selectedRow.cells[2].innerHTML = formData.description;


    var uid = document.myform.uid.value;
    var ModuleTitle = document.myform.moduletitle.value;
    var Project = document.myform.project.value;
    var Description = document.myform.description.value;

    localStorage.setItem('ModuleTitle' + uid, ModuleTitle);
    localStorage.setItem('Project' + uid, Project);
    localStorage.setItem('Description' + uid, Description);

    if(selectedRow.cells[0].innerHTML == uid){

        selectedRow.cells[1].innerHTML = localStorage.getItem('ModuleTitle' + uid);
        selectedRow.cells[2].innerHTML = localStorage.getItem('Project' + uid);
        selectedRow.cells[3].innerHTML = localStorage.getItem('Description' + uid);
    }

   

    alert("Updated Module Title: " + ModuleTitle);
    document.myform.reset();
    document.myform.update.disabled = true;
    document.myform.submit.disabled = false;

    // location.reload();

}

function onDelete(td) {
    // var uid = document.myform.uid.value;
    selectedRow = td.parentElement.parentElement;
    var uid = selectedRow.cells[0].innerHTML;
    localStorage.removeItem('uid' + uid);
    localStorage.removeItem('ModuleTitle' + uid);
    localStorage.removeItem('Project' + uid);
    localStorage.removeItem('Description' + uid);

    alert("Module Deleted Successfully .....");
    // document.myform.reset();
    // location.reload();
}

// function onDelete(td) {
//     if (confirm('Are you sure to delete this record?')) {
//         row = td.parentElement.parentElement;
//         document.getElementById("moduletitle").deleteRow(row.rowIndex);
//         resetForm();
//     }

// }

// function loadTable(formData, count){
//     var table = document.getElementById("module").getElementsByTagName('tbody')[0];
//     var newRow = table.insertRow(table.length);


//     cell0 = newRow.insertCell(0);
//     cell0.innerHTML = count;
//     cell1 = newRow.insertCell(1);
//     cell1.innerHTML = formData.ModuleTitle;
//     cell2 = newRow.insertCell(2);
//     cell2.innerHTML = formData.Project;
//     cell3 = newRow.insertCell(3);
//     cell3.innerHTML = formData.Description;
//     cell4 = newRow.insertCell(4);
//     cell4.innerHTML = `<button type="button" class="btn btn-warning" onClick="onEdit(this)">Edit</button>
//                         <button type="button" class="btn btn-danger"  onClick="onDelete(this)">Delete</button>`;

//     document.myform.reset();


// }