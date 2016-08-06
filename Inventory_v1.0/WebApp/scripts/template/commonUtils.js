var testData;
var exam = [];
var count = 0;
var str;
/*---Email Validation Method start  || u can just call in jsp =>onblur="validateEmail(this.form.yourformname);"---*/

function validateEmail(formId) {
	//alert(formId);
	var email = document.getElementById("emailid").value;
	//alert(email);
	if(email.length<=0){
		$('#emailidcheck').html('');
	}else{
		    var x = $('#'+formId).serialize();
		    var atpos = x.indexOf("@");
		    var dotpos = x.lastIndexOf(".");
		    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		    if (!emailReg.test(email)) {
		    	$('#emailidcheck').html('Please Enter valid e-mail id');
		        return false;
		    }else{
		    	//alert("Success::"+x);
		    	$('#emailidcheck').html('');
		    	return true;
		    }
       }
}



/*--------------end---------------*/

/*  @author raghavan
 * ---Web URL Validation Method start  || u can just call in jsp =>onblur="validateWebsiteURL(this.form.yourformname);"---*/

function validateWebsiteURL(formId) {
	var url = document.getElementById("webSite").value;

	//var pattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    var pattern = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/;
	if(pattern.test(url)) {
    	$('#websiteURLCheck').html('');
        return true;
    }
	else{
    	$('#websiteURLCheck').html('Please Enter a valid URL!');
        return false;
    }
}


/**
 * limited text type validation start  || call in jsp=> onKeyDown="limitText(this.form.portname,this.form.countdown,30);"
                                                        * onKeyUp="limitText(this.form.portname,this.form.countdown,30);" ---*/

function limitText(limitField, limitCount, limitNum) {
	if (limitField.value.length > limitNum) {

		limitField.value = limitField.value.substring(0, limitNum);
	} else {
		limitCount.value = limitNum - limitField.value.length;
	}
}



/** @author raghavan
 * ---Allow only uppercase letter in text field Method start ||
 * you should declare in your respective form js file => with your corresponding input field "id" in arguments as string format -
 * Example: changeToUpperCase('inputId');
 * -- */
function changeToUpperCase(inputId){
	$("#"+inputId).on('input', function(evt) {
		  var input = $(this);
		  var start = input[0].selectionStart;
		  $(this).val(function (_, val) {
		    return val.toUpperCase();
		  });
		  input[0].selectionStart = input[0].selectionEnd = start;
		});
}



/**
 * ---Allow only uppercase letter for first letter in text field Method start
 *
 * You should declare in your respective form js file => with your corresponding input field "id" in arguments as string format -
 * Example: changeToUpperCaseForFirstLetter('inputId');
 */
function changeToUpperCaseForFirstLetter(inputId){
	$("#"+inputId).on('keydown', function(event) {
	    if (this.selectionStart == 0 && event.keyCode >= 65 && event.keyCode <= 90 && !(event.shiftKey) && !(event.ctrlKey) && !(event.metaKey) && !(event.altKey)) {
	       var $t = $(this);
	       event.preventDefault();
	       var char = String.fromCharCode(event.keyCode);
	       $t.val(char + $t.val().slice(this.selectionEnd));
	       this.setSelectionRange(1,1);
	    }
	});
}



/** @author raghavan
 * ---Allow only numbers in text field Method start ||
 * you should declare in your respective form js file => with your corresponding input field, error message in arguments --- */

function numberValidate(inputId,errorMsg){
	$('#'+inputId).keyup(function() {
	    var $th = $(this);
	    $th.val( $th.val().replace( /[^ 0-9/()]/,  function(str){
	    	$("#"+errorMsg).html("Numbers Only").show().fadeOut("slow");
	    	return '';
	    	}));
	});
}

function amountValidate(inputId){
	$('#'+inputId).keyup(function() {
		this.value = this.value.replace(/[^0-9\.]/g,'');
		return this.value;
	});
}

/*---Allow only numbers in text field Method start || u can just call in jsp => onkeypress='validate(event)' ---*/

function validate(event) {
	  var theEvent = event || window.event;
	  var key = theEvent.keyCode || theEvent.which;
	  key = String.fromCharCode( key );
	  var regex = /[0-9]|\./;

	  if( !regex.test(key) ) {
		    theEvent.returnValue = false;
		    if(theEvent.preventDefault) theEvent.preventDefault();
		  }
	  if ((event.which != 46 || $(this).val().indexOf('.') != -1) && (event.which < 48 || event.which > 57)) {
		   // event.preventDefault();
		    $("#errormsg").html("Numbers Only").show().fadeOut("slow");
	        return false;
		  }
	}


function validate1(event) {
	  var theEvent = event || window.event;
	  var key = theEvent.keyCode || theEvent.which;
	  key = String.fromCharCode( key );
	  var regex = /[0-9]|\./;

	  if( !regex.test(key) ) {
		    theEvent.returnValue = false;
		    if(theEvent.preventDefault) theEvent.preventDefault();
		  }
	  if ((event.which != 46 || $(this).val().indexOf('.') != -1) && (event.which < 48 || event.which > 57)) {
		   // event.preventDefault();
		    $("#errormsg1").html("Numbers Only").show().fadeOut("slow");
	        return false;
		  }
	}

function validate2(event) {
	  var theEvent = event || window.event;
	  var key = theEvent.keyCode || theEvent.which;
	  key = String.fromCharCode( key );
	  var regex = /[0-9]|\./;

	  if( !regex.test(key) ) {
		    theEvent.returnValue = false;
		    if(theEvent.preventDefault) theEvent.preventDefault();
		  }
	  if ((event.which != 46 || $(this).val().indexOf('.') != -1) && (event.which < 48 || event.which > 57)) {
		   // event.preventDefault();
		    $("#errormsg2").html("Numbers Only").show().fadeOut("slow");
	        return false;
		  }
	}

function validate3(event) {
	  var theEvent = event || window.event;
	  var key = theEvent.keyCode || theEvent.which;
	  key = String.fromCharCode( key );
	  var regex = /[0-9]|\./;

	  if( !regex.test(key) ) {
		    theEvent.returnValue = false;
		    if(theEvent.preventDefault) theEvent.preventDefault();
		  }
	  if ((event.which != 46 || $(this).val().indexOf('.') != -1) && (event.which < 48 || event.which > 57)) {
		   // event.preventDefault();
		    $("#errormsg3").html("Numbers Only").show().fadeOut("slow");
	        return false;
		  }
	}

function validate4(event) {
	  var theEvent = event || window.event;
	  var key = theEvent.keyCode || theEvent.which;
	  key = String.fromCharCode( key );
	  var regex = /[0-9]|\./;

	  if( !regex.test(key) ) {
		    theEvent.returnValue = false;
		    if(theEvent.preventDefault) theEvent.preventDefault();
		  }
	  if ((event.which != 46 || $(this).val().indexOf('.') != -1) && (event.which < 48 || event.which > 57)) {
		   // event.preventDefault();
		    $("#errormsg4").html("Numbers Only").show().fadeOut("slow");
	        return false;
		  }
	}


/*--------------end---------------*/






/*---Bootstrap color change Method start || just call in jsp => validform();---*/


function validform(){
	$("input,textarea,select").jqBootstrapValidation(
            {
               // preventSubmit: true,
                submitError: function($form, event, errors) {
                    // Here I do nothing, but you could do something like display
                    // the error messages to the user, log, etc.
                },
                /*submitSuccess: function($form, event) {
                    //event.preventDefault();
                },*/
                filter: function() {
                    return $(this).is(":visible");
                }
            }
        );
}


/*--------------end---------------*/





/** @author raghavan
 * ---Phone no validation Method start---*/
function phoneNumberValidation(inputId){

	$('#'+inputId).keyup(function() {
	    var $th = $(this);
	    $th.val( $th.val().replace( /[^ 0-9-+/()]/,  function(str){
	    	return '';
	    	}));
	});
}


