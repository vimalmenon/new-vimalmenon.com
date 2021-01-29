package com.vimalmenon.application.data.contents;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "content_data_mapping")
public class ContentDataMapping {
    @Id
	private int id;
}
