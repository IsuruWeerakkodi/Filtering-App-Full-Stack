package lk.ijse.dep11.app;

import org.junit.jupiter.api.*;

import java.sql.*;

import static org.junit.jupiter.api.Assertions.*;

@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class DatabaseTest {

    private Connection connection;

    @BeforeEach
    void setUp() throws Exception {
        Class.forName("com.mysql.cj.jdbc.Driver");
        connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/dep11_filtering_app", "root", "mysql");
    }

    @AfterEach
    void tearDown() throws SQLException {
        connection.close();
    }

    @Order(1)
    @Test
    void testDBExceeds1000Records() throws SQLException {
        Statement stm = connection.createStatement();
        ResultSet rst = stm.executeQuery("SELECT COUNT(*) AS count FROM customer");
        rst.next();
        int numberOfRecords = rst.getInt(1);
        System.out.println(numberOfRecords);
        assertTrue(numberOfRecords >=1000);

    }
    @Order(2)
    @Test
    void testValidContactNumbers() throws SQLException {
        Statement stm = connection.createStatement();
        ResultSet rst = stm.executeQuery("SELECT * FROM customer WHERE contact NOT REGEXP '\\\\d{3}-\\\\d{7}'");
        assertFalse(rst.next());
    }
    @Order(3)
    @Test
    void testUniqueContactNumbers() throws SQLException {
        Statement stm = connection.createStatement();
        ResultSet rst = stm.executeQuery("SELECT contact, COUNT(contact) AS count FROM customer GROUP BY contact HAVING count >1");
        assertFalse(rst.next());
    }
    @Order(4)
    @Test
    void testUniqueCustomerNames() throws SQLException {
        Statement stm = connection.createStatement();
        ResultSet rst = stm.executeQuery("SELECT CONCAT(first_name, ' ' ,last_name) AS name, COUNT(*) AS count FROM customer GROUP BY first_name, last_name HAVING count >1");
        assertFalse(rst.next());
    }
}
