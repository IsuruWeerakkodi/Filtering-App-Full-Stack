package lk.ijse.dep11.app.api;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;
import lk.ijse.dep11.app.to.Customer.CustomerTO;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.annotation.PreDestroy;
import javax.validation.ConstraintDeclarationException;
import javax.validation.ConstraintViolationException;
import java.util.LinkedList;
import java.util.List;

@RestController
@RequestMapping("/customers")
@Validated
@CrossOrigin
public class CustomerHttpController {

    private final HikariDataSource pool;

    public CustomerHttpController(Environment env) {
        HikariConfig config = new HikariConfig();
        config.setJdbcUrl(env.getRequiredProperty("spring.datasource.url"));
        config.setUsername(env.getRequiredProperty("spring.datasource.username"));
        config.setPassword(env.getRequiredProperty("spring.datasource.password"));
        config.setDriverClassName(env.getRequiredProperty("spring.datasource.driver-class-name"));
        config.setMaximumPoolSize(env.getRequiredProperty("spring.datasource.hikari.maximum-pool-size", Integer.class));
        pool = new HikariDataSource(config);
    }

    @ExceptionHandler(ConstraintViolationException.class)
    public  String exceptionHandler(ConstraintViolationException exp) {
        ResponseStatusException resExp = new ResponseStatusException(HttpStatus.BAD_REQUEST, exp.getMessage());
        exp.initCause(resExp);
        throw resExp;
    }

    @PreDestroy
    private void destroy(){
        pool.close();
    }

    @GetMapping
    public List<CustomerTO> getAllCustomers(){

    }

    @GetMapping(params = {"sort"})
    public List<CustomerTO> getAllSortedCustomers(){
        return null;
    }

    @GetMapping(params = {"page", "size"})
    public List<CustomerTO> getAllPaginatedCustomers(){
        return null;
    }

    @GetMapping(params = {"page", "size", "sort"})
    public List<CustomerTO> getAllSortedAndPaginatedCustomers(){
        return null;
    }

    public List<CustomerTO> getCustomersList(){
        LinkedList<CustomerTO> customerList = new LinkedList<>();
        while (rst.next)
    }
}
