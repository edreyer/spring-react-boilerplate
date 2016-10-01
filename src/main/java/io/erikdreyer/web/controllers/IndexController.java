package io.erikdreyer.web.controllers;


import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * Created by erikdreyer on 10/1/16.
 */
@Controller
public class IndexController {

    @GetMapping("/")
    public String index(Model model) {
        return "index";
    }

}
