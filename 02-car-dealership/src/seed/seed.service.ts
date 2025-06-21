import { Injectable } from '@nestjs/common';
import { CARS_SEED } from './data/cars.seed';
import { BRANDS_SEED } from './data/brands.seed';
import { CarsService } from '../cars/cars.service';
import { BrandsService } from '../brands/brands.service';


@Injectable()
export class SeedService {

  constructor(
    private readonly carservice: CarsService,
    private readonly brandservice: BrandsService,
  ){}

  populateDB() {

    // CARS_SEED
    this.carservice.fillCarsWithSeedData(CARS_SEED);
    // BRANDS_SEED
    this.brandservice.fillBransWithSeedData(BRANDS_SEED);



    return 'Seed executed successfully';
  }
}
