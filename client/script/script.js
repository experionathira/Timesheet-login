
var pass;
var password;
console.log(password);
function validate() {
	pass=document.getElementById('password').value;
	password=(Crypto.MD5(pass)).toString(); 
	console.log(password);
	var user_id=document.getElementById('userid').value;


	if(user_id=="" && pass =="") {
		alert("fields are empty");
		return false;
	}

	else if (userid== "") {
		alert("Enter the UserId");
		return false;
	}

	else if (password=="") {
		alert("Enter the password");
	}

	else {
		login();
	}
} 

function login () {

		var httpObj=new	XMLHttpRequest();
		httpObj.onreadystatechange=function() {
		
			if(this.readyState=='4' && this.status=='200') {
				var result=this.responseText;
				result=JSON.parse(result);

				localStorage.setItem('token1',result.token);

					if (result.status==200)
				
					{
						if (result.flag==0) {
							window.location.href="adminView.html";
						}

						else if (result.flag==1) {
							window.location.href="timesheet.html";
					
						}
					
					}
			}

		}

	httpObj.open('POST','http://192.168.1.227:8081',true);
	httpObj.setRequestHeader('content-type','application/x-www-form-urlencoded');
	httpObj.send('userid='+document.getElementById('userid').value+'&password='+password);
	
}