/*--------------end---------------*/

/** @author raghavan
 * Decimal Format Validation with corresponding jsp form field inputId and errorMsg Id
 * Example: Declare it as decimalFormatValidation('input ID','errormsg ID');
 * */
function decimalFormatValidation(inputId,errormsg){
	$('#'+inputId).keyup(function() {
	    var $th = $(this);
	    $th.val( $th.val().replace( /[^ 0-9./()]/,  function(str){
	    	$("#"+errormsg).html("Numbers Only").show().fadeOut("slow");
	    	return '';
	    	}));
	});
}
/**
 * decimal format validation for jqGrid - doesn't allow text
 *
 * Example: inputId --> $('input[name="inputId"]');
 *
 * @param inputId
 */
function decimalFormatValidationForJqGrid(inputId){
	inputId.keyup(function() {
	    var $th = $(this);
	    $th.val( $th.val().replace( /[^ 0-9./()]/,  function(str){

	    	return '';
	    	}));
	});
}

/*---allow only alphabets Method start || u can just call in jsp => onkeypress="return onlyAlphabets(event)"---*/

function onlyAlphabets(e, t) {
	try {
		if (window.event) {
			var charCode = window.event.keyCode;
		} else if (e) {
			var charCode = e.which;
		} else {
			return true;
		}
		if ((charCode > 64 && charCode < 91)
				|| (charCode > 96 && charCode < 123) || (charCode > 07 && charCode < 10) )
			return true;
		else
			return false;
	} catch (err) {
		alert(err.Description);
	}
}
/*--------------end---------------*/

/** @author Manikandan
 * Get dynamic grid height
 */
function getDynamicGridHeight(data){
	/*var gheight=301;*/
	var gheight='100%';
	if(data==null || data=="" || data==undefined)
	{
		data=[];
	}
	var rowCount=data.length;
	if(rowCount<=10){
		return 'auto';
	}
	else
	{
		return gheight;
	}

}
/** @author Manikandan
 * JqGrid Date Search
 */
function fnInitSearchDate(elem)
{
	    var initSearchDate=  $(elem).datepicker({
	            dateFormat: 'dd/mm/yy',
	            autoSize: true,
	            changeYear: true,
	            changeMonth: true,
	            showButtonPanel: true,
	            showWeek: true
	        });
	   return initSearchDate;
}
/** @author Manikandan
 * JqGrid Date Edit
 */
function fnInitDateEdit(elem){

	var initDateEdit = function (elem) {
		setTimeout(function () {
            $(elem).datepicker({
                dateFormat: 'dd/mm/yy',
                autoSize: true,
                showOn: 'button',
                changeYear: true,
                changeMonth: true,
                showButtonPanel: true,
                showWeek: true
            });
        }, 100);
    };
    return initDateEdit;
}

/**
 * @author raghavan
 * Description: Search Operators for Grid Column Search
 *  *
 */
function fixSearchOperators(gridId) {
	    var $grid = $("#"+gridId),
        columns = $grid.jqGrid ('getGridParam', 'colModel'),
        filterToolbar = $($grid[0].grid.hDiv).find("tr.ui-search-toolbar");

    filterToolbar.find("th").each(function(index) {
        var $searchOper = $(this).find(".ui-search-oper");
        if (!(columns[index].searchoptions && columns[index].searchoptions.searchOperators)) {
            $searchOper.hide();
        }
    });
}


/** @author raghavan
 * Added to create 'return Empty space' in json for form fields
 *
 * */
function returnSpaceForEmpty(ElementID){
	if(($("#"+ElementID).val()=="") || ($("#"+ElementID).val()==" ")){
		return "";
	}else {
		return $("#"+ElementID).val();
	}
}

/**
 * @author Manikandan
 *
 * @param JQGRID Functionality...
 * Added for (add and edit) 'JQModal' popup align center
 *
 *   setJQModalPopupAlignCenter(popUpId); ---- Declare this method in beforeShowForm for both addSettings & editSettings
 *                                        with jqgrid table id as argument.
 */

function setJQModalPopupAlignCenter(popUpId)
{
	 var offset = $("#menuDiv").offset();
     var posY = offset.top - $(window).scrollTop();
     var posX = offset.left - $(window).scrollLeft();
     var height=jQuery(window).height();
     var pageHeight=height+Math.abs(posY);
	 var popupHeight=Math.round($('#'+popUpId).height()/2);
     var popupWidth=Math.round($('#'+popUpId).width()/2);
     $('#'+popUpId).css({"top":((jQuery(window).height())/2+Math.abs(posY)-popupHeight)+"px", "left":(jQuery(window).width()/2-popupWidth)+"px"});
}


jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", ( $(window).height() - this.height() ) / 2+$(window).scrollTop() + "px");
    this.css("left", ( $(window).width() - this.width() ) / 2+$(window).scrollLeft() + "px");
    return this;
}


/**
 *
 * Method to select date based on user input
 * Type Date will show the suggest...
 *
 * @param inputId
 */

