package com.vimalmenon.application.service.entitlements;

import com.vimalmenon.appliction.model.others.ReadWriteModel;
import com.vimalmenon.appliction.model.request.EntitlementRequestModel;

import org.springframework.stereotype.Service;

@Service
public class ComponentEntitlementService {

	public ReadWriteModel getEntitlements(EntitlementRequestModel data) {
        ReadWriteModel model = new ReadWriteModel();
        if (data.getName().equals("LoginPage")) {
            model.setRead(true);
            model.setWrite(true);
        }
        return null;
	}

}
