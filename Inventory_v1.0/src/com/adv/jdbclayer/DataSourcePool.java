package com.adv.jdbclayer;

import java.io.Serializable;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import javax.naming.InitialContext;
import javax.sql.DataSource;
import javax.naming.Context;
import javax.naming.InitialContext;

public class DataSourcePool implements Serializable {

	public static Connection conn = null;

	private static final String ADV_ENVIRONMENT = "java:comp/env";
	private static final String ADV_JNDINAME = "jdbc/postgresDS";

	public static Connection getConnection() throws SQLException {
		DataSource ds;
		try {
			InitialContext jndiCntx = new InitialContext();
			Context ctx = (Context) jndiCntx.lookup(ADV_ENVIRONMENT);
			ds = (javax.sql.DataSource) ctx.lookup(ADV_JNDINAME);
			
			conn = ds.getConnection();
			conn.setAutoCommit(false);
			
		} catch (Exception ex) {
			ex.printStackTrace();
		}
		return conn;
	}

	public static void close(Connection conn) {
		try {
			if (conn != null) {
				conn.commit();
				conn.close();
			}
		} catch (Exception sqle) {
			sqle.printStackTrace();
			try {
				conn.rollback();
			} catch (SQLException e) {				
				e.printStackTrace();
			}
		}
	}

	public static void close(Connection conn, Statement stat, ResultSet rs) {
		try {
			if (rs != null) {
				rs.close();
			}
			if (stat != null) {
				stat.close();
			}
			if (conn != null) {
				conn.commit();
			}
		} catch (SQLException sqle) {
			try {
				conn.rollback();
			} catch (SQLException e) {				
				e.printStackTrace();
			}
		} finally {
			if (conn != null) {
				close(conn);
			}
		}
	}

	public static void close(Statement stat, ResultSet rs) {
		try {
			if (rs != null) {
				rs.close();
			}
			if (stat != null) {
				stat.close();
			}

		} catch (SQLException sqle) {
			try {
				conn.rollback();
			} catch (SQLException e) {				
				e.printStackTrace();
			}
		} finally {
		}
	}

	public static void close(Statement stat) {
		try {
			if (stat != null) {
				stat.close();
			}

		} catch (SQLException sqle) {
			try {
				conn.rollback();
			} catch (SQLException e) {				
				e.printStackTrace();
			}
		} finally {
		}
	}

	public static void close(Connection conn, Statement stat) {
		try {
			if (stat != null) {
				stat.close();
			}
			if (conn != null) {
				conn.commit();
			}
		} catch (SQLException sqle) {
			try {
				conn.rollback();
			} catch (SQLException e) {				
				e.printStackTrace();
			}
		} finally {
			close(conn);
		}
	}
}
