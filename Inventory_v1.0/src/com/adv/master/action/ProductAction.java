package com.adv.master.action;

import javax.servlet.http.HttpServletRequest;

import org.apache.struts2.ServletActionContext;

import com.adv.main.framework.BaseAction;
import com.adv.master.beans.ProductBean;
import com.adv.master.dao.ProductDAO;
import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;

public class ProductAction extends BaseAction implements ModelDriven<ProductBean> {

	ProductBean objProductBean = null;
	@Override
	public ProductBean getModel() {
		objProductBean = new ProductBean();
		return objProductBean;
	}
	
	public String execute(){
		HttpServletRequest request = (HttpServletRequest) ActionContext
				.getContext().get(ServletActionContext.HTTP_REQUEST);
		String returnname = "";
		String logDescription = "";
		String sAction = request.getParameter("sAction");
		
		ProductDAO objProductDAO = new ProductDAO();
		System.out.println("save:::::::Product"+sAction);
		if(sAction.equalsIgnoreCase("save")){
			
			boolean isSuccess = objProductDAO.saveProductDetails(objProductBean);
			
			returnname=SUCCESS;
		}
		return returnname;
	}

}
