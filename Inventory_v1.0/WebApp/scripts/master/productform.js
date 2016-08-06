function populateProductGrid(){
	 
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
	
  	
	$("#productGrid").jqGrid({
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
	   	colNames:['Product id','Product Code','Product Name', 'Product Description', 'Product Category',
	   	          'Model','Serial Number','Size','CompanyName','Room','Remarks','Re Order','Actions'],
	   	colModel:[
	   	    {name:'productId',index:'student_id',hidden:true},
	   		{name:'productCode',index:'student_code',sorttype:'text', width:100, align:"left",searchoptions:{sopt:['cn']},resizable: false},//Added for avoid resizing the grid.
	   		{name:'productName',index:'student_name',sorttype:'text', width:100,align:"left",searchoptions:{sopt:['cn']},resizable: false },
	   		{name:'prodDescription',index:'gender',sorttype:'text', width:100,align:"left",searchoptions:{sopt:['cn']},resizable: false},	   		
	   		{name:'productCategory',index:'productCategory',sorttype:'text', width:100,align:"left",searchoptions:{sopt:['cn']},resizable: false},
	   		{name:'model',index:'model',sorttype:'text', width:100,align:"left",searchoptions:{sopt:['cn']},resizable: false},
	   		{name:'serialNumber',index:'serialNumber',sorttype:'text', width:100,align:"left",searchoptions:{sopt:['cn']},resizable: false},
	   		{name:'size',index:'sizet',sorttype:'text', width:100,align:"left",searchoptions:{sopt:['cn']},resizable: false},
	   		{name:'companyName',index:'companyName',sorttype:'text', width:100,align:"left",searchoptions:{sopt:['cn']},resizable: false},
	   		{name:'room',index:'room',sorttype:'text', width:100,align:"left",searchoptions:{sopt:['cn']},resizable: false},
	   		{name:'remarks',index:'remarks',sorttype:'text', width:100,align:"left",searchoptions:{sopt:['cn']},resizable: false},
	   		{name:'reOrderPoint',index:'reOrderPoint',sorttype:'text', width:100,align:"left",searchoptions:{sopt:['cn']},resizable: false},
	   		{name:'actions',index:'actions', width:50, align:"center",search : false}
	 		
	   	],
	   	pager: "#productGridPage",
	   	viewrecords: true,
	   	caption: 'Product List',
	 	gridComplete: function(){
	 		
			var ids = jQuery("#productGrid").jqGrid('getDataIDs');
			for(var i=0;i < ids.length;i++){
				var cl = ids[i];
				be = "<div style='float:left;width:30%;cursor:pointer;' title=\"Edit\" onclick=\"editrow('"+cl+"');\"><span class=\"ui-icon ui-icon-pencil\"></span></div>";
				de = "<div style='float:left;width:30%;cursor:pointer;' title=\"Delete\" onclick=\"deleteentries('"+cl+"');\" ><span class=\"ui-icon ui-icon-trash\"></span></div>";
				$("#productGrid").jqGrid('setRowData',ids[i],{actions:be+de});
				}		
		}

	});

	$("#productGrid").jqGrid('navGrid','#productGridPage',{edit:false,add:false,del:false,search:false,refresh:true});
	
	$("#productGrid").jqGrid('navButtonAdd',"#productGridPage",{caption:"",title:"Add New",buttonicon :'ui-icon ui-icon-plus',
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
	$('#productform')[0].reset();
	$('#collapseOne').collapse('hide');
	$('#accordion2').collapse('show');
	
	$("#sAction").val('save');
}
function cancelEntry(){
	$('#productform')[0].reset();
	$('#collapseOne').collapse('show');
	$('#accordion2').collapse('hide');
}


function saveEntry(){
	doAjaxSubmitForm('product.action','productform','ContentDiv')
}


