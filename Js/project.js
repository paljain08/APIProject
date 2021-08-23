function saveData(){

    var count=Math.round(Math.random()*100000);
    localStorage.setItem('p'+count,count);
    localStorage.setItem('title'+count, document.getElementById('title').value);
    localStorage.setItem('description'+count,document.getElementById('description').value);
    localStorage.setItem('logo'+count,document.getElementById('logo').value);
    alert('Saved!');
    
}
function searchData(){

     var id=document.getElementById('projectID').value;
	 alert(localStorage.getItem('title'+id)+'\n'+localStorage.getItem('description'+id));

}
function deleteData(){

    var id=document.getElementById('projectID').value;
  localStorage.removeItem('p'+id);
  localStorage.removeItem('title'+id);
  localStorage.removeItem('description'+id);
  localStorage.removeItem('logo'+id);
  alert('Project Deleted');
}
function updateData(){

    var id=document.getElementById('projectID').value;
    var title=document.getElementById('title').value;
    var description=document.getElementById('description').value;
    localStorage.setItem('title'+id,title);
    localStorage.setItem('description'+id,description);
    alert(id+" "+ title +" "+description);
}
