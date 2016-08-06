$(document).ready(function(){
	$("#headerMenu").load('pages/template/header.jsp');
	$("#contentDiv").load('pages/template/Dashboard.jsp');
	$("#footer").load('pages/template/footer.jsp');
});




function doAjaxGET(URL,divId){
	
	$.ajax({
	  type: 'POST',
	  url: URL,
	  data: {}, //your form datas to post
	  success: function(response)
	  {
		  $('#'+divId).html("");
		  $('#'+divId).html(response);
	  
		  $("#contentDiv").oLoader('hide');
	
	  },
	  error: function()
	  {
		  $("#contentDiv").oLoader('hide');
	  }
	});
}

function doAjaxSubmitForm(URL,formId,divId){	
	
	
	$.ajax(
          {
              type: 'POST',
              url: URL,
              data: $('#'+formId).serialize(),
              async:true,
              success: function(response)
              {
            	  try {
		        	  $('#'+divId).html("");
		        	  $('#'+divId).html(response);  
		        	  $("#contentDiv").oLoader('hide');
            	  }
            	  catch (err) {
	                //  alert(err);
            		  console.log(err);
            		  $("#contentDiv").oLoader('hide');
	              }
              },
              error: function()
              {
            	//  alert("error.....!");
              }
          });
}
function doAjaxSubmitFormData(URL,formData,divId){
	 
	
	$.ajax(
          {
              type: 'POST',
              url: URL,
              data: formData,
              async:true,
              success: function(response)
              {
            	console.log(response);
            	  try {
		        	  $('#'+divId).html("");
		        	  $('#'+divId).html(response);  
		        	  $("#contentDiv").oLoader('hide');
	              } 
	              catch (err) {
	            	  console.log(err);
	            	  $("#contentDiv").oLoader('hide');
	              }
              },
              error: function()
              {
            	  $("#contentDiv").oLoader('hide');
              }
          });
	
}
function doAjaxGetFormData(URL,formData,divId){
	
	var fromData;
	$.ajax(
          {
              type: 'POST',
              url: URL,
              data: formData,
              async:false,
              success: function(response)
              {
            	  try {
            	  fromData=response;
            	  console.log(fromData);
            	  }             	  
	              catch (err) {
	            	  console.log(err);
	              }
	              $("#contentDiv").oLoader('hide');
              },
              error: function()
              {
            	 // alert("error.....!");
            	  $("#contentDiv").oLoader('hide');
              }
          });
	return fromData;
}
var startTime;
function doMenuSubmit(MENUNAME){
	$('#loadingDiv').css('z-index','10000');
	$('#loadingDiv').css('opacity','0.5');
	$('#loadingDiv').css('background','#000');
	 startTime = new Date();
	$('#loadingDiv').show();
	$.ajax({
          type: 'POST',
          url: 'menu.action?',
          data: 'menuname='+MENUNAME,
          async:true,
          success: function(response){
        	  try {
        		$('#contentDiv').html("");
          		$('#contentDiv').html(response);
          		$('#errDiv').hide();
          		$('#loadingDiv').hide();            		       	  
              } 
              catch (err) {
                console.log(err);	            	
              }              
          },
          error: function(){            	  
        	  $('#contentDiv').html("");
      		  $('#loadingDiv').hide();
          }
      });
}

/*
 * This method is for the Display of Error & Success Message above "accordion1 Div"  
 */
function erroralert(){
	if(NVOCCErrorMessage!=""){
		$("#errDiv").addClass("alert alert-block alert-danger");
	}else if(NVOCCSuccessMessage!=""){
		$("#errDiv").addClass("alert alert-block alert-success");
	}
}

function startLoader(){
	$("#contentDiv").oLoader({wholeWindow: true,fadeInTime: 1000,image: 'images/ownageLoader/NvoccLoaderBlue.gif'});
}

function stopLoader(){
	$("#contentDiv").oLoader('hide');
}



/** 
 * @author ubir
 *  
 * Common Drop down method by passing Id and QueryString Name *************************************************
 * 
 * @param inputId, queryStr
 * */

function getDropDownList(inputId,queryStr)
{
	var data;
    var formdata = "sAction=select&queryStr="+queryStr;
    $.ajax({
        type: "POST",
        url : "getCommonDropdown.ajx",
        data: formdata,
        async: false,
        success: function(response) {
        	
        	data = response.alResponseList;
        	
        			$('#'+inputId).select2({
		                data:data,
		                placeholder: " -- Select One Value -- ",
		        	    width: "224"
		        	    
		        	});
        }
    });
}

