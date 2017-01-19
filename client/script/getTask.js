function getTask() {
	var date = new date();
	document.getElementById('date').value=date;
	
	var httpObj=new	XMLHttpRequest();
	httpObj.onreadystatechange= function() {
		
		if(this.readyState=='4' && this.status=='200') {

			var result=this.responseText;
			result=JSON.parse(result);

				if(result.status==200) {

					var li = document.getElementById("list1");
					result.taskid.forEach(function(element){
						var option1 = document.createElement("option");
	   		  			option1.text = element.taskid;
	    	 			option1.value = element.taskid;
	    	 			option1.innerHTML=element.taskid;
	    	 			li.appendChild(option1);
					});

				}

			else {
				console.log(result);
				
			}
		}
	}

	httpObj.open('POST','http://192.168.1.227:8081/gettask',true);
	httpObj.setRequestHeader('content-type','application/x-www-form-urlencoded');
	httpObj.send();
}