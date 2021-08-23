function saveData(){

    var count=Math.round(Math.random()*100000);
    localStorage.setItem('p'+count,count);
    localStorage.setItem('title'+count, document.myform.title.value);
    localStorage.setItem('description'+count,document.myform.description.value);
    localStorage.setItem('logo'+count,document.myform.logo.value);

    var formData = {};
    formData["title"] = document.myform.title.value
   formData["description"] = document.myform.description.value
   formData["logo"] = document.myform.logo.value
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

 document.myform.reset();
    
	
  }
    

function searchData(){

    var id=document.myform.projectID.value;
    alert('Project title: '+localStorage.getItem('title'+id)+'\n'+'Project description '+localStorage.getItem('description'+id)+'\n'+'Project Logo: '+localStorage.getItem('logo'+id));
}
function deleteData(){

    var id=document.myform.projectID.value;
  localStorage.removeItem('p'+id);
  localStorage.removeItem('title'+id);
  localStorage.removeItem('description'+id);
  localStorage.removeItem('logo'+id);
  alert('Deleted');
}
function updateData(){

    var id=document.myform.projectID.value;
    var title=document.getElementById('title').value;
    var description=document.getElementById('description').value;
    localStorage.setItem('title'+id,title);
    localStorage.setItem('description'+id,description);
    alert('Project title: '+localStorage.getItem('title'+id)+'\n'+'Project description '+localStorage.getItem('description'+id)+'\n'+'Project Logo: '+localStorage.getItem('logo'+id));
}
