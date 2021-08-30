var temp={};
var i=0;
function saveData(){

  var count=Math.round(Math.random()*100000);
  localStorage.setItem('p'+count,count);
  localStorage.setItem('project_title'+count, document.getElementById('project_title').value);
  localStorage.setItem('project_description'+count,document.getElementById('project_description').value);
  localStorage.setItem('project_logo'+count,document.getElementById('project_logo').value);
  temp[i]=count;

  let formData = {};
  formData["title"] = document.getElementById('project_title').value;
 formData["description"] = document.getElementById('project_description').value;
 formData["logo"] = document.getElementById('project_logo').value;
 insertNewRecord(formData,count);

	
  }
  
  function insertNewRecord(data,count)
  {
    var table = document.getElementById("tab").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
	 cell1 = newRow.insertCell(0);
    cell1.innerHTML = count;
	
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.title;

	
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.description;

    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.logo;

    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<button type="button" class="btn btn-warning" onClick="editData(this)">Edit</button>
                        <button type="button" class="btn btn-danger"  onClick="deleteData(this)">Delete</button>`;


 document.myform.reset();
  }
    

function searchData(){
    var id=document.getElementById('search').value;
    let formData = {};
    formData["title"] = localStorage.getItem('project_title'+id);
    formData["description"] = localStorage.getItem('project_description'+id);
    formData["logo"] = localStorage.getItem('project_logo'+id);
    insertNewRecord(formData,id);
}
function deleteData(td){
  selectedRow = td.parentElement.parentElement;
  row = td.parentElement.parentElement;
  // console.log(row);
  var id=selectedRow.cells[0].innerHTML;


  var result=confirm("The project will be deleted,Are you sure?");
  if(result==true)
  {
    localStorage.removeItem('p'+id);
    localStorage.removeItem('project_title'+id);
    localStorage.removeItem('project_description'+id);
    localStorage.removeItem('project_logo'+id);
    document.getElementById("tab").deleteRow(row.rowIndex);}

}
function editData(td){

  /*selectedRow = td.parentElement.parentElement;
  var id=selectedRow.cells[0].innerHTML;
  document.myform.project_title.value = selectedRow.cells[1].innerHTML;
  document.myform.project_description.value = selectedRow.cells[2].innerHTML;
 
  var project_title=document.getElementById('project_title').value;
  var project_description=document.getElementById('project_description').value;
  localStorage.setItem('project_title'+id,project_title);
  localStorage.setItem('project_description'+id,project_description);
  selectedRow.cells[1].innerHTML = localStorage.getItem('project_title' + id);
  selectedRow.cells[2].innerHTML = localStorage.getItem('project_description' + id);
  document.myform.reset();*/


/*    var id=document.myform.projectID.value;
    var project_title=document.getElementById('project_title').value;
    var project_description=document.getElementById('project_description').value;
    localStorage.setItem('project_title'+id,project_title);
    localStorage.setItem('project_description'+id,project_description);
    alert('Project title: '+localStorage.getItem('title'+id)+'\n'+'Project description '+localStorage.getItem('description'+id)+'\n'+'Project Logo: '+localStorage.getItem('logo'+id));
*/
}

