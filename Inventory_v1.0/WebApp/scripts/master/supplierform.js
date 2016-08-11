function populateSupplierGrid(){
	 
	var person = {},uData=[];	
	
	/*person['Sqlbuffer'] = 'select student_id#student_code#student_name#gender#phone_no#email_id from studentDetails'; //string
	person['Fields'] = 6;  // integer.
	person['FieldValues'] = 'student_id#student_code#student_name#gender#phone_no#email_id';
	console.log(person);*/
 
    /*$.ajax({
        type: "POST",     
        url: "http://localhost:7082/StudentMgmt/rest/consultantservice/getData",        
        data: JSON.stringify(person),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
        	console.log("result::::::::result::::");
        	console.log(response);
			uData = response.Response;	 
			console.log("uData:::::::::::::");
			console.log(uData);				
        }
    }); */   
	
  	
	$("#supplierGrid").jqGrid({
		data: uData,
		datatype: "local",
		
		height:"100%",
		multiboxonly: true,
		autowidth:true,
		rowNum: 10,
		rowList: [10,20,30],
		multiselect: true,
		sortable:true,
		 gridview: true,
        loadonce: true,
        ignoreCase: true,
        localReader: {repeatitems: false},
	   	colNames:['Supplier id','Supplier Name','Supplier Address', 'Country', 'City',
	   	          'Phone','Mobile','E-mail','Fax','Account Number','Bank Address','IFSC Code','Currency'],
	   	colModel:[
	   	    {name:'supplierId',index:'supplier_id',hidden:true},
	   		{name:'supplierName',index:'supplier_name',sorttype:'text', width:100, align:"left",searchoptions:{sopt:['cn']},resizable: false},//Added for avoid resizing the grid.
	   		{name:'supplieradd',index:'supplier_add',sorttype:'text', width:100,align:"left",searchoptions:{sopt:['cn']},resizable: false },
	   		{name:'country',index:'country',sorttype:'text', width:100,align:"left",searchoptions:{sopt:['cn']},resizable: false},	   		
	   		{name:'city',index:'productCategory',sorttype:'text', width:100,align:"left",searchoptions:{sopt:['cn']},resizable: false},
	   		{name:'phone',index:'model',sorttype:'text', width:100,align:"left",searchoptions:{sopt:['cn']},resizable: false},
	   		{name:'mobile',index:'serialNumber',sorttype:'text', width:100,align:"left",searchoptions:{sopt:['cn']},resizable: false},
	   		{name:'email',index:'sizet',sorttype:'text', width:100,align:"left",searchoptions:{sopt:['cn']},resizable: false},
	   		{name:'fax',index:'companyName',sorttype:'text', width:100,align:"left",searchoptions:{sopt:['cn']},resizable: false},
	   		{name:'accno',index:'room',sorttype:'text', width:100,align:"left",searchoptions:{sopt:['cn']},resizable: false},
	   		{name:'bankadd',index:'remarks',sorttype:'text', width:100,align:"left",searchoptions:{sopt:['cn']},resizable: false},
	   		{name:'ifsc',index:'reOrderPoint',sorttype:'text', width:100,align:"left",searchoptions:{sopt:['cn']},resizable: false},
	   		{name:'currency',index:'actions', width:50, align:"center",search : false}
	 		
	   	],
	   	pager: "#supplierGridPage",
	   	viewrecords: true,
	   	caption: 'Product List',
	 	gridComplete: function(){
	 		
			var ids = jQuery("#supplierGrid").jqGrid('getDataIDs');
			for(var i=0;i < ids.length;i++){
				var cl = ids[i];
				be = "<div style='float:left;width:30%;cursor:pointer;' title=\"Edit\" onclick=\"editrow('"+cl+"');\"><span class=\"ui-icon ui-icon-pencil\"></span></div>";
				de = "<div style='float:left;width:30%;cursor:pointer;' title=\"Delete\" onclick=\"deleteentries('"+cl+"');\" ><span class=\"ui-icon ui-icon-trash\"></span></div>";
				$("#supplierGrid").jqGrid('setRowData',ids[i],{actions:be+de});
				}		
		}

	});

	$("#supplierGrid").jqGrid('navGrid','#supplierGridPage',{edit:false,add:false,del:false,search:false,refresh:true});
	
	$("#supplierGrid").jqGrid('navButtonAdd',"#supplierGridPage",{caption:"",title:"Add New",buttonicon :'ui-icon ui-icon-plus',
		onClickButton:function(){
			addnewentry();
		}
	});
	/*$("#productGrid").jqGrid('navButtonAdd',"#productGridPage",{caption:"",title:"Export",buttonicon :'ui-icon ui-icon-bookmark',
		onClickButton:function(){
		}
	});*/
}


function addnewentry(){
	$('#supplierform')[0].reset();
	$('#collapseOne').collapse('hide');
	$('#collapseTwo').collapse('show');
	
	$("#sAction").val('save');
}
function cancelEntry(){
	$('#supplierform')[0].reset();
	$('#collapseOne').collapse('show');
	$('#collapseTwo').collapse('hide');
}


function saveEntry(){
	doAjaxSubmitForm('supplier.action','supplierform','contentDiv')
}

//@ sourceURL=/scripts/master/productform.js
