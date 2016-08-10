package com.adv.jdbcConnection;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class DatabaseFile {
    
    //select code here
    public ResultSet codeselect(String sql)
    {
        ResultSet rs = null;
        
        try
        {            
            Class.forName("org.postgresql.Driver");            
            Connection con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/StudentMgMt", "postgres", "arulmozhi");            
            Statement  st  = con.createStatement();
            
            rs  = st.executeQuery(sql);
            
        }
        catch(Exception e)
        {
            e.printStackTrace();
        }
        
        return rs;
    }
    
    //insert code here
    public void codeinsert(String sql)
    {
         try
        {
            
            Class.forName("org.postgresql.Driver");
            
            Connection con =  DriverManager.getConnection("jdbc:postgresql://localhost:5432/StudentMgMt", "postgres", "arulmozhi");
            
            Statement  st = con.createStatement();
            
            st.executeUpdate(sql);
            
            st.close();
            
            con.close();
            
        }
        catch(Exception e)
        {
            e.printStackTrace();
        }
    }
    
    //update code here
    public void codeupdate(String sql)
    {
         try
        {
            
            Class.forName("org.postgresql.Driver");
            
            Connection con =  DriverManager.getConnection("jdbc:postgresql://localhost:5432/StudentMgMt", "postgres", "arulmozhi");
            
            Statement   st = con.createStatement();
            
            st.executeUpdate(sql);
            
            st.close();
            
            con.close();
            
        }
        catch(Exception e)
        {
            e.printStackTrace();
        }
    }
    
    //delete code here
    public void codedelete(String sql)
    {
         try
        {
            
            Class.forName("org.postgresql.Driver");
            
            Connection con =  DriverManager.getConnection("jdbc:postgresql://localhost:5432/StudentMgMt", "postgres", "arulmozhi");
            
            Statement  st  = con.createStatement();
            
            st.executeUpdate(sql);
            
            st.close();
            
            con.close();
        }
        catch(Exception e)
        {
            e.printStackTrace();
        }
    }
    

}
