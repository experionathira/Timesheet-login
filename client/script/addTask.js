function validation() {

	var task_id=document.getElementById('taskid').value;
	var task_name=document.getElementById('taskname').value;

	if (task_id== "" && task_name== "") {
		alert("Fields are empty");
		return false;
	}

	else if(task_id == "" ) {
		alert("Enter TaskID");
		return false;
	}

	else if(task_name== ""){
		alert("Enter Taskname");
		return false;
	}

	else {
		addTask();
	}
}




function addTask() {

	var httpObj=new	XMLHttpRequest();
	httpObj.onreadystatechange=function() {

		if(this.readyState=='4' && this.status=='200') {

			var result=this.responseText;
			result=JSON.parse(result);

			if(result.status==200) {
				console.log(result.message);
				alert("Added task successfully!");
			}

			else {
				console.log(result.message);
			}
		}
	}

	httpObj.open('POST','http://192.168.1.227:8081/insert',true);
	httpObj.setRequestHeader('content-type','application/x-www-form-urlencoded');
	httpObj.send('taskid='+document.getElementById('taskid').value+'&taskname='+document.getElementById('taskname').value);

}
	
