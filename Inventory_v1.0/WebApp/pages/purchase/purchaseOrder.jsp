<script src="scripts/Transactions/purchaseOrder.js"></script>
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
	                 	Purchase Order List
	                </a>
	              </h4>
	            </div>
	            <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
	              <div class="panel-body">
	                	<div id="jqgrid">
							<div id="detailGrid">
								<table id="purchaseOrderGrid"></table><div id="purchaseOrderGridPage"></div>
							</div>	 
						</div>
	              </div>
	            </div>
	          </div>
	          <div class="panel panel-default" id="accordion2">
	            <div class="panel-heading" role="tab" id="headingTwo">
	              <h4 class="panel-title">
	                <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false">
	                  PurchaseOrder Form
	                </a>
	              </h4>
	            </div>
	            <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
	              <div class="panel-body">
	                <div class="row">
	                	<form action="purchase" id="purchaseOrderform" name="purchaseOrderform" class="form-horizontal">
			           		<fieldset>
			           			<input type="hidden" id="sAction" name="sAction" value="save" />
			           			<div class="col-md-12">
			           				<div class="col-md-6">
			           					<div class="form-group">
										  <label class="col-md-5 control-label" for="textinput">Order Type</label>  
										  <div class="col-md-7">
										  	<input id="orderType" name="productName" type="text" placeholder="" class="form-control input-md" disable="true" />					 	  
										  </div>
										</div>	
										<div class="form-group">
											<label class="col-md-5 control-label" for="textinput">Order Date</label>
											<div class="col-md-7 input-append date" data-date="12-02-2012" data-date-format="dd/mm/yyyy" >
												<input  type="text"  class="input-large" name="orderDt" id="orderDt" size="16" type="text" TabIndex="3"
												placeholder="Ex: dd/mm/YYYY" required/>
												<span class="add-on">
												<i class="icon-calendar" onclick="showDatepicker('orderDt');"></i>
												</span>
											</div>
										</div>
										<div class="form-group">
										  <label class="col-md-5 control-label" for="textinput">Supplier</label>  
										  <div class="col-md-7">
										  	<select id="cmbosupplierType" name="orderType" class="form-control input-md">
										  		<option value="select">Select</option>
										  		<option value="supiler1">xxxx</option>
										  		<option value="supplier2">yyyy</option>
										  	</select>					 	  
										  </div>
										</div>
									</div><!-- /col-md-6  -- left -->
			           				<div class="col-md-6">           					
										<div class="form-group">
											<label class="col-md-5 control-label" for="textinput">Expected Date</label>
											<div class="col-md-7 input-append date" data-date="12-02-2012" data-date-format="dd/mm/yyyy" >
												<input  type="text"  class="input-large" name="expectedDt" id="expectedInvDt" size="16" type="text" TabIndex="3"
												placeholder="Ex: dd/mm/YYYY" required/>
												<span class="add-on">
												<i class="icon-calendar" onclick="showDatepicker('expectedDt');"></i>
												</span>
											</div>
										</div>
			           				</div><!-- /col-md-6  -- right -->
			           			</div>
			           			<div class="col-md-12" id="jqgrid">
			           					<div class="form-group" id="productDetailgrid">
											<table id="purchaseOrderDetailGrid"></table>
											<div id="purchaseOrderDetailGridPage"></div>
										</div>
			           			</div>
								<div class="col-md-12">
									<div class="form-group pull-right">
					           			<label class="col-md-2 control-label" for="textinput">Total	</label>  
				           				<div class="col-md-7 col-md-offset-2">
										  	<input id="totalType" name="total" type="text" placeholder="" class="form-control input-md" disabled />					 	  
										</div>
									</div>			           			
			           			</div>
			           			<div class="col-md-12">
			           				<div class="col-md-6 col-md-offset-5">
		           					<div class="form-group pull-right">
		           						<button class="btn btn-primary" id="saveBtn" onclick="saveEntry()">Save</button>
		           						<button type="button" class="btn btn-danger" id="cancelBtn" onclick="cancelEntry()">Cancel</button>
		           					</div>
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
populatePurchaseOrderGrid();
</script>
