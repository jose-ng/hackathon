package com.globant.hackaton.entity.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class StatusResponse {
    private String nombre;
    private String status;
    private String codigo;
}
