function bcpForm() {
	var isFormValid = true;
	var firstname = $('#firstname').val();
	var age = $('#age').val();
	var pan = $('#pan').val(); 
	var email = $('#email').val();
	var alertMsg = null;

	$('.bcpenquiryForm').find('.validationalert').each(function (index, spanEle) {
		$(spanEle).html("");
		$(spanEle).hide();
	});

	if (!firstname && firstname.length < 1) {
		alertMsg = $('#firstname').closest('div .required').siblings('p').get(0);
		$(alertMsg).html("Please enter a Name");
		$(alertMsg).show();
		isFormValid = false;
	} else {
		alertMsg = $('#firstname').closest('div .required').siblings('p').get(0);
		$(alertMsg).hide();
	}

	if (!age || age <= 18) {
		alertMsg = $('#age').closest('div .required').siblings('p').get(0);
		$(alertMsg).html("Please enter a Age");
		$(alertMsg).show();
		isFormValid = false;
	}
    else if(age > 60){
        alertMsg = $('#age').closest('div .required').siblings('p').get(0);
		$(alertMsg).html("Please enter a Age below 60");
		$(alertMsg).show();
		isFormValid = false;
    }
    else {
		alertMsg = $('#age').closest('div .required').siblings('p').get(0);
		$(alertMsg).hide();
	}
	
 
	if ((!pan) || !ispan(pan)) {
		alertMsg = $('#pan').closest('div .required').siblings('p').get(0);
		$(alertMsg).html("Please enter a PAN Number.");
		$(alertMsg).show();
		isFormValid = false;
	} else {
		alertMsg = $('#pan').closest('div .required').siblings('p').get(0);
		$(alertMsg).hide();
	}

 

	if ((!email) || !isemail(email)) {
		alertMsg = $('#email').closest('div .required').siblings('p').get(0);
		$(alertMsg).html("Please enter a valid Email ID");
		$(alertMsg).show();
		//alert("Please enter a valid Email ID");
		isFormValid = false;
	} else {
		alertMsg = $('#email').closest('div .required').siblings('p').get(0);
		$(alertMsg).hide();
	}

	if (!isFormValid)
		return false;
}

function isemail(email) {
	var emailgex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return emailgex.test(email);
}

function ispan(pan){
	var panregex = /^([a-zA_Z]{5})([0-9]{4})([a-zA_Z]{1})$/;
	return panregex.test(pan);
}

$('.number-only').keypress(function(key) {
    if(key.charCode != 8 && key.charCode != 0 && (key.charCode < 48 || key.charCode > 57)) return false;
});


$('.char-only').keypress(function(key) {
if((key.charCode < 97 || key.charCode > 122) && (key.charCode < 65 || key.charCode > 90) && key.charCode != 8 && key.charCode != 0 ) return false;
});




$(document).ready(function(){
	chartview()  
   });
		  var xValues = ["Total Income", "Total Expenditure"]; 
	var yValues = [50, 10];
	var barColors = [
		"#a8df65",
	  "#58b4ae"
	  
	];
	
	function chngnum(){
		yValues[0] = $("#num1").val();
		yValues[1] = $("#num2").val(); 
		chartview(); 
	}

	function chartview(){
	new Chart("myChart", {
	  type: "doughnut",
	  data: {
		labels: xValues,
		datasets: [{
		  backgroundColor: barColors,
		  data: yValues
		}]
	  },
	  options: {
		title: {
		  display: true,
		  text: "Balance"
		}
	  }
	});
}
