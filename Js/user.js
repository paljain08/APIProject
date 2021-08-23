
function setData()
  {
	 
   
  var pid=document.myform.p_id.value
  localStorage.setItem('UProfile'+pid,document.myform.u_profile.value);
  localStorage.setItem('UFName'+pid,document.myform.u_fname.value);
  localStorage.setItem('ULName'+pid,document.myform.u_lname.value);
  localStorage.setItem('UEmail'+pid,document.myform.u_email.value);
  
  
  
   
   var formData = {};
   formData["UProfile"] = document.myform.u_profile.value
   formData["UFName"] = document.myform.u_fname.value
   formData["ULName"] = document.myform.u_lname.value
   formData["UEmail"] = document.myform.u_email.value
   
   
   insertNewRecord(formData,pid);
	
	
  }
  
   function insertNewRecord(data,pid)
  {
    var table = document.getElementById("tab").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
	cell1 = newRow.insertCell(0);
    cell1.innerHTML = pid;
	
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.UProfile;

    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.UFName;

    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.ULName;
 
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.UEmail;

   

 document.myform.reset();
    
	
  }
  
  function searchData()
 {
	 var id=document.myform.p_id.value;
	
	 alert('User First Name : '+localStorage.getItem('UFName'+id)+'\n'+'User Last Name: '+localStorage.getItem('ULName'+id)+'\n'+'User Email: '+localStorage.getItem('ULName'+id));
	 
	 return;
 }
 
  function updateData()
 {
	 var pid=document.myform.p_id.value;
	 var UFName=document.myform.u_fname.value;
     var ULName=document.myform.u_lname.value
	 var UEmail=document.myform.u_email.value
   
	 
	  localStorage.setItem('UFName'+pid,UFName);
    localStorage.setItem('ULName'+pid,ULName);
	 localStorage.setItem('UEmail'+pid,UEmail);
	  
    
	  alert("Updated First Name: "+UFName +'\n'+'Updated Last Name: '+ULName+'\n'+'Updated Email: '+UEmail);
 }
 
 
 function removeData()
 {
	 var p_id=document.myform.p_id.value;
  localStorage.removeItem('UFName'+p_id);
  localStorage.removeItem('ULName'+p_id);
  localStorage.removeItem('UProfile'+p_id);
  localStorage.removeItem('UEmail'+p_id);
  
  
  alert("Project Deleted Successfully .....");
 }