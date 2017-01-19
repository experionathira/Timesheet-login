
var tokenGet=localStorage.getItem('token1');

//############### To get the TaskID in select option ##################
function getTask1() {
	// var date = new date();
	// document.getElementById('date').innerHTML=date;
	
	var httpObj=new	XMLHttpRequest();
	httpObj.onreadystatechange=function() {

		if (this.readyState=='4' && this.status=='200') {
			var result=this.responseText;
			result=JSON.parse(result);

			if (result.status==200) {
				for (var i = 1; i < 6; i++) {
					var li = document.getElementById("list"+i);
					result.task_id.forEach(function(element){
						var option1 = document.createElement("option");
		   		  		option1.text = element.taskid;
		    	 		option1.value = element.taskid;
			    	 	option1.innerHTML=element.taskid;
		    	 		li.appendChild(option1);
					})
     					
				}
			}


			else {
				console.log(result);	
			}

			// console.log(result.token.username);
			document.getElementById('username').innerHTML="WELCOME " +result.token.username;
		}


	}

	httpObj.open('POST','http://192.168.1.227:8081/gettaskid',true);
	httpObj.setRequestHeader('content-type','application/x-www-form-urlencoded');
	httpObj.send('token1='+tokenGet);
}
	

//################ To get the current week ####################

function timesheetWeek() {

	var new_date=[];
	getTask1();
	var curr =new Date(); // get current date
	var curr1=curr.getFullYear()+'-'+("0" + (curr.getMonth() + 1)).slice(-2)+'-'+curr.getDate();
	document.getElementById('date').innerHTML=curr1;
	var dates;
	var j=0;

	for (var i = 1; i <6; i++) {

		var  dates= curr.getDate()-curr.getDay()+ i ; // First day is the day of the month - the day of the week
		var firstday = new Date(curr.setDate(dates));
		new_date[j]=firstday.getFullYear()+'-'+("0" + (firstday.getMonth() + 1)).slice(-2)+'-'+firstday.getDate();
		document.getElementById('th' + i).value=firstday;
		document.getElementById('th'+i).innerHTML= new_date[j];
		j++;
	}
	getValue(new_date);

}

//############### To get the previous week #########################

function getPreviousWeek() {

	var j=0;
	var new_date1=[];

	for (var i = 1; i <6; i++) {

		document.getElementById('taskname'+i).disabled = false;
		document.getElementById('time' + i).disabled = false;
		document.getElementById('list'+i).disabled = false;

		var date= document.getElementById('th'+i).value;
		var  dates= date.getDate()-7 ;
		var firstday = new Date(date.setDate(dates));
		document.getElementById('th' +i).value=firstday;
		new_date1[j]=firstday.getFullYear()+'-'+("0" + (firstday.getMonth() + 1)).slice(-2)+'-'+firstday.getDate();
		document.getElementById('th'+i).innerHTML=new_date1[j];
		
		j++;
	}

 	getValue(new_date1);
}

//################# To get the Next week ############################

function getnextWeek() {

	var j=0;
	var new_date2=[];

	for (var i = 1; i <6; i++) {

		document.getElementById('taskname'+i).disabled = false;
		document.getElementById('time' + i).disabled = false;
		document.getElementById('list'+i).disabled = false;

		var date= document.getElementById('th'+i).value;
		var  dates= date.getDate()+7 ;
		var firstday = new Date(date.setDate(dates));
		document.getElementById('th' +i).value=firstday;
		new_date2[j]=firstday.getFullYear()+'-'+("0" + (firstday.getMonth() + 1)).slice(-2)+'-'+firstday.getDate();
		document.getElementById('th'+i).innerHTML=firstday.getFullYear()+'-'+("0" + (firstday.getMonth() + 1)).slice(-2)+'-'+firstday.getDate();
		j++;
	}
 	getValue(new_date2);
}