function datepickernew(inputId){
		var formattedDate,formattedDateDDMMYYYY;
		var input = $('#'+inputId);
		var empty_string = "Type a date above",
			date_string = $("#"+inputId+"div"),date="";
		date_string.show();

		/*if($("#"+inputId+"div").val() == empty_string){
			date_string.val(empty_string);
		}*/

		if(input.val()==""){
			date_string.show();
		}else{
			if(!$("#"+inputId+"div").val().trim()){
				date_string.val(empty_string);
				$("#"+inputId+"div").val('');
			}
		}


		input.keyup(
				function (e) {
					if(input.val().length > 0) {
						var typeDate=input.val().toString();

						typeDate = typeDate.replace(/\//g, "");

							date = Date.parseExact(typeDate, 'dMyyyy');
							if (date!=null) {
							    formattedDate = date.toString("dddd, dd,MMMM, yyyy");
							    date_string.addClass("accept").text(formattedDate);
							}

							else{
								input.addClass("validate_error");
								//formattedDate = "not a valid date";
								formattedDate = "";
							}



					}else{
						date_string.text(empty_string).addClass("empty");

					}
					date_string.val(formattedDate);
				}
			);

	return formattedDate;
}

/**
 * Datepicker for form fieldss..
 *
 * Eg: Declare this method in each form date fields - parse your input id inside arguments -- formDatepicker('input Id');
 */


function formDatepicker(inputId){
	var inputIdWithoutHash = inputId.replace("#");
	$("#"+inputIdWithoutHash+"div").hide();
	if($("#"+inputIdWithoutHash).val()!=""){
		$("#"+inputIdWithoutHash).datepicker({
			dateFormat : 'dd/mm/yy',
			  beforeShow: function(input, inst)
			  {
			       inst.dpDiv.css({marginTop: -input.offsetHeight + 'px', marginLeft: input.offsetWidth+25 + 'px'});
			  },
			changeYear: true,
			changeMonth: true,
			 onSelect: function(dateText, inst) {
				  if(inputId == "dueDt" || inputId == "purInvoiceDt"){
					  dateDifference();
				  }
				  else if(inputId == "invoiceDate" || inputId == "invDueDate"){
					  invDateDifference();
				  }
		      }
		});
	}
	
}

function formDatepickerForJqGridDateDiv(inputId){
	
	$("#"+inputId+"div").hide();
	$("#"+inputId).datepicker({
		 dateFormat : 'dd/mm/yy',
		 beforeShow: function(input, inst){
		       inst.dpDiv.css({marginTop: -input.offsetHeight + '%', marginLeft: input.offsetWidth+25 + '%'});		       
		 },
		 changeYear: true,
		 changeMonth: true
	});
}

function showDatepicker(inputId){
	$('#'+inputId).datepicker('show');
	$('#'+inputId+"div").val('');
}


function dateUtil(inputId){
	$("#"+inputId).on('focus', function(e){
		datepickernew(e.currentTarget.id);
		var fmtdate = formDatepicker("#"+inputId);
		
	});
	$("#"+inputId).on('blur', function(e){
		debugger;
		var last = $("#"+e.currentTarget.id+'div').val();
		if(last!=""){
			last = Date.parse(last).toString("dd/MM/yyyy");
			
		}	
		$("#"+e.currentTarget.id).val(last);
	});
	$("#"+inputId).on('focusout keypress', function(e){
		
		if (e.type == 'focusout' || e.keyCode == '13') {
			var last = $("#"+e.currentTarget.id+'div').val();
			if(last!=""){
				last = Date.parse(last).toString("dd/MM/yyyy");
			}			
			$("#"+e.currentTarget.id).val(last);
		}

	});

}
/**
 * date Util For Detail Grid **********************
 * 
 * @param inputName
 */
function dateUtilSubGrid(inputName){
	var formattedDate,formattedDateDDMMYYYY;
	var input = $('input[name="'+inputName+'"]')[1].value;
	var date="";
	var typeDate=input.toString();
	date = Date.parseExact(typeDate, 'dMyyyy');
    formattedDate = date.toString("dd/MM/yyyy");
    $('input[name="'+inputName+'"]').val(formattedDate);
    $('input[name="'+inputName+'"]').focus();
}


//for release order
function dateUtilValue(inputId){
	$('#'+inputId).on('focus', function(e){
		datepickernew(e.currentTarget.id);
		formDatepicker("#"+inputId);
	});
	  $('#'+inputId).on('blur', function(e){
		  if($('#'+inputId).val() == ""){
			  getCurrentDate(inputId)
		  }
		  else{
			  var last = $('#'+e.currentTarget.id+'div').val();
			  last = Date.parse(last).toString("dd/MM/yyyy");
			  $('#'+e.currentTarget.id).val(last);
			  $('#'+e.currentTarget.id).val(last);
		  }
	  });
	  $('#'+inputId).on('focusout keypress', function(e){
			if (e.type == 'focusout' || e.keyCode == '13') {
				var last = $('#'+e.currentTarget.id+'div').val();
				last = Date.parse(last).toString("dd/MM/yyyy");
				$('#'+e.currentTarget.id).val(last);
			}
		});
}
/**
 *
 * Shortcut Form fields
 *
 * Declare in your jsp file script tag with no of fields in parameter (argument name: totalTabIndex)- 'shortcutFormFields(totalTabIndex);'
 	shortcutFormFields('15','addnewcompany','addcompany','cancel');
 */
/*
function shortcutFormFields(){
	$("[TabIndex=1]").focus();
	var totalTabIndex=15; //No of fields

	var tabindex=2;

		shortcut.add("Shift+N",function() {
			addnewcompany();
		});

		shortcut.add("Enter",function() {
			$("[TabIndex='"+tabindex+"']").focus();
			tabindex++;
			if(tabindex>totalTabIndex)
			{
				tabindex=1;
			}
		});

		shortcut.add("Ctrl+S",function() {
			addcompany();
		});

		shortcut.add("ESC",function() {
			cancel();
		});		$('#companynamestatus').html('');
		$('#companycodestatus').html('')
}*/

/*function shortcutForFormFields(totalTabIndex,addNewEntry,saveEntry,cancelEntry){

	$("[TabIndex=1]").focus();
	//var totalTabIndex=15;
	var tabindex=1;
		shortcut.add("Shift+N",function() {
			window[addNewEntry]();

		});

		shortcut.add("ESC",function() {
			window[cancelEntry]();
		});
		shortcut.add("Ctrl+S",function() {
			window[saveEntry]();
		});
		shortcut.add("Enter",function() {
			$("[TabIndex='"+tabindex+"']").focus();
			tabindex++;
			if(tabindex>totalTabIndex)
			{
				tabindex=1;
			}
		});

}*/


function roundoff(iLen,fAmtValue)
{
	var fno=fAmtValue;
	var fno1=fAmtValue;
	var iLastNum=0;
	var bFlag=false;

	fno=fno.toString();

	for(var k=0; k<fno.length;k++)
	{
		var sCh =fno.substring(k,k+1);
		if(sCh==".")
		{
			//fecth values after the decimal point
			fno=fno.substring(k+1,k+fno.length);
			//retreive last number in the decimal
			iLastNum=fno.substring(iLen+1,iLen);
			iLastNum=parseInt(iLastNum);

			//if the last number is greater than equal to 5 add 1
			iLastNum=0;
			fno1=parseFloat(fno1)+parseFloat(iLastNum);
			fno1=fno1.toString();
			fno1=fno1.substring(0,parseInt(k)+parseInt(1)+parseInt(iLen));
			return fno1;
		}
	}
	if(bFlag==false)
	{
		return fAmtValue;
	}
}


function truncate(num){
	string = "" + num;

	if (string.indexOf('.') == -1)
		return string + '.00';
		seperation = string.length - string.indexOf('.');

	if(seperation == 1)
		return string + '00';
	if(seperation > 3)
		return string.substring(0,string.length-seperation+3);
	else if(seperation == 2)
		return string + '0';

	return string;
}


function shortcutKeyForJqGridForm(gridId)
{
    $("[id^='FrmGrid_"+gridId+"']").each(function(){
        var me = $(this);
        var myId = me.attr( "id" );
        var keyBinding = myId.replace("form", "").replace( /(.{4})/g,"$1+" );
        me.find("input").each( function()
        {
            $( this ).bind( "keydown keypress keyup", keyBinding, disableCtrlKeyCombination );
        });
    });
}

function checkStringNullorEmpty(variable1) {
	if(variable1 !== null && variable1 !== undefined && variable1 !==""){
		return variable1;
	}else{
		variable1="";
		return variable1;
	}
}

/**
 * @author raghavan
 *
 * @param inputId
 *
 * @return Current Date
 */


var currentDates="";
function getCurrentDate(inputId){
	var fullDate = new Date();
	var twoDigitMonth = (fullDate.getMonth()+1)+"";if(twoDigitMonth.length==1)  twoDigitMonth="0" +twoDigitMonth;
	var twoDigitDate = fullDate.getDate()+"";if(twoDigitDate.length==1) twoDigitDate="0" +twoDigitDate;
	currentDates = twoDigitDate + "/" + twoDigitMonth + "/" + fullDate.getFullYear();
	$('#'+inputId).val(currentDates);
}


/**
 * @author Raghavan
 *
 * jqGrid Search Text field with Single Word
 *
 * @param $grid
 */


function jqGridGlobalSearchText($grid){
	$('#t_' + $.jgrid.jqID($grid[0].id)).append($("<div style=\"float:right\"><label class=\"globalSearchTextLbl\">Search:&nbsp;&nbsp;</label><input id=\"globalSearchText\" type=\"text\"></input></div>"));
	$("#globalSearchText").keypress(function (e) {
	    var key = e.charCode || e.keyCode || 0;
	    if (key === $.ui.keyCode.ENTER) { // 13
	        $("#globalSearchText").click();
	    }
	});
	$("#globalSearchText").change(function () {
	    var postData = $grid.jqGrid("getGridParam", "postData"),
	        colModel = $grid.jqGrid("getGridParam", "colModel"),
	        rules = [],
	        searchText = $("#globalSearchText").val(),
	        l = colModel.length,
	        i,
	        cm;
	    searchText.split(' ');
	    var tagslistarr = searchText.split(' ');
	    var arr=[], firstword, secondword;
	    for(var i=0;i<tagslistarr.length;i++){
	    	firstword=tagslistarr[i];
	    	secondword=tagslistarr[i+1];
	    }

	    for (i = 0; i < l; i++){
	        cm = colModel[i];

	        if(cm.search !== false && (cm.stype === undefined || cm.stype === "text")) {
	            rules.push({
	            	field: cm.name,
	            	op: "cn",
	            	data: searchText
	            });
	        }
	    }
	    postData.filters = JSON.stringify({
	        groupOp: "OR",
	        rules: rules
	    });
	    $grid.jqGrid("setGridParam", { search: true });
	    $grid.trigger("reloadGrid", [{page: 1, current: true}]);
	    return false;
	});
}
/**
 * @author Raghavan
 *
 * modified @author Priya
 * jqGrid Search Text field with Multi Word with space
 *
 * @param $grid --> declare this method with grid tableId and toolbar[true] in ur js file - jqGridGlobalMultiWordSearchText($('#tableId'));
 */
var timer;
function jqGridGlobalMultiWordSearchText($grid){
	$('#t_' + $.jgrid.jqID($grid[0].id)).append($("<div style=\"float:right\"><label class=\"globalSearchTextLbl\">Search:&nbsp;&nbsp;</label><input id=\"globalSearchText\" type=\"text\"></input></div>"));
	$("#globalSearchText").keypress(function (e) {
	    var key = e.charCode || e.keyCode || 0;

	    if(key === $.ui.keyCode.ENTER) { // 13
	        $("#globalSearchText").click();
	    }
	 });
	var girdData = $grid.jqGrid('getGridParam','data');
	$("#globalSearchText").keyup(function () {
			//alert(timer)
			clearTimeout(timer);
			timer=setTimeout(function (){
			var tempdata =[];
			var rules = [],
	        searchText = $("#globalSearchText").val(),
	        searchTextParts = $.trim(searchText).match(/"([^"]+)"|'([^']+)'|\S+/g); //.split(separator),
			if(searchText==""){
				$grid.jqGrid('clearGridData');
				$grid.jqGrid('setGridParam', { data: girdData }).trigger("reloadGrid");
			}
			for(var j=0;j<searchTextParts.length;j++){
		    	searchText = searchTextParts[j];
				//var mymodel = $grid.getGridParam('colModel'); // this get the colModel array
				// loop the array and get the non hidden columns

				var mymodel=$grid.jqGrid('getGridParam','colModel');
				var str = [];
				$.each(mymodel, function(i) {
					if(this.hidden != true ) {
						if(this.name!="cb"&& this.name!="actions"){
							 str.push(this.name);
						}
					}
				});
				if (rules.length === 0) {
					for(var i=0;i<girdData.length;i++){
						for(var l=0;l<str.length;l++){
							if(eval(("girdData[i]."+str[l]).replace("\"","\\\"")) !='' &&
									eval(("girdData[i]."+str[l]).replace("\"","\\\"")) !=undefined){
								if(eval(("girdData[i]."+str[l]+".toString().toLowerCase().indexOf(searchText) >-1").replace("\"","\\\"")))
								{
									tempdata.push(girdData[i]);
									rules.push(i);
									break;
								}

							}

						}
					}
				}

				else{
						tempdata =[];
						for(var i=0;i<rules.length;i++){
							var k=rules[i];
							var n=0;
							for(var l=0;l<str.length;l++){

								if(eval(("girdData[i]."+str[l]).replace("\"","\\\"")) !='' &&
										eval(("girdData[i]."+str[l]).replace("\"","\\\"")) !=undefined){
									if(eval(("girdData[k]."+str[l]+".toString().toLowerCase().indexOf(searchText) >-1").replace("\"","\\\"")))
									{
										n++;
										//if(n == searchTextParts.length)
										//{
											tempdata.push(girdData[k]);
											break;
										//}
									}
								}
							}

						}

				}
			}
		 	$grid.jqGrid('clearGridData');
		    $grid.jqGrid('setGridParam', { data: tempdata }).trigger("reloadGrid");
	   return false;
	},500);
	});
}



