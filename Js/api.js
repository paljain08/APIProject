
function setData()
  {
	 
   var count =document.myform.pid.value;
  localStorage.setItem('p'+count,count);
  localStorage.setItem('Url'+count,document.myform.url.value);
  localStorage.setItem('Api_title'+count,document.myform.api_title.value);
  localStorage.setItem('Method'+count,document.myform.method.value);
  localStorage.setItem('Req'+count,document.myform.req.value);
  localStorage.setItem('Res'+count,document.myform.res.value);
  localStorage.setItem('Project'+count,document.myform.project.value);
  localStorage.setItem('Module'+count,document.myform.module.value);
  localStorage.setItem('Desc'+count,document.myform.desc.value);
  
  
   
   var formData = {};
   formData["Url"] = document.myform.url.value
   formData["Api_title"] = document.myform.api_title.value
   formData["Method"] = document.myform.method.value
   formData["Req"] = document.myform.req.value
   formData["Res"] = document.myform.res.value
   formData["Project"] = document.myform.project.value
   formData["Module"] = document.myform.module.value
   formData["Desc"] = document.myform.desc.value
   
   insertNewRecord(formData,count);
	
	
  }
  
  function insertNewRecord(data,count)
  {
    var table = document.getElementById("tab").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
	cell1 = newRow.insertCell(0);
    cell1.innerHTML = count;
	
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.Url;

    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Api_title;

    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.Method;
 
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.Req;

    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.Res;
	
	cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.Project;

    cell8 = newRow.insertCell(7);
    cell8.innerHTML = data.Module;

    cell9 = newRow.insertCell(8);
    cell9.innerHTML = data.Desc;

 document.myform.reset();
    
	
  }
  
  
 function removeData()
 {
	 var id=document.myform.p_id.value;
  localStorage.removeItem('p'+id);
  localStorage.removeItem('Url'+id);
  localStorage.removeItem('Api_title'+id);
  localStorage.removeItem('Method'+id);
  localStorage.removeItem('Req'+id);
  localStorage.removeItem('Res'+id);
  localStorage.removeItem('Project'+id);
  localStorage.removeItem('Module'+id);
  localStorage.removeItem('Desc'+id);
  
  alert("Project Deleted Successfully .....");
 }
 
 function updateData()
 {
	 var id=document.myform.p_id.value;
	 var Url=document.myform.p_url.value;
   var Api_title=document.myform.p_title.value
   /*var Method=document.myform.p_method.value
   var Req=document.myform.p_req.value
   var Res=document.myform.p_res.value
   var Project=document.myform.p_project.value
   var Module=document.myform.p_module.value
   var Desc=document.myform.p_desc.value */
	 
	  localStorage.setItem('Url'+id,Url);
    localStorage.setItem('Api_title'+id,Api_title);
     /*
    localStorage.setItem('Method'+id,Method);
    localStorage.setItem('Req'+id,Req);
    localStorage.setItem('Res'+id,Res);
    localStorage.setItem('Project'+id,Project);
    localStorage.setItem('Module'+id,Module);
    localStorage.setItem('Desc'+id,Desc);
    
     */

	  
	  alert("Updated Url: "+Url +'\n'+'Updated Title: '+Api_title);
 }
 
 function searchData()
 {
	 var id=document.myform.p_id.value;
	 var Url=document.myform.p_url.value;
	 alert('Project Title: '+localStorage.getItem('p'+id)+'\n'+'Project URL: '+localStorage.getItem('Url'+id)+'\n'+'Project Title: '+localStorage.getItem('Api_title'+id));
 }