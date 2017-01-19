//To assign task to employees
var emp_id= document.getElementById('empid').value;
var emp_name= document.getElementById('empname').value;
var select = document.getElementById("list1");
var select1= document.getElementById("list1").value;
var task_id = select.options[select.selectedIndex].value;
function validation() {
	

	if (emp_id == "" && emp_name == "") {
		alert("Fields are empty");
		return false;
	}

	else if (emp_id == "") {
		alert("Enter the Employee ID");
		return false;
	}

	else {
		assignTask();
	}
}



function assignTask () {

	var httpObj= new XMLHttpRequest();
	httpObj.onreadystatechange=function() {
		
		if(this.readyState=='4' && this.status=='200') {
			var result=this.responseText;
			result=JSON.parse(result);
				if(result.status=='200') {
					alert("Assigned task successfully");
					console.log(result);
					emp_id.value=null;
					emp_name.value=null;
					task_id.value=null;
				}

			else {
				console.log(result.message);
			}
		}
	}
	console.log(emp_id, emp_name, task_id  );

	httpObj.open('POST','http://192.168.1.227:8081/assigntask',true);
	httpObj.setRequestHeader('content-type','application/x-www-form-urlencoded');
	httpObj.send('empid='+emp_id+'&empname='+emp_name+ '&taskid=' +task_id);
}