/**
 * Not used currently
 *
 * @param gridId
 */

function gridGetColumnIndexByName(gridId){
	getColumnIndexByName = function(columnName) {
	    var cm = gridId.jqGrid('getGridParam','colModel'),i=0,l=cm.length;
	    for (; i<l; i++) {
	        if (cm[i].name===columnName) {
	            return i; // return the index
	        }
	    }
	    return -1;
	};
}

/**
 * @author raghavan
 *
 * String startsWith "prefix" word
 *
 * @param string
 * @param prefix
 * @returns {Boolean} - true/false
 */

function strStartsWith(string, prefix) {
  if (string.length < prefix.length)
    return false;
  for (var i = prefix.length - 1; (i >= 0) && (string[i] === prefix[i]); --i)
    continue;
  return i < 0;
}



/**
 * @author raghavan
 *
 * for Inline addRowParam.... - pos = afterSelected
 *
 * @param oldAddRowData
 */
function jqGridExtendAddRowData(oldAddRowData,gridId){
	$.jgrid.extend({
	    addRowData: function (rowid, rdata, pos, src) {
	    	pos = 'afterSelected';
	    	 var rowData = $(this).getRowData(rowid),  lastSel;

	    	 if(rowid!==lastSel){
               $(this).find(".selected").removeClass('selected');
               gridId.jqGrid('resetSelection', lastSel, true);

               $(this).find('.ui-state-highlight').addClass('selected');
               lastSel=rowid;
	    	 }

	        if(pos === 'afterSelected' || pos === 'beforeSelected') {
	            if (typeof src === 'undefined' && this[0].p.selrow !== null) {
	                src = this[0].p.selrow;
	                pos = (pos === "afterSelected") ? 'after' : 'before';
	            } else {
	                pos = (pos === "afterSelected") ? 'last' : 'first';

	            }
	        }
	        return oldAddRowData.call(this, rowid, rdata, pos, src);
	    }
	});
}

function cancelJqgridCancelRow(gridId,pagerId){
	/*	$('#'+gridId+'_ilcancel').on("click",function(){
		var gridData=new Array();
		$("#"+gridId).jqGrid('setGridParam', { data: gridData }).trigger("reloadGrid");
	});*/
}
/**
 * @author ubir
 *
 * New Combo box - Modified @author Priya
 * for Trigger DropDown on Focus
 *
 * @param selectBox = Array of tabindex and its corresponding select-box data_id
 *
 * Ex :- selectBox =[ {'2' : 'releaseOrderId'}, {'3' : 'customerId'},{'4' : 'companyId'}, {'7' : 'currencyCode'} ];
 */

function triggerSelectBoxOnFocus(selectBox){
	var prevId="";
	$.each(selectBox, function(k, v) {
		debugger;
		 $.each(v, function(key, value){
			 debugger;
			 if(tabindex == key){
				 if($('#'+value+'Val').val() == "Select"){
					 $('#'+value+'Val').val('');
				 }
				 $('#'+value+'Val').select();
				$('.'+value+'-toggle').click();
			}
	    });
	});
}
/**
 * @author Priya
 *
 * New combo box filtering ***************************************************************************
 *
 * @param selectOption
 */
