package com.globant.hackaton.entity.dto;

import lombok.Builder;
import lombok.Data;

import java.util.List;
@Data
@Builder
public class HackathonResponse {
    String hora_consulta;
    List<StatusResponse> servicios;
}
