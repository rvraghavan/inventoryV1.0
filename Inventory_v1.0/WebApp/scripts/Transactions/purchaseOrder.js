function populatePurchaseOrderGrid(){
	 
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
	
  	
	$("#purchaseOrderGrid").jqGrid({
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
	   	colNames:['Order Number','Order Type','Order Date', 'Supplier Type', 'Expected Date','Actions'],
	   	colModel:[
	   	    {name:'OrderNumber',index:'student_id',hidden:true},
	   		{name:'orderType',index:'student_code',sorttype:'text', width:100, align:"left",searchoptions:{sopt:['cn']},resizable: false},//Added for avoid resizing the grid.
	   		{name:'orderDt',index:'student_name',sorttype:'text', width:100,align:"left",searchoptions:{sopt:['cn']},resizable: false },
	   		{name:'supplierType',index:'gender',sorttype:'text', width:100,align:"left",searchoptions:{sopt:['cn']},resizable: false},	   		
	   		{name:'expectedDt',index:'productCategory',sorttype:'text', width:100,align:"left",searchoptions:{sopt:['cn']},resizable: false},
	   		{name:'actions',index:'actions', width:50, align:"center",search : false}
	   	],
	   	pager: "#purchaseOrderGridPage",
	   	viewrecords: true,
	   	caption: 'Product List',
	 	gridComplete: function(){
	 		
			var ids = jQuery("#purchaseOrderGrid").jqGrid('getDataIDs');
			for(var i=0;i < ids.length;i++){
				var cl = ids[i];
				be = "<div style='float:left;width:30%;cursor:pointer;' title=\"Edit\" onclick=\"editrow('"+cl+"');\"><span class=\"ui-icon ui-icon-pencil\"></span></div>";
				de = "<div style='float:left;width:30%;cursor:pointer;' title=\"Delete\" onclick=\"deleteentries('"+cl+"');\" ><span class=\"ui-icon ui-icon-trash\"></span></div>";
				$("#purchaseOrderGrid").jqGrid('setRowData',ids[i],{actions:be+de});
				}		
		}

	});

	$("#purchaseOrderGrid").jqGrid('navGrid','#purchaseOrderGridPage',{edit:false,add:false,del:false,search:false,refresh:true});
	
	$("#purchaseOrderGrid").jqGrid('navButtonAdd',"#purchaseOrderGridPage",{caption:"",title:"Add New",buttonicon :'ui-icon ui-icon-plus',
		onClickButton:function(){
			addnewentry();
		}
	});
	/*$("#purchaseOrderGrid").jqGrid('navButtonAdd',"#purchaseOrderGridPage",{caption:"",title:"Export",buttonicon :'ui-icon ui-icon-bookmark',
		onClickButton:function(){
		}
	});*/
}


function addnewentry(){
	$('#purchaseOrderform')[0].reset();
	$('#collapseOne').collapse('hide');
	$('#collapseTwo').collapse('show');
	
	var emptyArray=new Array();
	createPurchaseOrderDetailGrid(emptyArray);
	
	$("#sAction").val('save');
}
function cancelEntry(){
	$('#purchaseOrderform')[0].reset();
	$('#collapseOne').collapse('show');
	$('#collapseTwo').collapse('hide');
}


function saveEntry(){
	doAjaxSubmitForm('purchase.action','purchaseOrderform','ContentDiv')
}



