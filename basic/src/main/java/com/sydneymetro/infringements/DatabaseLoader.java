
package com.sydneymetro.infringements;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;


@Component
public class DatabaseLoader implements CommandLineRunner {

	private final InfringementRepository repository;

	@Autowired
	public DatabaseLoader(InfringementRepository repository) {
		this.repository = repository;
	}

	@Override
	public void run(String... strings) throws Exception {
		this.repository.save(new Infringement(2016, "Parking offence", 950,1900));
		this.repository.save(new Infringement(2017, "Parking offence", 800,1600));
		this.repository.save(new Infringement(2018, "Parking offence", 500,1000));
		this.repository.save(new Infringement(2016, "False Information", 900,1800));
		this.repository.save(new Infringement(2017, "False Information", 750,1500));
		this.repository.save(new Infringement(2018, "False Information", 700,1400));
		this.repository.save(new Infringement(2016, "Anti Social", 750, 3000));
		this.repository.save(new Infringement(2017, "Anti Social", 500, 2000));
		this.repository.save(new Infringement(2018, "Anti Social", 600, 2400));
		this.repository.save(new Infringement(2016, "Vehicle Offence", 100, 400));
		this.repository.save(new Infringement(2017, "Vehicle Offence", 150, 600));
		this.repository.save(new Infringement(2018, "Vehicle Offence", 175, 700));
		this.repository.save(new Infringement(2016, "Feet On Seat", 100, 400));
		this.repository.save(new Infringement(2017, "Feet On Seat", 125, 500));
		this.repository.save(new Infringement(2018, "Feet On Seat", 120, 480));
		this.repository.save(new Infringement(2016, "Smoking Offence", 200, 800));
		this.repository.save(new Infringement(2017, "Smoking Offence", 150, 600));
		this.repository.save(new Infringement(2018, "Smoking Offence", 170, 680));
		this.repository.save(new Infringement(2016, "Littering Offence", 150, 600));
		this.repository.save(new Infringement(2017, "Littering Offence", 100, 400));
		this.repository.save(new Infringement(2018, "Littering Offence", 80, 320));
		this.repository.save(new Infringement(2016, "Animal Offence", 80, 320));
		this.repository.save(new Infringement(2017, "Animal Offence", 100, 400));
		this.repository.save(new Infringement(2018, "Animal Offence", 50, 200));
	}
}
// end::code[]