package com.adv.master.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import com.adv.jdbcConnection.DatabaseFile;
import com.adv.main.framework.BaseAction;
import com.adv.master.beans.ProductBean;
import com.adv.master.queryutil.ProductQueryUtil;

public class ProductDAO {
	DatabaseFile objDatabaseFile = null;
	public boolean saveProductDetails(ProductBean objProductBean) {

		boolean isSuccess = false;
		Connection conn = null;
		PreparedStatement ps = null;
		ResultSet rs = null;
		int iCounter = 1;
		try {
			
			objDatabaseFile = new DatabaseFile();
			String sql = ProductQueryUtil.saveProductDetails;
			System.out.println(sql);
			
			objDatabaseFile.codeinsert(sql);
			
			//conn = getConnection();
			//ps = conn.prepareStatement(ProductQueryUtil.saveProductDetails);
			//ps.setString(iCounter++, objProductBean.getProductCode());
			ps.setString(iCounter++, objProductBean.getProductName());
			ps.execute();
			rs = ps.getResultSet();
			while(rs.next())
			{
				objProductBean.setProductId(rs.getString("product_id"));
			}
		
			isSuccess = true;
		} catch (Exception e) {
			// TODO: handle exception
		} finally {
			//close(conn, ps);
		}
		return isSuccess;
	}

}