function comboBoxFiltering(selectOption,jspPage){
(function( $ ) {
	$.widget( "ui.combobox", {
        _create: function() {
        	 var input,
                self = this,
                select = this.element.hide(),
                selected = select.children( ":selected" ),
                value = selected.val() ? selected.text() : "",
                wrapper = this.wrapper = $( "<span>" )
                    .addClass( "ui-combobox").insertAfter(select);
                var idval = "";
                idval = this.bindings[0].id;
              input = $( "<input>" )
                .appendTo(wrapper)
                .val( value )
                .addClass( "ui-state-default ui-combobox-input" )
                 .attr('id', this.bindings[0].id+"Val")
                  .attr('TabIndex', $("#"+this.bindings[0].id).attr("TabIndex"))
                .autocomplete({
                    delay: 0,
                    minLength: 0,
                    autoFocus: true,
                    source: function( requestObj, responseFunc ) {
                    	var matchArry = select.children("option").map(function(){return {value:this.value,label: this.innerHTML}}).get();
                    	var srchTerms   = $.trim(requestObj.term).split(/\s+/);
                    	// For each search term, remove non-matches
                        $.each (srchTerms, function (J, term) {
                            var regX = new RegExp (term, "i");
                            matchArry = $.map (matchArry, function (item) {
                            	 if( regX.test(item.label) ){
                            		return{
                                        label: item.label,
                                        value: item.label,
                                        optVal: item.value,
                                        option: HTMLOptionElement   // either this is wrong
                                    }/* ?  item  : null; */          // or this is wrong
                                }
                            } );
                        });
                         // Return the match results
                       responseFunc (matchArry);
                    },

                    open:   function (event, ui) {

                    	// This function provides no hooks to the results list, so we have to trust the selector, for now.
                        var resultsList = $("ul.ui-autocomplete > li.ui-menu-item > a");
                        var srchTerm    = $.trim ( $(".ui-state-default.ui-combobox-input" +
                        		".ui-autocomplete-input.ui-widget.ui-widget-content.ui-corner-left").
                        		val () ).split (/\s+/).join ('|');
                        // Loop through the results list and highlight the terms.
                        resultsList.each ( function () {
                            var jThis   = $(this);
                            var regX    = new RegExp('(' + srchTerm.replace(/[\)\(=]?/g, "") + ')', "ig");
                            var oldTxt  = jThis.text();
                            jThis.html (oldTxt.replace(regX, '<span class="result">$1</span>') );
                        });
                    },

                    select: function( event, ui ) {
                    	ui.item.option = ui.item.optVal;
                        ui.item.option.selected = true;
                        self._trigger( "selected", event, {
                            item: ui.item.option
                        });
                       $("#"+idval).val(ui.item.option);
                       debugger;
                       onchangeFunctions(jspPage,ui.item.option,this.id);
                    },
                    change: function( event, ui ) {
                    	if ( !ui.item ) {
                            var matcher = new RegExp( "^" + $.ui.autocomplete.escapeRegex( $(this).val() ) + "$", "i" ),
                                valid = false;
                            select.children( "option" ).each(function() {
                                if ( $( this ).text().match( matcher ) ) {
                                    this.selected = valid = true;
                                    return false;
                                }
                            });
                            if ( !valid ) {
                                // remove invalid value, as it didn't match anything
                                $( this ).val( "" );
                                select.val( "" );
                                input.data( "ui-autocomplete" ).term = "";

                                return false;
                            }
                        }
                    }
                })
                .addClass( "ui-widget ui-widget-content ui-corner-left");
             input.data( "ui-autocomplete" )._renderItem = function( ul, item ) {
            	return $( "<li></li>" )
                    .data( "item.autocomplete", item )
                    .append( "<a>" + item.label + "</a>" )
                    .appendTo( ul );
            };
            $( "<a>" )    // for dropdown button link
                .attr( "tabIndex", -1 )    //   keyboard shortcut
                .attr( "title", "Show All Items" )    // hover text
                .appendTo( wrapper )
                .button({
                    icons: {
                        primary: "ui-icon-triangle-1-s"
                    },
                    text: false
                })
                .removeClass( "ui-corner-all" )    // don't want left corners to be rounded
                .addClass( "ui-corner-right ui-combobox-toggle "+idval+"-toggle" )    // only right corners rounded
                .click(function() {
                    if ( comboEnabled() ){
                        // close if already visible
                        if ( input.autocomplete( "widget" ).is( ":visible" ) ) {
                            input.autocomplete( "close" );
                            return;
                        }

                        // work around a bug (likely same cause as #5265)    // This note existed in the jQuery demo
                        $( this ).blur();

                        // pass empty string as value to search for, displaying all results
                        input.autocomplete( "search", "" );
                        input.focus();
                    }
                });
        },

        destroy: function() {
            this.wrapper.remove();
            this.element.show();
            $.Widget.prototype.destroy.call( this );
        }
    });
})( jQuery );
$(function() {
    // Initialize the combobox
	$.each( selectOption, function( key, value ) {
		 $("#"+value).combobox();
		});
    $(".ui-combobox-input").val('');    // clear autocomplete field for search
});
function comboEnabled()
{
    var test = $(".ui-state-default.ui-combobox-input.ui-autocomplete-input.ui-widget.ui-widget-content.ui-corner-left").attr('disabled');
    if ( test == 'disabled' )
    {
        return false;
    }
    return true;
}


}







function invokeValidonfocus(selectOption){
	$.each( selectOption, function( key, value ) {
		$('#'+value).click( function () {
			validonfocus();
		});
	});
}

function invokeClearErrorMessage(selectErrorMessage){
	$.each( selectErrorMessage, function( key, value ) {
		$('#'+value).click( function () {
			clearErrorMessage();
		});
	});
}
function invokeSelectComboBoxValues(loadValues)
{
	$.each( loadValues, function( key, value ) {
		$('#'+value+'Val').click( function () {
			 $('.'+value+'-toggle').click();
				$('#'+value+'Val').val('');
		});
	});
}

