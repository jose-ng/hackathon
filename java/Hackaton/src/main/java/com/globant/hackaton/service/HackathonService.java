package com.globant.hackaton.service;

import com.globant.hackaton.entity.dto.HackathonResponse;
import com.globant.hackaton.entity.dto.StatusResponse;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.ProtocolException;
import java.net.URL;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service

public class HackathonService {
    //@Value("${app.base.url}")
    private final String baseUrl = "https://hp-api.onrender.com/api";

    private List<Map<String, String>> endpoints;

    public HackathonResponse verifyEndPoints() {

        endpoints = new ArrayList<Map<String, String>>();
        Map<String, String> data = new HashMap<>();
        data.put("strUrl", baseUrl + "/characters");
        data.put("apiName", "All Characters");
        endpoints.add(data);
        data = new HashMap<>();
        data.put("strUrl", baseUrl + "/character/:id");
        data.put("apiName", "Specify Character by Id");
        endpoints.add(data);
        data = new HashMap<>();
        data.put("strUrl", baseUrl + "/characters/students");
        data.put("apiName", "Hogwarts Students");
        endpoints.add(data);
        data = new HashMap<>();
        data.put("strUrl", baseUrl + "/characters/staff");
        data.put("apiName", "Hogwart Staff");
        endpoints.add(data);
        data = new HashMap<>();
        data.put("strUrl", baseUrl + "/characters/house/gryffindor");
        data.put("apiName", "Characters in a House");
        endpoints.add(data);
        data = new HashMap<>();
        data.put("strUrl", baseUrl + "/spells");
        data.put("apiName", "Spells");
        endpoints.add(data);

        List<StatusResponse> statusResponses;
        statusResponses = endpoints.stream()
                .map(this::getApiresponse)
                .toList();


        return HackathonResponse.builder().hora_consulta("2024-02-23").servicios(statusResponses).build();
    }

    private StatusResponse getApiresponse(Map<String, String> dataURl) {
        URL url = null;
        try {
            url = new URL(dataURl.get("strUrl"));
        } catch (MalformedURLException e) {
            throw new RuntimeException(e);
        }
        HttpURLConnection connection = null;
        try {
            connection = (HttpURLConnection) url.openConnection();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        try {
            connection.setRequestMethod("GET");
        } catch (ProtocolException e) {
            throw new RuntimeException(e);
        }
        try {
            connection.connect();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        int code;
        try {
            code = connection.getResponseCode();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        String status = code == 200 ? "ok" : "nok";

        StatusResponse statusResponse = StatusResponse.builder()
                .codigo(Integer.toString(code))
                .nombre(dataURl.get("apiName"))
                .status(status)
                .build();
        return statusResponse;

    }
}
