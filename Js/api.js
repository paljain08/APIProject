var temp={};
var i=0;
function saveData(){

  var count=document.getElementById('pid').value
  localStorage.setItem('p'+count,count);
  localStorage.setItem('Project_Url'+count, document.getElementById('url').value);
  localStorage.setItem('Project_title'+count, document.getElementById('api_title').value);
  localStorage.setItem('Project_Method'+count, document.getElementById('method').value);
  localStorage.setItem('Project_Req'+count, document.getElementById('req').value);
  localStorage.setItem('Project_Res'+count, document.getElementById('res').value);
  localStorage.setItem('Project_Module'+count, document.getElementById('module').value);
  localStorage.setItem('Project_Desc'+count, document.getElementById('desc').value);
  
  temp[i]=count;

  let formData = {};
  formData["url"] = document.getElementById('url').value;
  formData["api_title"] = document.getElementById('api_title').value;
  formData["method"] = document.getElementById('method').value;
  formData["req"] = document.getElementById('req').value;
  formData["res"] = document.getElementById('res').value;
  formData["module"] = document.getElementById('module').value;
  formData["desc"] = document.getElementById('desc').value;
  insertNewRecord(formData,count);

	
  }
  
   function insertNewRecord(data,count)
  {
    var table = document.getElementById("tab").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
	
	cell1 = newRow.insertCell(0);
    cell1.innerHTML = count;
	
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.url;

	
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.api_title;

    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.method;
	
	cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.method;
	
	cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.req;
	
	cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.res;
	
	cell8 = newRow.insertCell(7);
    cell8.innerHTML = data.module;
	
	
	cell9 = newRow.insertCell(8);
    cell9.innerHTML = data.desc;

    cell10 = newRow.insertCell(9);
    cell10.innerHTML = `<button type="button" class="btn btn-warning" onClick="editData(this)">Edit</button>
                        <button type="button" class="btn btn-danger"  onClick="deleteData(this)">Delete</button>`;


 document.myform.reset();
  }
  
  
  function searchData(){
    var id=document.getElementById('search').value;
    let formData = {};
    formData["url"] = localStorage.getItem('Project_Url'+id);
    formData["api_title"] = localStorage.getItem('Project_title'+id);
    formData["method"]  = localStorage.getItem('Project_Method'+id);
	formData["req"]  = localStorage.getItem('Project_Req'+id);
	formData["res"]  = localStorage.getItem('Project_Res'+id);
	formData["module"]= localStorage.getItem('Project_Module'+id);
	formData["desc"]  = localStorage.getItem('Project_Desc'+id);
    insertNewRecord(formData,id);
}

function deleteData(td){
  selectedRow = td.parentElement.parentElement;
  row = td.parentElement.parentElement;
  // console.log(row);
  var id=selectedRow.cells[0].innerHTML;


  var result=confirm("The project will be deleted,Are you sure?");
  
  selectedRow.cells[1].innerHTML = localStorage.getItem('Project_title' + id);
  if(result==true)
  {
    localStorage.removeItem('p'+id);
    localStorage.removeItem('Project_Url'+id);
    localStorage.removeItem('Project_title'+id);
    localStorage.removeItem('Project_Method'+id);
	localStorage.removeItem('Project_Req'+id);
	localStorage.removeItem('Project_Res'+id);
	localStorage.removeItem('Project_Module'+id);
	localStorage.removeItem('Project_Desc'+id);
    document.getElementById("tab").deleteRow(row.rowIndex);}

}