function onchangeFunctions(page,value,id){
	if(page=="designation.jsp"){
        desigAvailCheck(value);
        }
	else if(page=="jouranlvoucher.jsp"){

		if(id=="subgroupaccountVal"){
			getaccHeadName(value);
		}
		else if(id=="currencyVal"){
			getExchaneRateForCurrency(value);

		}
	}
	else if(page=="debitnote.jsp"){
		if(id=="accountHeadIdVal"){
			getInvoiceno(value);
		}
		else if(id=="txtCurrencyCodeVal"){
			getExchaneRateForForm(value);
		}
		else if(id=="invoiceNoVal"){
			accountDataForInv(value);
		}
	}
	else if(page=="charges.jsp"){
		if(id=="parentcodeVal"){
			getaccountcode(value);
		}
	}
	else if(page=="creditnote.jsp"){
		if(id=="accHeadIdVal"){
			getInvoiceno(value);
		}
		else if(id=="txtCurrencyVal"){
			getExchaneRateForForm(value);
		}
		else if(id=="invoiceNoVal"){
			invoiceDetails();
		}
	}
	else if(page=="grn.jsp"){
		if(id=="purInvoiceNoVal"){
			fetchPIProductList(value);
		}
		else if(id=="supplierIdVal"){
			getGRNCurrentBalance(value);
		}
	}
	else if(page=="cbp.jsp"){
		if(id=="typeOfPaymentVal"){
			getLedgerAccountPmtType(value);
		}
		else if(id=="currencyVal"){
			getExchaneRateForForm(value);
			/*if(value=='USD'){
				$("#masterTotalAmountGroup").css('display','block');
				$("#masterBCtotalAmount").val('');
				$("#masterTCtotalAmount").val('');
			}else if(value=='INR'){
				$("#masterTotalAmountGroup").css('display','none');
				$("#masterBCtotalAmount").val('');
				$("#masterTCtotalAmount").val('');
			}else{
				$("#masterTotalAmountGroup").css('display','block');
			}*/
		}
		else if(id=="accHeadNameVal"){
			console.log(value);
			getSubGrpAccCode(value);
		}
	}
	else if(page=="cbr.jsp"){
		if(id=="typeOfPaymentVal"){
			paymentOptions();
		}
		else if(id=="currencyVal"){
			getExchaneRateForCurrency(value);
		}
		else if(id=="bankAccountVal"){
			getSubGrpAcctNameBank(value);
		}
		else if(id=="cashAccountVal"){
			getSubGrpAcctNameCash(value);
		}
	}
	else if(page=="purinv.jsp"){
		if(id=="cmbGrnNoVal"){
			fetchGrnProductList(value);
		}
		else if(id=="supplierTypeVal"){
			getSupplier(value);
		}
		else if(id=="supplieridVal"){
			getAccountCode(value);
		}
		else if(id=="currencyCodeVal"){
			getExchaneRateForCurrency(value);
		}
	}
	else if(page=="invoice.jsp"){
		if(id=="releaseOrderNoVal"){
			getRelaseOrderDetails(value);

		}
		else if(id=="currencyCodeVal"){
			getExchaneRateForCurrency(value);
		}else if(id=="customerIdVal"){
			getAccountListFromCustomer(value);
		}

	}
	else if(page=="ChequeRealization.jsp"){
		if(id=="chequetransidVal"){
			getdatecompany(value);
		}
		else if(id=="cheqstatusVal"){
			getBounCeAccept(value);
		}
	}
	else if(page=="subgrouphead.jsp"){
		if(id=="groupHeadCodeVal"){
			getSubGroupAccountHeadCodeAppend(value);
		}
		else if(id=="cheqstatusVal"){
			getBounCeAccept(value);
		}
	}
	else if(page=="accounthead.jsp"){
		if(id=="currencyCodeVal"){
			getExchaneRateForCurrency(value);
		}
		else if(id=="subGroupAcctNameVal"){
			getaccountHeadCodeAppend(value);
		}
	}
	else if(page=="stckMvmt.jsp"){
		if(id=="skuIdVal"){
			getStorageForSku(value);
		}
		else if(id=="fromStorageVal"){
			getStockAvailablity(value);
		}
		else if(id=="toStorageVal"){
			storage();
		}

	}
	else if(page=="releaseOrder.jsp"){
		if(id=="salesOrderNosVal"){
			getSalesOrderDetails(value);
		}else if(id=="releaseFileRefVal"){
			fileRefChange();
		}
	}
	else if(page=="ParentAccountCode.jsp"){
		if(id=="typeofchildVal"){
			typeOfChild();
		}
	}else if(page=="supplier.jsp"){
		if(id=="defaultcurrencyVal"){
			getExchaneRateForForm(value);
		}
	}else if(page=="inventory.jsp"){
		if(id=="storageIdVal"){
			if(value!=0){
				fetchProductWithStroageId(value);
			}else{
				getProductSKU();
				$("#productSkuIdVal").val('Select');
			}
		}if(id=="productSkuIdVal"){
			if(value!=0){
				fetchStorageWithProductId(value);
			}else{
				getStorageListOnInventory();
				$("#storageIdVal").val('Select');
			}
		}

	}else if(page=="shipment.jsp"){
		debugger;
		if(id=="currencyCodeVal"){
			getExRateForCurrency(value);
		}
		if(id=="exporteridVal"){
			getInvAccountCode(value);
		}
		if(id == "chaCurrencyVal"){
			getChaExchaneRateForCurrency(value);
		}
		if(id == "transCurrencyVal"){
			getTransExchaneRateForCurrency(value);
		}

	}
	else if(page=="stockOut.jsp"){
		if(id=="outFileRefVal"){
			outfileRefChange();
		}
	}
	else if(page=="salesOrder.jsp"){ //SalesOrder.jsp
		debugger;
		if(id=="customerNameVal"){
			debugger;
			getSOCurrentBalance(value);

		}
	}

}

/**
 *
 * New combo box filtering for jqGrid ***************************************************************************
 *
 * @param selectOption
 * @param jspPage
 * @param combodata
 * @param combodata1
 */

function comboboxfilteringForJqGrid(selectOption,jspPage,combodata){

	(function( $ ) {
		$.widget( "ui.combobox", {
	        _create: function() {
	        	 var input,
	                self = this,
	                select = this.element.hide(),
	                selected = select.children( ":selected" ),
	                value = selected.val() ? selected.text() : "",
	                wrapper = this.wrapper = $( "<span>" )
	                    .addClass( "ui-combobox" )

	                    .insertAfter( select );
	                var idval = "", nameVal="";
	                idval = this.bindings[0].id;
	                nameVal=this.bindings[0].name;
	              input = $( "<input>" )
	                .appendTo( wrapper )
	                .val( value )
	                .addClass( "ui-state-default ui-combobox-input" )
	                 .attr('id', nameVal+"Val")
	                  .attr('TabIndex', $("#"+this.bindings[0].id).attr("TabIndex"))
	                .autocomplete({
	                    delay: 0,
	                    minLength: 0,
	                    autoFocus: true,
	                    source: function( requestObj, responseFunc ) {
	                    	var matchArry = select.children("option").map(function(){return {value:this.value,label: this.innerHTML}}).get();
	                    	var srchTerms   = $.trim(requestObj.term).split(/\s+/);
	                    	// For each search term, remove non-matches
	                        $.each (srchTerms, function (J, term) {
	                            var regX = new RegExp (term, "i");
	                            matchArry = $.map (matchArry, function (item) {
	                            	 if( regX.test(item.label) ){
	                            		return{
	                                        label: item.label,
	                                        value: item.label,
	                                        optVal: item.value,
	                                        option: HTMLOptionElement   // either this is wrong
	                                    }/* ?  item  : null; */          // or this is wrong
	                                }
	                            } );
	                        });
	                         // Return the match results
	                       responseFunc (matchArry);
	                    },

	                    open:   function (event, ui) {
	                    	// This function provides no hooks to the results list, so we have to trust the selector, for now.
	                        var resultsList = $("ul.ui-autocomplete > li.ui-menu-item > a");
	                        var srchTerm    = $.trim ( $(".ui-state-default.ui-combobox-input" +
	                        		".ui-autocomplete-input.ui-widget.ui-widget-content.ui-corner-left").
	                        		val () ).split (/\s+/).join ('|');

	                        // Loop through the results list and highlight the terms.
	                        resultsList.each ( function () {
	                            var jThis   = $(this);
	                            var regX    = new RegExp('(' + srchTerm.replace(/[\)\(=]?/g, "") + ')', "ig");
	                            var oldTxt  = jThis.text();

	                            jThis.html (oldTxt.replace(regX, '<span class="result">$1</span>') );
	                        } );
	                    },

	                    select: function( event, ui ) {

	                    	ui.item.option = ui.item.optVal;
	                        ui.item.option.selected = true;
	                        self._trigger( "selected", event, {
	                            item: ui.item.option
	                        });
	                        $("select[name='"+nameVal+"']").val(ui.item.option);
	                       //$("#"+idval).val(ui.item.option);

	                      onchangeFunctionsForJqGrid(jspPage,ui.item.option,this.id,combodata);
	                    },
	                    change: function( event, ui ) {
	                    	if ( !ui.item ) {
	                            var matcher = new RegExp( "^" + $.ui.autocomplete.escapeRegex( $(this).val() ) + "$", "i" ),
	                                valid = false;
	                            select.children( "option" ).each(function() {
	                                if ( $( this ).text().match( matcher ) ) {
	                                    this.selected = valid = true;
	                                    return false;
	                                }
	                            });
	                            if ( !valid ) {
	                                // remove invalid value, as it didn't match anything
	                                $( this ).val( "" );
	                                select.val( "" );
	                                input.data( "ui-autocomplete" ).term = "";

	                                return false;
	                            }
	                        }
	                    }
	                })
	                .addClass( "ui-widget ui-widget-content ui-corner-left");
	             input.data( "ui-autocomplete" )._renderItem = function( ul, item ) {
	            	return $( "<li></li>" )
	                    .data( "item.autocomplete", item )
	                    .append( "<a>" + item.label + "</a>" )
	                    .appendTo( ul );
	            };
	            $( "<a>" )    // for dropdown button link
	                .attr( "tabIndex", -1 )    //   keyboard shortcut
	                .attr( "title", "Show All Items" )    // hover text
	                .appendTo(wrapper)
	                .button({
	                    icons: {
	                        primary: "ui-icon-triangle-1-s"
	                    },
	                    text: false
	                })
	                .removeClass("ui-corner-all")    // don't want left corners to be rounded
	                .addClass("ui-corner-right ui-combobox-toggle "+nameVal+"-toggle")    // only right corners rounded
	                .click(function() {
	                    if(comboEnabled()){
	                        // close if already visible
	                        if ( input.autocomplete( "widget" ).is( ":visible" ) ) {
	                            input.autocomplete( "close" );
	                            return;
	                        }

	                        // work around a bug (likely same cause as #5265)    // This note existed in the jQuery demo
	                        $( this ).blur();

	                        // pass empty string as value to search for, displaying all results
	                        input.autocomplete( "search", "" );
	                        input.focus();
	                    }
	                });
	        },

	        destroy: function() {
	            this.wrapper.remove();
	            this.element.show();
	            $.Widget.prototype.destroy.call( this );
	        }
	    });
	})( jQuery );
	$(function() {
	    // Initialize the combobox
		$.each( selectOption, function( key, value ) {
				 $("select[name='"+value+"']").combobox();
		});
	    //$(".ui-combobox-input").val('');    // clear autocomplete field for search
	});
	function comboEnabled(){
	    var test = $(".ui-state-default.ui-combobox-input.ui-autocomplete-input.ui-widget.ui-widget-content.ui-corner-left").attr('disabled');
	    if(test == 'disabled'){
	        return false;
	    }
	    return true;
	}
}
/**
 * jqGrid Onchange function from combo box filtering jqgrid
 *
 * @param page
 * @param value
 * @param id
 * @param combodata
 */
