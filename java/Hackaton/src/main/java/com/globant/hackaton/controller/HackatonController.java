package com.globant.hackaton.controller;

import com.globant.hackaton.entity.dto.HackathonResponse;
import com.globant.hackaton.service.HackathonService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@AllArgsConstructor
@RestController
@RequestMapping("/api/v1/hackathon")
public class HackatonController {

    private HackathonService hackathonService;

    @GetMapping("/harryPotterStatus")
    public HackathonResponse consultaStatusApis(){

        return hackathonService.verifyEndPoints();
    }



}
