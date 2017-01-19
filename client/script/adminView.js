function adminView() {

	var httpObj=new	XMLHttpRequest();
	httpObj.onreadystatechange=function() {
		
		if (this.readyState=='4' && this.status=='200') {
			var result=this.responseText;
			result=JSON.parse(result);
			content = "<div class='table-responsive table-bordered'><table class='table thover' id='table1'><thead><tr><th>Emp ID</th><th>Emp name</th><th>Task ID</th><th>Task name</th><th>Date</th><th>Duration</th></tr></thead><tbody>";
			var i = 1;
			result.forEach(function(element) {
				content += "<tr><td>" + element.emp_id+ "</td><td>" + element.user_name + "</td><td>" + element.task_id+ "</td><td>" + element.task_name + "</td><td>" + element.date+ "</td><td>" + element.duration+"</td></tr>";
			    i++;
			});

			content += "</tbody> </table> </div>";
			console.log('content');   
			document.getElementById('tablecontent').innerHTML = content;
		}
					
	}

	httpObj.open('POST','http://192.168.1.227:8081/adminView',true);
	httpObj.setRequestHeader('content-type','application/x-www-form-urlencoded');
	httpObj.send();

}




    