function createPurchaseOrderDetailGrid(prodData){



	/* *************Product Drop Down****************/
	 var proData,productlistItems= "";
	 var formdata = "sAction=getProductSKUList";
      $.ajax({
	      type: "POST",
	      url: "getProductData.action",
	      data: formdata,
	      async: false,
	      success: function(response) {
	    	  proData =response.alResponseList;
	    	 if(proData!=undefined){
	      		 var productjsonList = {"table":proData};
	      		 productlistItems = "0"+":"+"Select"+";";
	      	    for (var i = 0; i < productjsonList.table.length; i++){
	      	    	productlistItems += productjsonList.table[i].id + ":" + productjsonList.table[i].description + ";"
	      	    }
	      	    productlistItems= productlistItems.slice(0, productlistItems.lastIndexOf(";"));
	      	 }else{
	      		 productlistItems = "0"+":"+"Select"+";";
	      	 }
	      }
      });
      /* *************Product Drop Down********** Ends ******/


	 	var lastSel, mydata = prodData,
	 	 grid = $("#purchaseOrderDetailGrid"),
	      myAddParam = {
	          keys: true,
	          oneditfunc: function (id) {
	              editingRowId = id;
	          },
	          afterrestorefunc: function (id) {
	              editingRowId = undefined;
	          },
	          aftersavefunc: function(id){
	        	  //afterCompletesubmit();
	          }
	      },
	      myDelOptions = {
	              // because I use "local" data I don't want to send the changes to the server
	              // so I use "processing:true" setting and delete the row manually in onclickSubmit
	              onclickSubmit: function(rp_ge, rowid) {
	                  // we can use onclickSubmit function as "onclick" on "Delete" button
	                  var grid_id = $.jgrid.jqID(this.id), rowIdArr=[], rowid1=rowid.toString();
	                 	if(rowid1.indexOf(",")!=-1){
	                 		rowIdArr = rowid.split(',');
	             		}else{
	                 		rowIdArr[0]=rowid;
	             		}
	                 	for(var i=0;i<rowIdArr.length;i++){

	                 		 var cashBankReceiptListDelId=$('#purchaseOrderDetailGrid').jqGrid ('getCell', rowIdArr[i], 'productDtlId');

	                		if(cashBankReceiptListDelId>0)
	                	     {
	                			multiDeletePrdGridData(rowIdArr[i]);
	                	     }
	                		grid.delRowData(rowIdArr[i]);// delete row
	                 		$("#delmod"+grid[0].id).hide();


	             		}

	                  if (grid[0].p.lastpage > 1) {
	                      // reload grid to make the row from the next page visable.
	                      // TODO: deleting the last row from the last page which number is higher as 1
	                      grid.trigger("reloadGrid", [{page:grid[0].p.page}]);
	                  }


	                  return true;
	              },
	              processing:true
	          },oldAddRowData = $.fn.jqGrid.addRowData;

	       jqGridExtendAddRowData(oldAddRowData,grid);

       var cellIndx = 0;

   grid.jqGrid({

       datatype: 'local',
       data: mydata,
       colNames:['Id','Product Name','Unit Price','Quantity','Slot No','Disc Amount','Product Category ','Total Amount','Type','Product Attribute','Actions'],
       colModel: [
          {name:'productDtlId',index:'productDtlId', width:40, editable: true,hidden:true},

           {name: 'productName', index: 'productName', width:250, align: 'left', editable: true, formatter: 'select',
                  edittype: 'select',
                  editoptions: {class:'selectpicker',
                  	dataInit: function (elem) {
                  	},value: productlistItems, defaultValue: 0},
                  stype: 'select', searchoptions: {value: productlistItems},resizable: true},


        			{name: 'unitPrice', index: 'unitPrice', width:60, align: 'left',
                    	editoptions:{
                    		dataInit: function (elem) {
                    			$(elem).width(105).attr('TabIndex','19');
                    			var id= this.value, row = $(elem.target).closest('tr.jqgrow'), rowId = row.attr('id');
                    		},
            				dataEvents: [{ type: 'keyup',
          	                fn: function (e) {
          	                	decimalFormatValidationForJqGrid( $('input[name="unitPrice"]'));
    	      	                	var row = $(e.target).closest('tr.jqgrow');
    	                       	  	var rowId = row.attr('id');
          	                		var codeUnitCost = $("input#"+rowId+"_unitPrice").val();
          	                	 	var codeQuantity = $("input#"+rowId+"_qty").val();
          	                 		var codeDiscountAmount = $("input#"+rowId+"_discAmt").val();
          	                		var totalBCAmt = 0.0,bcTotalWithDiscount=0.0;

          	                		if(checkStringNullorEmpty('codeUnitCost')  && checkStringNullorEmpty('codeQuantity')){
          	                			totalBCAmt = (parseFloat(codeUnitCost) * parseInt(codeQuantity));
          	                			if(!isNaN(totalBCAmt)){
                          					$("input#"+rowId+"_totalPrice").val(parseFloat(totalBCAmt).toFixed(2));
                          					$("input#"+rowId+"_discAmt").val("0.0");

                          				}
                          				else{
                          					$("input#"+rowId+"_totalPrice").val('');
                          				}
          	                		}else if(checkStringNullorEmpty('codeUnitCost')  && checkStringNullorEmpty('codeQuantity')
          	                				&& checkStringNullorEmpty('codeDiscountAmount') ){
          	                			bcTotalWithDiscount = (parseFloat(codeUnitCost) * parseInt(codeQuantity)) - parseFloat(codeDiscountAmount);
          	                			$("input#"+rowId+"_totalPrice").val(parseFloat(bcTotalWithDiscount).toFixed(2));
          	                		}else{
          	                			$("input#"+rowId+"_totalPrice").val('');
          	                		}
          	                }
                        }]
            			},editable: true,resizable: true},


	  			{name: 'qty', index: 'qty', width: 60, align: 'right',
                	editoptions:{
                		dataInit: function (elem) {
                			$(elem).width(102).attr('TabIndex','20');
                			var id= this.value, row = $(elem.target).closest('tr.jqgrow'), rowId = row.attr('id');
                		},
        				dataEvents: [{ type: 'keyup',
      	                fn: function (e) {
      	                	decimalFormatValidationForJqGrid( $('input[name="qty"]'));
		                	var row = $(e.target).closest('tr.jqgrow');
                       	  	var rowId = row.attr('id');
	                		var codeUnitCost = $("input#"+rowId+"_unitPrice").val();
	                	 	var codeQuantity = $("input#"+rowId+"_qty").val();
	                		var codeDiscountAmount = $("input#"+rowId+"_discAmt").val();
	                		var totalBCAmt = 0.0,bcTotalWithDiscount=0.0;

	                		if(codeUnitCost=="" || codeUnitCost ==0){
                 				 $('#validsubproductGriddata').html('');
                  				   $('#validsubproductGriddata').html('Please Enter Unit Price!');
                  				   $('#purchaseOrderDetailGrid').find('tr#'+rowId).find('td[aria-describedby="purchaseOrderDetailGrid_jqGridDetailActions"]').find('div[title="Edit selected row"] span.ui-icon-pencil').trigger('click');
                  				   $("input#" + rowId + "_unitPrice", row[0]).focus();
                 			  }

	                		if(checkStringNullorEmpty('codeUnitCost')  && checkStringNullorEmpty('codeQuantity')){
	                			totalBCAmt = (parseFloat(codeUnitCost) * parseInt(codeQuantity));
	                			if(!isNaN(totalBCAmt)){
                					$("input#"+rowId+"_totalPrice").val(totalBCAmt);
                					$("input#"+rowId+"_discAmt").val("0.0");

                				}
                				else{
                					$("input#"+rowId+"_totPrice").val('');
                				}
	                		}else if(checkStringNullorEmpty('codeUnitCost')  && checkStringNullorEmpty('codeQuantity')
	                				&& checkStringNullorEmpty('codeDiscountAmount') ){
	                			bcTotalWithDiscount = (parseFloat(codeUnitCost) * parseInt(codeQuantity)) - parseFloat(codeDiscountAmount);
	                			$("input#"+rowId+"_totalPrice").val(bcTotalWithDiscount);
	                		}else{
	                			$("input#"+rowId+"_totalPrice").val('');
	                		}
	                }
                    }]
        			},editable: true,resizable: true},

 		  {name:'slotNo',index:'slotNo',width:100, editable: true, editrules:{number:true,required: false},hidden: true },

  		  {name:'discAmt',index:'discAmt',width:100, align: 'right',editable: true,hidden:true,
  			editoptions:{defaultValue:'0'}, editrules:{number:true,required: true},formatter: 'number' },

		  {name:'prdNarration',index:'prdNarration',width:100, editable: true,
  				editoptions:{
            		dataInit: function (elem) {
            			$(elem).width(180).attr('TabIndex','21');
            			var id= this.value, row = $(elem.target).closest('tr.jqgrow'), rowId = row.attr('id');
            		},dataEvents: [{type: 'keydown',
                  	   fn: function(e){
                  		   var key = e.charCode || e.keyCode;
                  		   var id= this.value, row = $(e.target).closest('tr.jqgrow'), rowId = row.attr('id')
                  		   if (key == 13){//enter
                  			   debugger;
                  			var codeQuantity = $("input#"+rowId+"_qty").val();
                  			  if(codeQuantity==""){
                  				 $('#validsubproductGriddata').html('');
                   				   $('#validsubproductGriddata').html('Please Enter Total Quantity!');
                   				   $('#purchaseOrderDetailGrid').find('tr#'+rowId).find('td[aria-describedby="purchaseOrderDetailGrid_jqGridDetailActions"]').find('div[title="Edit selected row"] span.ui-icon-pencil').trigger('click');
                   				   $("input#" + rowId + "_qty", row[0]).focus();
                  			  }else{
                  				 $('#purchaseOrderDetailGrid').find('tr#'+rowId).find('td[aria-describedby="purchaseOrderDetailGrid_jqGridDetailActions"]').find('div.ui-inline-save').trigger('click');
                  				 invoiceFormGridTabIndex="proddetailGridTabIndex";

                  			  }
                  		   }
                  	   }
                     }]
        			},hidden: false },

 		  {name:'totalPrice',index:'totalPrice', width:80, editable: true,
			  editoptions:{readonly:true,disabled:true,style: "-webkit-appearance: none;-moz-appearance: none;text-indent: 1px; text-overflow: '';"},
			  editrules:{edithidden:true,number:true},formatter: 'number',
			  align: 'right',searchoptions:{sopt:['cn']} },


 		  {name: 'attrType', index: 'attrType', width: 100, sortable: false, align: 'center',hidden:true,
 	   			formatter: function (cellvalue, options, rowObject) {
 	  		        return "<div title=\"slab\"><span class=\"icon-th  \"></div>";
 	      	  }},

          {name: 'prodAttrSlab', index: 'prodAttrSlab', width:100, editable: false,hidden:true, edithidden: true},

          {name:'jqGridDetailActions',index:'jqGridDetailActions',width:65,align:'center',sortable:false,formatter:'actions',
              formatoptions:{
                  keys: true, // we want use [Enter] key to save the row and [Esc] to cancel editing.

                  onSuccess:function(jqXHR) {
                      /*console.log("in onSuccess used only for remote editing:"+
                            "\nresponseText="+jqXHR.responseText+
                            "\n\nWe can verify the server response and return false in case of"+
                            " error response. return true confirm that the response is successful");*/

                      // we can verify the server response and interpret it do as an error
                      // in the case we should return false. In the case onError will be called
                      return true;
                  },
                  onError:function(rowid, jqXHR, textStatus) {
                     /* console.log("in onError used only for remote editing:"+"\nresponseText="+jqXHR.responseText+"\nstatus="+jqXHR.status+"\nstatusText"+jqXHR.statusText+"\n\nWe don't need return anything");*/
                  },
                  afterSave:function(rowid) {
                	  debugger;

                	  var editableData= $("#purchaseOrderDetailGrid").jqGrid('getGridParam', 'data');
                	  $("#purchaseOrderDetailGrid").jqGrid('setGridParam', { data: editableData }).trigger("reloadGrid");

                	  	var grnNo = $('#cmbGrnNoVal').val();
	          			if(grnNo != 'Select' && grnNo !='' && grnNo != undefined){
	          				$('#purchaseOrderDetailGridPage').find('.add-purple').parent().parent().addClass('ui-state-disabled');
			        		$('#purchaseOrderDetailGridPage').find('.refresh-green').parent().parent().addClass('ui-state-disabled');
	          			}
                  },
                  afterRestore:function(rowid) {
                	  /*console.log("in afterRestore (Cancel): rowid="+rowid+"\nWe don't need return anything");*/
                  },
                  delOptions: myDelOptions
              }}

      	],
       autowidth:true,
	   multiboxonly:true,
       multiselect: true,
       autoheight:true,
       rowNum: 10,
       rowList: [5, 10, 20],
       pager: '#purchaseOrderDetailGridPage',
       gridview: true,
       rownumbers: true,
       autoencode: true,
       ignoreCase: true,
       sortname: 'invdate',
       viewrecords: true,
       sortorder: 'desc',
       caption: 'Product List',
       height: '100%',
       editurl: 'clientArray',
       ondblClickRow: function (rowid, ri, ci) {
           var $this = $(this), p = this.p;
           if (p.selrow !== rowid) {
               $this.jqGrid('setSelection', rowid);
           }
       },
       onSelectRow: function (id) {
           if (id && id !== lastSel) {
               if (typeof lastSel !== "undefined") {
                   $(this).jqGrid('restoreRow', lastSel);
               }
               lastSel = id;
           }
       },
       loadComplete: function(){
    	   afterCompletesubmit();
       }
   }).jqGrid('setGridParam', { data: mydata}).trigger("reloadGrid");
   grid.jqGrid('navGrid', '#purchaseOrderDetailGridPage', {search:false,add:false,edit:false,del:false},
       { overlay: false,
	   		onClose: function (form) {
           $("div#ui-datepicker-div.ui-datepicker").hide(); }});
   grid.jqGrid('inlineNav','#purchaseOrderDetailGridPage',{save: true, edit: false, add: true, del:false, addParams: {addRowParams: myAddParam/*, position: "afterSelected"*/}});
}



