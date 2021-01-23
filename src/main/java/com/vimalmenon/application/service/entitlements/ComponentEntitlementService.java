package com.vimalmenon.application.service.entitlements;

import com.vimalmenon.application.model.others.ComponentEntitlementModel;
import com.vimalmenon.application.model.others.ReadWriteModel;

import org.springframework.stereotype.Service;

@Service
public class ComponentEntitlementService {

	public ReadWriteModel checkEntitlement(ComponentEntitlementModel entitlementModel) {
		ReadWriteModel readWriteModel = new ReadWriteModel();
		if(entitlementModel.getName().equals("LoginPage")) {
			readWriteModel.setRead(true);
			readWriteModel.setWrite(true);
			return readWriteModel;
		}
        return readWriteModel;
	}
    
}
