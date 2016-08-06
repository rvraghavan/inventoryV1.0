package com.adv.login;

import javax.servlet.http.HttpServletRequest;

import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

public class LoginAction extends ActionSupport {
	HttpServletRequest request = (HttpServletRequest) ActionContext
			.getContext().get(ServletActionContext.HTTP_REQUEST);
	
	public String login() throws Exception {
		
		String sUserName =  request.getParameter("lg_username"); // user id not
		// username
		String sPassWord = request.getParameter("lg_password");
		System.out.println("Welcome::::::::::::::::"+sUserName+"::::::::"+sPassWord);
		
		if(sUserName.equalsIgnoreCase("admin")){
			return SUCCESS;	
		}else{
			return ERROR;
		}
		
	}

	
}