function afterCompletesubmit(){
	 var bcAmount=0.0,tcAmount=0.0,totAmount=0.0,totalBCAmt = 0.0,prdQty=0,skipAmnt=0.0;
	 var chargesData = $("#purchaseOrderDetailGrid").jqGrid('getGridParam','data');
	 if(chargesData != undefined && chargesData.length >0){
		 var jsonlist={"table":chargesData};
		 for (var j = 0; j < jsonlist.table.length; j++)
		 {
			 bcAmount=bcAmount+parseFloat(jsonlist.table[j].bcAmount);
			 tcAmount=tcAmount+parseFloat(jsonlist.table[j].tcAmount);
			 if(jsonlist.table[j].postTo == "Seller")
				 skipAmnt = skipAmnt+parseFloat(jsonlist.table[j].bcAmount);
		 }

	 }
		 if(!isNaN(bcAmount))
			 $('#chrgTotalAmount').val(bcAmount.toFixed(2));
		 else
			 $('#chrgTotalAmount').val(0.0);
	    $('#tcTotalAmount').val(tcAmount.toFixed(2));


     var productData = $("#invoicetableproductgrid").jqGrid('getGridParam','data');
     if(productData != undefined && productData.length >0){
		 var jsonPrdlist={"table":productData};
		 for (var j = 0; j < jsonPrdlist.table.length; j++)
		 {
			 totAmount=totAmount+parseFloat(jsonPrdlist.table[j].totalPrice);
			 prdQty =prdQty+parseInt(jsonPrdlist.table[j].qty);
		 }

     }
	     if(!isNaN(totAmount))
			 $('#prdTotalAmount').val(totAmount.toFixed(2));
		 else
			 $('#prdTotalAmount').val(0.0);

     	$('#invQnty').val(prdQty);

     if(chargesData != undefined && productData != undefined){
	     if(chargesData.length >0 && productData.length >0){
	    	 if(!isNaN(totAmount) && !isNaN(bcAmount) && !isNaN(skipAmnt)){
	    		 totalBCAmt+=totAmount+bcAmount-skipAmnt;
	    		 $('#bcTotalAmount').val(totalBCAmt.toFixed(2));
				}
	     }else if(chargesData.length >0 && productData.length == 0){
	    	 if(!isNaN(bcAmount) && !isNaN(skipAmnt)){
	    		 totalBCAmt+=bcAmount-skipAmnt;
	    		 $('#bcTotalAmount').val(totalBCAmt.toFixed(2));
				}
	     }else if(chargesData.length == 0 && productData.length >0){
	    	 if(!isNaN(totAmount)){
	    		 totalBCAmt+=totAmount;
	    		 $('#bcTotalAmount').val(totalBCAmt.toFixed(2));
				}
	     }else{
	    	 $('#bcTotalAmount').val(totalBCAmt.toFixed(2));
	     }
     }

}

