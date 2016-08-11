$(document).ready(function(){
	
	populatePurchaseOrderGrid();
});

function populatePurchaseOrderGrid(){



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


	 	var lastSel, mydata = [],
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
       colNames:['Id','Product ','Condition','Remarks-1','Status-1','Remarks-2','Stauts-2',
                 'Actions'],
       colModel: [
          {name:'Id',index:'productDtlId', width:40, editable: true,hidden:false},

           {name: 'Product', index: 'productName', width:250, align: 'left', editable: true, formatter: 'select',
                  edittype: 'select',
                  editoptions: {class:'selectpicker',
                  	dataInit: function (elem) {
                  	},value: productlistItems, defaultValue: 0},
                  stype: 'select', searchoptions: {value: productlistItems},resizable: true},

                  {name: 'Condition', index: 'condition', width:250, align: 'left', editable: true, formatter: 'select',
                      edittype: 'select',
                      editoptions: {class:'selectpicker',
                      	dataInit: function (elem) {
                      	},value: productlistItems, defaultValue: 0},
                      stype: 'select', searchoptions: {value: productlistItems},resizable: true},
        			
                      {name: 'remarks1', index: 'remarks-1', width:250, align: 'left', editable: true, formatter: 'select',
                          edittype: 'select',
                          editoptions: {class:'selectpicker',
                          	dataInit: function (elem) {
                          	},value: productlistItems, defaultValue: 0},
                          stype: 'select', searchoptions: {value: productlistItems},resizable: true},
                          
                          {name:'status1',index:'status-1',width:100, editable: true, editrules:{number:true,required: false},hidden: false,resizable: true },
                          {name:'remarks2',index:'remarks-2',width:100, editable: true, editrules:{number:true,required: false},hidden: false,resizable: true },
                          {name:'status2',index:'status-2',width:100, editable: true, editrules:{number:true,required: false},hidden: false,resizable: true },

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
    	  // afterCompletesubmit();
       }
   }).jqGrid('setGridParam', { data: mydata}).trigger("reloadGrid");
   grid.jqGrid('navGrid', '#purchaseOrderDetailGridPage', {search:false,add:false,edit:false,del:false},
       { overlay: false,
	   		onClose: function (form) {
           $("div#ui-datepicker-div.ui-datepicker").hide(); }});
   grid.jqGrid('inlineNav','#purchaseOrderDetailGridPage',{save: true, edit: false, add: true, del:false, addParams: {addRowParams: myAddParam/*, position: "afterSelected"*/}});
}



function saveEntry(){
	$("#sAction").val('save');
	doAjaxSubmitForm('purchase.action','purchaseOrderform','ContentDiv')
}


