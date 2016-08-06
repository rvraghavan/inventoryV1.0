package com.adv.main.framework;

public class ErrorBean {
	private String ErrorCode;
	private String ErrorDesc;
	
	private StackTraceElement STE;

	public String getErrorCode() {
		return ErrorCode;
	}

	public void setErrorCode(String errorCode) {
		ErrorCode = errorCode;
	}

	public String getErrorDesc() {
		return ErrorDesc;
	}

	public void setErrorDesc(String errorDesc) {
		ErrorDesc = errorDesc;
	}

	public StackTraceElement getSTE() {
		return STE;
	}

	public void setSTE(StackTraceElement sTE) {
		STE = sTE;
	}
	
	
	
}
