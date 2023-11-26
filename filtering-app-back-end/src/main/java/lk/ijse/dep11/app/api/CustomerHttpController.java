package lk.ijse.dep11.app.api;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;
import lk.ijse.dep11.app.to.Customer.CustomerTO;
import org.springframework.core.env.Environment;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/customers")
@Validated
@CrossOrigin
public class CustomerHttpController {

    private final HikariDataSource pool;

    public CustomerHttpController(Environment env){
        HikariConfig config = new HikariConfig();
        config.setJdbcUrl(env.getRequiredProperty("spring.datasource.url"));
        config.setUsername(env.getRequiredProperty("spring.datasource.username"));
        config.setPassword(env.getRequiredProperty("spring.datasource.password"));
        config.setDriverClassName(env.getRequiredProperty("spring.datasource.driver-class-name"));
        config.setMaximumPoolSize(env.getRequiredProperty("spring.datasource.hikari.maximum-pool-size", Integer.class));
        pool = new HikariDataSource(config);
    }

    @GetMapping
    public List<CustomerTO> getAllCustomers(){
        return null;
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
        return null;
    }
}