function onchangeFunctionsForJqGrid(page,value,id,combodata){

	if(page=="creditnote.jsp"){ //Credit Note
		if(id=="acctHeadIdVal"){
			if(value!="0"){
				  $.each(combodata, function() {
	              	if(combodata!=undefined){
	              		if(value==this.acctHeadCode){
	              			var acctHeadCode = value;
	              			var subgrpCode = acctHeadCode.substring(0,5);
	              			$('input[name="subGroupCode"]').val(subgrpCode);
	              			$('select[name="sCompanyCode"]').html("<option value='"+this.iCompanyId+"'> "+ this.sCompanyCode +" </option>");
	              			$('input[name="description"]').val(this.description).html(this.description);
	              		}
	                 }
	              });
			}else{
				$('input[name="subGroupCode"]').val(''); //_sCompanyCode, _description
      			$('select[name="sCompanyCode"]').html("<option value='0'>Select</option>");
      			$('input[name="description"]').val('').html('');
			}
		}
	}else if(page=="cbp.jsp"){ //Cash Bank Payment
		if(id=="cbpdetCurrencyVal"){
			var exchRate = getExchaneRateForGrid(value);
			$('input[name="exchangeRate"]').val(exchRate).html(exchRate);
			if(value=='INR'){
				$("input[name=\"bcAmount\"]").val('');
				$("input[name=\"tcAmount\"]").val('');
				$("input[name=\"tcAmount\"]").prop('disabled',true);

			}else{
				$("input[name=\"bcAmount\"]").val('');
				$("input[name=\"tcAmount\"]").val('');
				$("input[name=\"tcAmount\"]").prop('disabled',false);
			}
		}
		if(id=="subGrpAccVal"){
			setCBAcctHeadValues(value);
		}
	}else if(page=="debitnote.jsp"){ //Debit Note
		if(id=="acctHeadIdVal"){
			if(value!="0"){
				var acctnewData=combodata;
				$.each(acctnewData, function() {
					if(acctnewData!=undefined){
		        		if(value==this.acctHeadCode){
		        			var acctHeadCode = value;
		        			var subgrpCode = acctHeadCode.substring(0,5);
		        			$('input[name="dbDetSubGroupCode"]').val(subgrpCode);
		        			$('input[name="description"]').val(this.description).html(this.description);
		        			$('select[name="sCompanyCode"]').html("<option value='"+this.iCompanyId+"'> "+ this.sCompanyCode +" </option>");

		        		}
		           	}
		        });
			}else{
				$('input[name="dbDetSubGroupCode"]').val("");
    			$('input[name="description"]').val("").html("");
    			$('select[name="sCompanyCode"]').html("<option value='0'>Select</option>");
			}
		}
	}else if(page=="stockmovement.jsp"){ //Stock Movement
		/*if(id=="skuIdVal"){
			var fileRef = $('#fileRefVal').val();
			setFromStorageValues(value,fileRef);
		}else if(id=="fromStorageRefNoVal"){

			var product = $('select[name="skuId"]').val();
			var fileref = $('select[name="fileRef"]').val();
			var fromStorage = $('select[name="fromStorage"]').val();
			var fromStorageRef = value;
			//stockMovementReleaseStorageValues(fileref,value);
			stockMovementAvailablityStock(product,fileref,fromStorage,fromStorageRef);
		}*/
		if(id=="skuIdVal" || id=="fileRefVal" || id=="fromStorageVal" || id=="fromStorageRefNoVal"){
			var product = $('select[name="skuId"]').val();
			var file = $('select[name="fileRef"]').val();
			var storage = $('select[name="fromStorage"]').val();
			var storageRef = $('select[name="fromStorageRefNo"]').val();

			stockMovementProductValues(product,file,storage,storageRef);
			stockMovementFileRefValues(product,file,storage,storageRef);
			stockMovementStorageValues(product,file,storage,storageRef);
			stockMovementStorageRefValues(product,file,storage,storageRef);
			stockMovementAvailablityStock(product,file,storage,storageRef);

		}
	}
	else if(page=="Invoice.jsp"){ //Invoice
		if(id=="productNameVal" || id=="fileRefVal" || id=="storageNameVal" || id=="stroageRefVal"){
			var product = $('select[name="productName"]').val();
			var file = $('select[name="fileRef"]').val();
			var storage = $('select[name="storageName"]').val();
			var storageRef = $('select[name="stroageRef"]').val();

			console.log("From Utils Class ::::::::::::::::::::::::::::");
			console.log(product+" :: "+file+" :: "+storage+" :: "+storageRef);

			invoicePrdValues(product,file,storage,storageRef);
			invoiceFileRefValues(product,file,storage,storageRef);
			invoiceStorageValues(product,file,storage,storageRef);
			invoiceStorageRefValues(product,file,storage,storageRef);
			invoiceStockAvailablity(product,file,storage,storageRef);

		}else if(id=="dtlChargesVal"){
			debugger;
			var acctData = getAccountForCharges(value);
    		if(acctData != undefined){
    			var prntCode="",acctCode="";
    			var jsonChargesAcctList = {"table":acctData};
			   		for (var i = 0; i < jsonChargesAcctList.table.length; i++){
			   			debugger;
			   			$('input[name="dtlSubgroupcode"]').val(jsonChargesAcctList.table[i].parentcode);
			   			$('input[name="dtlInvAcctHeadCode"]').val(jsonChargesAcctList.table[i].accountHeadCode);
			   		}
      		}

		}
	}
	else if(page=="SalesOrder.jsp"){ //SalesOrder.jsp
		debugger;
		if(id=="productVal"){
			debugger;
			var product = value;
			salesStockAvailablity(product);

		}
	}
	else if(page=="releaseOrder.jsp"){ //Release Order

		if(id=="productVal" || id=="storageIdVal" || id=="storageReferenceNoVal"){
			var product = $('select[name="product"]').val();
			var file = $('select[name="releaseFileRef"]').val();
			var storage = $('select[name="storageId"]').val();
			var storageRef = $('select[name="storageReferenceNo"]').val();

			console.log("From Utils Class ::::::::::::::::::::::::::::");
			console.log(product+" :: "+file+" :: "+storage+" :: "+storageRef);

			releasePrdValues(product,file,storage,storageRef);
			releaseStorageValues(product,file,storage,storageRef);
			releaseStorageRefValues(product,file,storage,storageRef);
			releaseStockAvailablity(product,file,storage,storageRef);

		}
		/*if(id=="productVal"){
			var product = value;
			var file = $('#releaseFileRef').val();
			var storage = $('select[name="storageId"]').val();
			var storageRef = $('#storageReferenceNo').val();

			//releaseStorageValues(file,value);
			releaseStockAvailablity(product,file,storage,storageRef);

		}else if(id=="storageIdVal"){

			var salesOrder = $('#salesOrderNos').val();
			var product ="";

			if(salesOrder == 'Select'){
				product =$('select[name="product"]').val();
			}else{
				var productName = $('#productVal').val();

				 $.each(combodata, function() {
	              	if(combodata!=undefined){
	              		if(productName ==this.description){
	              			product = this.id;
	              		}
	                 }
	              });
			}


			var file = $('#releaseFileRef').val();
			var storageRef = $('select[name="storageReferenceNo"]').val();
			var storage = value;


			releaseStorageRefValues(storage,product,file);
			releaseStockAvailablity(product,file,storage,storageRef);

		}else if(id=="storageReferenceNoVal"){

			var salesOrder = $('#salesOrderNos').val();
			var product ="";

			if(salesOrder == 'Select'){
				product =$('select[name="product"]').val();
			}else{
				var productName = $('#productVal').val();

				 $.each(combodata, function() {
	              	if(combodata!=undefined){
	              		if(productName ==this.description){
	              			product = this.id;
	              		}
	                 }
	              });
			}

			var file = $('#releaseFileRef').val();
			var storage = $('select[name="storageId"]').val();
			var storageRef = value;
			releaseStockAvailablity(product,file,storage,storageRef);
		}*/
	}else if(page=="stockOut.jsp"){ //StockOut.JSP.......................

		if(id=="productidVal" || id=="storageIdVal" || id=="storageRefNoVal"){
			var product = $('select[name="productid"]').val();
			var file = $('select[name="outFileRef"]').val();
			var storage = $('select[name="storageId"]').val();
			var storageRef = $('select[name="storageRefNo"]').val();

			console.log("From Utils Class ::::::::::::::::::::::::::::");
			console.log(product+" :: "+file+" :: "+storage+" :: "+storageRef);

			outPrdValues(product,file,storage,storageRef);
			outStorageValues(product,file,storage,storageRef);
			outStorageRefValues(product,file,storage,storageRef);
			outStockAvailablity(product,file,storage,storageRef);

		}


		/*if(id=="productidVal"){
			var product = value;
			var file = $('#outFileRef').val();
			var storage = $('select[name="storageId"]').val();
			var storageRef = $('#storageRefNo').val();

			outStorageValues(file,value);
			outStockAvailablity(product,file,storage,storageRef);

		}else if(id=="storageIdVal"){
			var product =$('select[name="productid"]').val();
			var file = $('#outFileRef').val();
			var storageRef = $('select[name="storageRefNo"]').val();
			var storage = value;

			outStorageRefValues(storage,product,file);
			outStockAvailablity(product,file,storage,storageRef);

		}else if(id=="storageRefNoVal"){

			var product =$('select[name="productid"]').val();
			var file = $('#outFileRef').val();
			var storage = $('select[name="storageId"]').val();
			var storageRef = value;

			outStockAvailablity(product,file,storage,storageRef);
		}*/
	}else if(page=="cbr.jsp"){ //Cash Bank Receipt
		if(id=="typeVal"){
			$('select[name="accountname"]').val("Select");
			setCBAcctHeadValues(value);
		}
	}else if(page=="journalvoucher.jsp"){ //Journal Voucher
		if(id=="subgroupaccountVal"){
			setJournalVoucherAcctHeadValues(value);
		}
		else if(id=="accountnameVal"){
			var acctnewData=combodata;
			$.each(acctnewData, function() {
            	if(acctnewData!=undefined){
            		if(value==this.accountHeadCode){
            			var acctHeadCode = value, subgrpCode="";

            			$('select[name="sCompanyCode"]').html("<option value='"+this.iCompanyId+"'> "+ this.sCompanyCode +" </option>");
            		}
               	}
            });
		}else if(id=="currencyVal"){
			var exchRate = getExchaneRateForGrid(value);
			$('input[name="exchangerateId"]').val(exchRate).html(exchRate);
			if(value=='INR'){
				$("input[name=\"creditamountusd\"]").prop('disabled',true);
				$("input[name=\"debitamountusd\"]").prop('disabled',true);
			}else{
				$("input[name=\"creditamountusd\"]").prop('disabled',false);
				$("input[name=\"debitamountusd\"]").prop('disabled',false);
			}
		}
	}
	else if(page=="PurchaseInvoice.jsp"){ //Purchase Invoice....................
		if(id=="productNameVal"){
			var product = value;

		}else if(id=="chargeCodeVal"){
			debugger;
			var acctData = getAccountForCharges(value);
    		if(acctData != undefined){
    			var jsonChargesAcctList = {"table":acctData};
			   		for (var i = 0; i < jsonChargesAcctList.table.length; i++){
			   			debugger;
			   			$('input[name="subGroupAcctcode"]').val(jsonChargesAcctList.table[i].parentcode);
			   			$('input[name="accountHeadCode"]').val(jsonChargesAcctList.table[i].accountHeadCode);
			   		}
      		}

		}else if(id=="postToVal"){
			var product = value;

		}else if(id=="subgroupaccountVal"){
			setPurchaseInvoiceJVDtlAcctHeadValues(value);
		}
		else if(id=="accountnameVal"){
			//var acctnewData=combodata;
			/*$.each(acctnewData, function() {
            	if(acctnewData!=undefined){
            		if(value==this.accountHeadCode){
            			var acctHeadCode = value, subgrpCode="";

            			$('select[name="sCompanyCode"]').html("<option value='"+this.iCompanyId+"'> "+ this.sCompanyCode +" </option>");
            		}
               	}
            });*/
		}

	}

	else if(page=="shipment.jsp"){ //Shipment....................
		if(id=="dutyModeVal"){
			var code = value;

		}else if(id=="dutyAccountIdVal"){

		}else if(id =="chaChargesVal"){

		}else if(id =="linerChargesVal"){

		}

	}
}