//######################## To save the Task details entered by the user ###############

 function saveTask(arg){

	var save,select,taskid, taskname, duration, date, save1, select1, taskid1, duration1, date1;
	var save2 ,select2, taskid2, taskname2, duration2, date2, save3,  select3,  taskid3, taskname3, duration3, date3;
	var save4 ,select4, taskid4, taskname4,date4;
	var d;
	var d1;
	var d2;
	var d3;
	var d4;
	select = document.getElementById("list1");
	select1 = document.getElementById("list2");
	select2 = document.getElementById("list3");
	select3 = document.getElementById("list4");
	select4 = document.getElementById("list5");

	if (select.selectedIndex!= -1) {
		save=document.getElementById('save1').value;
		taskid = select.options[select.selectedIndex].value;
		taskname=document.getElementById('taskname1').value;
		duration=document.getElementById('time1').value;
		date=document.getElementById('th1').value;
		d=date.getFullYear()+'-'+("0" + (date.getMonth() + 1)).slice(-2)+'-'+date.getDate();
	}

	if(select1.selectedIndex != -1) {
		save1=document.getElementById('save2').value;
		taskid1 = select1.options[select1.selectedIndex].value;
		taskname1=document.getElementById('taskname2').value;
		duration1=document.getElementById('time2').value;
		date1=document.getElementById('th2').value;
		d1=date1.getFullYear()+'-'+("0" + (date1.getMonth() + 1)).slice(-2)+'-'+date1.getDate();
	}
 	if (select2.selectedIndex != -1) {

		save2=document.getElementById('save3').value;
		taskid2 = select2.options[select2.selectedIndex].value;
		taskname2=document.getElementById('taskname3').value;
		duration2=document.getElementById('time3').value;
		date2=document.getElementById('th3').value;
		d2=date2.getFullYear()+'-'+("0" + (date2.getMonth() + 1)).slice(-2)+'-'+date2.getDate();

 	};
 	 if(select3.selectedIndex != -1) {
		save3=document.getElementById('save4').value;
		taskid3 = select3.options[select3.selectedIndex].value;
		taskname3=document.getElementById('taskname4').value;
		duration3=document.getElementById('time4').value;
		date3=document.getElementById('th4').value;
		d3=date3.getFullYear()+'-'+("0" + (date3.getMonth() + 1)).slice(-2)+'-'+date3.getDate();
 	}

 	if(select4.selectedIndex != -1) {
		save4=document.getElementById('save5').value;
	 	taskid4 = select4.options[select4.selectedIndex].value;
		taskname4=document.getElementById('taskname5').value;
	 	duration4=document.getElementById('time5').value;
	 	date4=document.getElementById('th5').value;
	 	d4=date4.getFullYear()+'-'+("0" + (date4.getMonth() + 1)).slice(-2)+'-'+date4.getDate();
 	}
 
	var httpObj=new	XMLHttpRequest();
	httpObj.onreadystatechange=function() {
		
		if(this.readyState=='4' && this.status=='200') {
 			var result=this.responseText;
			result=JSON.parse(result);

			 	if(result.status==200) {
			 		alert("Timesheet entry successfull");
   				}				
		}

		else {
 			console.log(result);
				
		}
 	}

 	switch(arg) {

	 	case 'save1': 	document.getElementById('taskname1').disabled = true;
						document.getElementById('time1' ).disabled = true;
						document.getElementById('list1').disabled = true;
	 					httpObj.open('POST','http://192.168.1.227:8081/savetask',true);
						httpObj.setRequestHeader('content-type','application/x-www-form-urlencoded');
						httpObj.send('token1=' +tokenGet+'&task_id='+taskid+'&task_name='+taskname+'&duration=' +duration+'&date=' +date+ '&d=' +d);
						break;

		case 'save2': 	document.getElementById('taskname2').disabled = true;
						document.getElementById('time2' ).disabled = true;
						document.getElementById('list2').disabled = true;
						httpObj.open('POST','http://192.168.1.227:8081/savetask',true);
						httpObj.setRequestHeader('content-type','application/x-www-form-urlencoded');
						httpObj.send('token1=' +tokenGet+'&task_id='+taskid1+'&task_name='+taskname1+'&duration=' +duration1+'&date=' +date1+ '&d=' +d1);
					  	break;


		case 'save3': 	document.getElementById('taskname3').disabled = true;
						document.getElementById('time3' ).disabled = true;
						document.getElementById('list3').disabled = true;
						httpObj.open('POST','http://192.168.1.227:8081/savetask',true);
					 	httpObj.setRequestHeader('content-type','application/x-www-form-urlencoded');
					  	httpObj.send('token1=' +tokenGet+'&task_id='+taskid2+'&task_name='+taskname2+'&duration=' +duration2+'&date=' +date2+ '&d=' +d2);
					  	break;

		case 'save4': 	document.getElementById('taskname4').disabled = true;
						document.getElementById('time4' ).disabled = true;
						document.getElementById('list4').disabled = true;
						httpObj.open('POST','http://192.168.1.227:8081/savetask',true);
					  	httpObj.setRequestHeader('content-type','application/x-www-form-urlencoded');
					 	httpObj.send('token1=' +tokenGet+'&task_id='+taskid3+'&task_name='+taskname3+'&duration=' +duration3+'&date=' +date3+ '&d=' +d3);
					 	break;

		case 'save5': 	document.getElementById('taskname5').disabled = true;
						document.getElementById('time5' ).disabled = true;
						document.getElementById('list5').disabled = true;

						httpObj.open('POST','http://192.168.1.227:8081/savetask',true);
					  	httpObj.setRequestHeader('content-type','application/x-www-form-urlencoded');
					 	httpObj.send('token1=' +tokenGet+'&task_id='+taskid4+'&task_name='+taskname4+'&duration=' +duration4+'&date=' +date4+ '&d=' +d4);
					 	break;


	}


 	
}


