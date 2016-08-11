<script src="scripts/master/supplierform.js"></script>
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <h4 class="page-head-line">Supplier</h4>

        </div>

    </div>
    <div class="row">
        <div class="col-md-12">
        	<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
	          <div class="panel panel-default" id="accordion1">
	            <div class="panel-heading" role="tab" id="headingOne">
	              <h4 class="panel-title">
	                <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="false">
	                 	Supplier List
	                </a>
	              </h4>
	            </div>
	            <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
	              <div class="panel-body">
	                	<div id="jqgrid">
							<div id="detailGrid">
								<table id="supplierGrid"></table><div id="supplierGridPage"></div>
							</div>	
						</div>
	              </div>
	            </div>
	          </div>
	          <div class="panel panel-default" id="accordion2">
	            <div class="panel-heading" role="tab" id="headingTwo">
	              <h4 class="panel-title">
	                <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false">
	                  Supplier Form
	                </a>
	              </h4>
	            </div>
	            <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
	              <div class="panel-body">
	                <div class="row">
	                	<form action="supplier" id="supplierform" name="supplierform" class="form-horizontal">
			           		<fieldset>
			           			<input type="hidden" id="sAction" name="sAction" value="save" />
			           			<div class="col-md-12">
			           				<div class="col-md-6">
			           					<div class="form-group">
			           					
			           					
										  <label class="col-md-5 control-label" for="textinput">Supplier Name</label>  
										  <div class="col-md-7">
										  	<input id="txtsupplierName" name="supplierName" type="text" placeholder="" class="form-control input-md" />					 	  
										  </div>
										</div>	
										<div class="form-group">
										  <label class="col-md-5 control-label" for="textinput">Country</label>  
										  <div class="col-md-7">
										  		<select id="cmbcountry" name="country" class="form-control input-md">
										  		<option value="select">Select</option>
										  		<option value="india">India</option>
										  		<option value="china">china</option>
										  		<option value="xxxxx">xxxxx</option>
										  		<option value="yyyy">yyyyy</option>
										  	</select>					 	  
										  </div>
										</div>
										<div class="form-group">
										  <label class="col-md-5 control-label" for="textinput">Phone</label>  
										  <div class="col-md-7">
										  	<input id="txtphone" name="phone" type="text" placeholder="" class="form-control input-md" />					 	  
										  </div>
										</div>
										<div class="form-group">
										  <label class="col-md-5 control-label" for="textinput">e-mail</label>  
										  <div class="col-md-7">
										  	<input id="txtemail" name="email" type="text" placeholder="" class="form-control input-md" />					 	  
										  </div>
										</div>
										<div class="form-group">
										  <label class="col-md-5 control-label" for="textinput">Account Number</label>  
										  <div class="col-md-7">
										  	<input id="txtaccno" name="accno" type="text" placeholder="" class="form-control input-md" />					 	  
										  </div>
										</div>
										<div class="form-group">
										  <label class="col-md-5 control-label" for="textinput">IFSC Code</label>  
										  <div class="col-md-7">
										  	<input id="txtifsc" name="ifsc" type="text" placeholder="" class="form-control input-md" />					 	  
										  </div>
										</div>
										</div><!-- /col-md-6  -- left -->
			           				<div class="col-md-6">           					
										<div class="form-group">
										  <label class="col-md-5 control-label" for="textinput">Supplier Address</label>  
										  <div class="col-md-7">							  	
										  <textarea id="txtsupplieradd" name="supplieradd" placeholder="" class="form-control input-md" cols="5" rows="3"> </textarea>						 	  
										  </div>
										</div>
										<div class="form-group">
										  <label class="col-md-5 control-label" for="textinput">City</label>  
										  <div class="col-md-7">
										  	<input id="txtcity" name="city" type="text" placeholder="" class="form-control input-md" />					 	  
										  </div>
										</div>
										<div class="form-group">
										  <label class="col-md-5 control-label" for="textinput">Mobile</label>  
										  <div class="col-md-7">
										  	<input id="txtmobile" name="mobile" type="text" placeholder="" class="form-control input-md" />					 	  
										  </div>
										</div>
										<div class="form-group">
										  <label class="col-md-5 control-label" for="textinput">Fax Number</label>  
										  <div class="col-md-7">
										  	<input id="txtfax" name="fax" type="text" placeholder="" class="form-control input-md" />					 	  
										  </div>
										</div>	
										<div class="form-group">
										  <label class="col-md-5 control-label" for="textinput">Bank Address</label>  
										  <div class="col-md-7">
										  	<textarea id="txtbnkadd" name="bnkadd" placeholder="" class="form-control input-md" cols="5" rows="3"> </textarea>					 	  
										  </div>
										</div>
										<div class="form-group">
										  <label class="col-md-5 control-label" for="textinput">Default Currency</label>  
										  <div class="col-md-7">
										  	<input id="txtcurrency" name="currency" type="text" placeholder="" class="form-control input-md" />					 	  
										  </div>
										</div>
			           				</div><!-- /col-md-6  -- right -->
			           				    			
			           			</div>
			           			<div class="col-md-6 col-md-offset-5">
		           					<div class="form-group pull-right">
		           						<button type="button" class="btn btn-primary" id="saveBtn" onclick="saveEntry()">Save</button>
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
populateSupplierGrid();
</script>