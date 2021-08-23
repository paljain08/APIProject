

function onFormSubmit() {

    readFormData();

}



function readFormData() {


    var count = Math.round(Math.random() * 100000);

    localStorage.setItem('uid' + count, count);
    localStorage.setItem('ModuleTitle' + count, document.myform.moduletitle.value);
    localStorage.setItem('Project' + count, document.myform.project.value);
    localStorage.setItem('Description' + count, document.myform.description.value);




    var formData = {};
    formData["ModuleTitle"] = document.myform.moduletitle.value
    formData["Project"] = document.myform.project.value
    formData["Description"] = document.myform.description.value

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


function onEdit(td) {

    selectedRow = td.parentElement.parentElement;

    document.myform.update.disabled = false;
    document.myform.submit.disabled = true;
    document.myform.uid.value = selectedRow.cells[0].innerHTML;
    document.myform.moduletitle.value = selectedRow.cells[1].innerHTML;
    document.myform.project.value = selectedRow.cells[2].innerHTML;
    document.myform.description.value = selectedRow.cells[3].innerHTML;


}

function updateRecord() {


    var uid = document.myform.uid.value;
    var ModuleTitle = document.myform.moduletitle.value;
    var Project = document.myform.project.value;
    var Description = document.myform.description.value;

    localStorage.setItem('ModuleTitle' + uid, ModuleTitle);
    localStorage.setItem('Project' + uid, Project);
    localStorage.setItem('Description' + uid, Description);

    if (selectedRow.cells[0].innerHTML == uid) {

        selectedRow.cells[1].innerHTML = localStorage.getItem('ModuleTitle' + uid);
        selectedRow.cells[2].innerHTML = localStorage.getItem('Project' + uid);
        selectedRow.cells[3].innerHTML = localStorage.getItem('Description' + uid);
    }




    alert("Updated Module Title: " + ModuleTitle);
    document.myform.reset();
    document.myform.update.disabled = true;
    document.myform.submit.disabled = false;



}

function onDelete(td) {

    selectedRow = td.parentElement.parentElement;
    row = td.parentElement.parentElement;
    // console.log(row);
    var uid = selectedRow.cells[0].innerHTML;
    localStorage.removeItem('uid' + uid);
    var module_title = localStorage.getItem('ModuleTitle' + uid);
    localStorage.removeItem('ModuleTitle' + uid);
    localStorage.removeItem('Project' + uid);
    localStorage.removeItem('Description' + uid);

    alert("Module Deleted Successfully .....");

    document.getElementById("module").deleteRow(row.rowIndex);

}

function searchData() {


    // var input, filter, tr, td, a, i, txtValue;
    // input = document.searchbar.search.value;
    // filter = input.value.toUpperCase();
    // tr = document.getElementById("myUL");
    // li = ul.getElementsByTagName('li');

    // // Loop through all list items, and hide those who don't match the search query
    // for (i = 0; i < li.length; i++) {
    //     a = li[i].getElementsByTagName("a")[0];
    //     txtValue = a.textContent || a.innerText;
    //     if (txtValue.toUpperCase().indexOf(filter) > -1) {
    //         li[i].style.display = "";
    //     } else {
    //         li[i].style.display = "none";
    //     }
    // }



    var uid = document.searchbar.search.value;
    // alert('Module Title: '+localStorage.getItem('ModuleTitle'+uid)+'\n'+'Project: '+localStorage.getItem('Project'+uid)+'\n'+'Description: '+localStorage.getItem('Description'+uid));

    var data = "<table class='table table-secondary'><thead><tr><th>Module Title</th><th>Project</th><th>Description</th></tr></thead><tbody><tr><td>" + localStorage.getItem('ModuleTitle' + uid) + "</td><td>" + localStorage.getItem('Project' + uid) + "</td><td>" + localStorage.getItem('Description' + uid) + "</td></tr></tbody></table>";

    document.getElementById("search_result").innerHTML = data;


}

// const inpTitle = document.getElementById("inpTitle");
// const inpProject = document.getElementById("inpProject");
// const inpDescription = document.getElementById("inpDescription");
// const inpButton = document.getElementById("inpButton");
// const output = document.getElementById("output");

// inpButton.onclick = function(){
//     const title = inpTitle.value;
//     const project = inpProject.value;
//     const description = inpDescription.value;

//     console.log(title);
//     console.log(project);
//     console.log(description);

//     if(key && value){
//         localStorage.setItem(title, project, description);
//         location.reload();
//     }
// }