
package com.sydneymetro.infringements;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;


@Data
@Entity
public class Infringement {

	private @Id @GeneratedValue Long id;
	private int year;
	private String category;
	private long noOfPns;
	private long faceValue;

	private Infringement() {}

	public Infringement(int year,String category,long noOfPns,long faceValue) {
		this.year = year;
		this.category = category;
		this.noOfPns = noOfPns;
		this.faceValue=faceValue;
	}
}
