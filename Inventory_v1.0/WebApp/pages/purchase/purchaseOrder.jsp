<script src="scripts/master/productOrder.js"></script>
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <h4 class="page-head-line">PurchaseOrder</h4>
        </div>

    </div>
    <div class="row">
        <div class="col-md-12">
        	<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
	          <div class="panel panel-default" id="accordion1">
	            <div class="panel-heading" role="tab" id="headingOne">
	              <h4 class="panel-title">
	                <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="false">
	                 	Product List
	                </a>
	              </h4>
	            </div>
	            <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
	              <div class="panel-body">
	                	<div id="jqgrid">
							<div id="detailGrid">
								<table id="productGrid"></table><div id="productGridPage"></div>
							</div>	 
						</div>
	              </div>
	            </div>
	          </div>
	          <div class="panel panel-default" id="accordion2">
	            <div class="panel-heading" role="tab" id="headingTwo">
	              <h4 class="panel-title">
	                <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false">
	                  Product Form
	                </a>
	              </h4>
	            </div>
	            <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
	              <div class="panel-body">
	                <div class="row">
	                	<form action="product" id="productform" name="productform" class="form-horizontal">
			           		<fieldset>
			           			<input type="hidden" id="sAction" name="sAction" value="save" />
			           			<div class="col-md-12">
			           				<div class="col-md-6">
			           					<div class="form-group">
										  <label class="col-md-5 control-label" for="textinput">OrderNumber</label>  
										  <div class="col-md-7">
										  	<input id="orderNumber" name="productName" type="text" placeholder="" class="form-control input-md" disable="true" />					 	  
										  </div>
										</div>	
										<div class="col-md-7 input-append date" data-date="12-02-2012" data-date-format="dd/mm/yyyy" >
										<input  type="text"  class="input-large" name="supplierInvDt" id="supplierInvDt" size="16" type="text" TabIndex="3"
										placeholder="Ex: dd/mm/YYYY" required/>
										<span class="add-on">
										<i class="icon-calendar" onclick="showDatepicker('supplierInvDt');"></i>
										</span>
										
										</div>
										<div class="form-group">
										  <label class="col-md-5 control-label" for="textinput">Model</label>  
										  <div class="col-md-7">
										  	<input id="txtModel" name="model" type="text" placeholder="" class="form-control input-md" />					 	  
										  </div>
										</div>
										<div class="form-group">
										  <label class="col-md-5 control-label" for="textinput">SerialNumber</label>  
										  <div class="col-md-7">
										  	<input id="txtSerialNumber" name="serialNumber" type="text" placeholder="" class="form-control input-md" />					 	  
										  </div>
										</div>
										<div class="form-group">
										  <label class="col-md-5 control-label" for="textinput">Remarks</label>  
										  <div class="col-md-7">
										  	<textarea id="txtRemarks" name="remarks" placeholder="" class="form-control input-md" cols="5" rows="3"> </textarea>					 	  
										  </div>
										</div>
			           				</div><!-- /col-md-6  -- left -->
			           				<div class="col-md-6">           					
										<div class="form-group">
										  <label class="col-md-5 control-label" for="textinput">Product Category</label>  
										  <div class="col-md-7">							  	
										  	<select id="cmbProdCategory" name="productCategory" class="form-control input-md">
										  		<option value="select">Select</option>
										  		<option value="kit">Kit</option>
										  		<option value="glassware">GlassWare</option>
										  		<option value="labInstruments">LabInstruments</option>
										  	</select>					 	  
										  </div>
										</div>
										<div class="form-group">
										  <label class="col-md-5 control-label" for="textinput">Size</label>  
										  <div class="col-md-7">
										  	<input id="txtsize" name="size" type="text" placeholder="" class="form-control input-md" />					 	  
										  </div>
										</div>
										<div class="form-group">
										  <label class="col-md-5 control-label" for="textinput">ReOrder Point</label>  
										  <div class="col-md-7">
										  	<input id="txtReOrderPoint" name="reOrderPoint" type="text" placeholder="" class="form-control input-md" />					 	  
										  </div>
										</div>	
										<div class="form-group">
										  <label class="col-md-5 control-label" for="textinput">Room</label>  
										  <div class="col-md-7">							  	
										  	<select id="cmbRoom" name="room" class="form-control input-md">
										  		<option value="select">Select</option>
										  		<option value="pcr">PCR Room</option>
										  		<option value="postpcr">Post PCR Room</option>
										  		<option value="cultureFish">Culture_Fish Room</option>
										  		<option value="cultureFish">DNA Room</option>
										  	</select>					 	  
										  </div>
										</div>
										<div class="form-group">
										  <label class="col-md-5 control-label" for="textinput">companyName</label>  
										  <div class="col-md-7">
										  	<input id="txtcompanyName" name="Company Name" type="text" placeholder="" class="form-control input-md" />					 	  
										  </div>
										</div>     			
			           				</div><!-- /col-md-6  -- right -->
			           				    			
			           			</div>
			           			<div class="col-md-6 col-md-offset-5">
		           					<div class="form-group pull-right">
		           						<button class="btn btn-primary" id="saveBtn" onclick="saveEntry()">Save</button>
		           						<!-- <input type="submit" class="btn btn-danger" id="cancelBtn" onclick="javascript:cancelEntry()" value="Cancel" /> -->
		           					</div>
		           				</div>
			           		</fieldset>
			           	</form>
			         </div>	
	              </div> <!-- /panel-body -->
	            </div> <!-- /collapseTwo -->
	          </div>
	          
	        </div> <!-- /panel-group -->
        
           	
        </div>
    </div>
</div>
<script>
//populateProductGrid();
</script>
