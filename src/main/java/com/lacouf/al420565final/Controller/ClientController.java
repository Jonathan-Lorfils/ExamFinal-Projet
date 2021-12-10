package com.lacouf.al420565final.Controller;

import com.lacouf.al420565final.Model.Client;
import com.lacouf.al420565final.Utile.ClientFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/client")
public class ClientController {

    //fetchHomme
    @GetMapping("/fetchHomme")
    public List<Client> fetchHomme(){
        Stream<Client> stream = ClientFactory.getClients().stream();
        return stream.filter(client -> client.getGender() == "M")
                                        .collect(Collectors.toList());
    }

    //fetchFemme
    @GetMapping("/fetchFemme")
    public List<Client> fetchFemme(){
        Stream<Client> stream = ClientFactory.getClients().stream();
        return stream.filter(client -> client.getGender() == "F")
                .collect(Collectors.toList());
    }

    //fetchAll
    @GetMapping("/fetchAll")
    public List<Client> fetchAll(){
        Stream<Client> stream = ClientFactory.getClients().stream();
        return stream.collect(Collectors.toList());
    }
}

