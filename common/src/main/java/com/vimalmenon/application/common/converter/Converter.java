package com.vimalmenon.application.common.converter;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;


public class Converter<T> {

    final Class<T> typeParameterClass;

    public Converter(Class<T> typeParameterClass) {
        this.typeParameterClass = typeParameterClass;
    }

    public T convertToJson(String value) {
        ObjectMapper objectMapper = new ObjectMapper();
        
        try {
            return objectMapper.readValue(value, typeParameterClass);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
       
        return null;
    }
}