//####### To get the already entered task details

function getValue(arr ) {
	
	var httpObj=new	XMLHttpRequest();
	httpObj.onreadystatechange=function() {
		
		if(this.readyState=='4' && this.status=='200') {
 			var result=this.responseText;
			result=JSON.parse(result);
			
			var j=1;

			for (var j= 1; j < 6; j++) {

				document.getElementById('time'+j).value=null;
				document.getElementById('taskname'+j).value=null;
				document.getElementById('list'+j).value="";
			}
			
			if (result=="") {
				for (var j = 1; j < 6; j++) {

					document.getElementById('taskname'+j).value=null;
					document.getElementById('time' + j).value=null;
				};
			}

			else {
					
				for (var j = 1; j<6; j++) {
					
					for (var i = 0; i < result.length; i++) {

						var a=document.getElementById('th'+j).value;
						var b=a.getFullYear()+'-'+("0" + (a.getMonth() + 1)).slice(-2)+'-'+('0' + a.getDate()).slice(-2);
						 
						if (result[i].date == b) {
							
							document.getElementById('list'+j).value=result[i].task_id;
							document.getElementById('taskname'+j).value=  result[i].task_name;
							document.getElementById('time' + j).value=result[i].duration;
							
							if(document.getElementById('list'+j).value.length>1 && document.getElementById('taskname'+j).value.length>1 && document.getElementById('time' + j).value.length>1 ){
								
								document.getElementById('taskname'+j).disabled = true;
								document.getElementById('time' + j).disabled = true;
								document.getElementById('list'+j).disabled = true;
							}
						
						

						
						}	
						
					}

				
				}
			
			}
			

				
	}
	else {
 			console.log(result);
				
			}

	}

	arr=JSON.stringify(arr);
	httpObj.open('POST','http://192.168.1.227:8081/getvalue',true);
	httpObj.setRequestHeader('content-type','application/x-www-form-urlencoded');
	httpObj.send('date='+arr+'&token1='+tokenGet);
	

}


	