/**
 * select All Text on Focus input field
 *
 * @param inputId
 */

function selectAllTextOnFocusNew(inputId){

		$("#"+inputId).on('focus', function() {

			setTimeout(function() {$("#"+inputId).select();}, 0);
		});
		$("#"+inputId).on('mouseup', function() {
			setTimeout(function() {$("#"+inputId).select();}, 0);
		});


}

function selectAllTextOnFocus(inputIds){
	$.each(inputIds, function(key, value) {
		$("#"+value).on('focus', function() {

			setTimeout(function() {$("#"+value).select();}, 0);
		});
		$("#"+value).on('mouseup', function() {
			setTimeout(function() {$("#"+value).select();}, 0);
		});

	});
}


/**
 * Conver number into Currency Format......
 *
 * @param x -- number in double type
 */

function convertCurrencyFormat(x){
	x=x.toString();
	var afterPoint = '';
	if(x.indexOf('.') > 0)
	   afterPoint = x.substring(x.indexOf('.'),x.length);
	x = Math.floor(x);
	x=x.toString();
	var lastThree = x.substring(x.length-3);
	var otherNumbers = x.substring(0,x.length-3);
	if(otherNumbers != '')
	    lastThree = ',' + lastThree;
	var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree + afterPoint;

	return res;
}


/*
 * Return unique Array Elements
 *
 * @Param -- list of elements
 * */

function uniqueArray(list){
	var uniqueNames =[];
	$.each(list, function(i, el){
	    if($.inArray(el, uniqueNames) === -1) uniqueNames.push(el);
	  });
	return uniqueNames;
}