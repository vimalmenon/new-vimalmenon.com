package com.vimalmenon.application.service.entitlements;

import com.vimalmenon.application.model.others.ComponentEntitlementModel;
import com.vimalmenon.application.model.others.ReadWriteModel;

import org.springframework.stereotype.Service;

@Service
public class ComponentEntitlementService {

	public ReadWriteModel checkEntitlement(ComponentEntitlementModel entitlementModel) {
        return new ReadWriteModel();
	}
    
}
