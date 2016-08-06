package com.adv.main.framework;


import java.util.ArrayList;
import java.util.Hashtable;

import javax.servlet.http.HttpServletRequest;

import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionSupport;

public class BaseAction  extends ActionSupport  {
	static Logger log = Logger.getLogger(BaseAction.class);
	String sSuccessMsg="";
	static Hashtable htErrInfos1 = new Hashtable();
	
}
