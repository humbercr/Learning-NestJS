import { Body, Controller, Delete, Get, MethodNotAllowedException, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto, UpdateCarDto } from './dto';



@Controller('cars')
export class CarsController {

    constructor(
      private readonly carsService: CarsService
    ){}

@Get()
getAllCars() {
return this.carsService.findAll();
  }

@Get(':id')
getCarById( @Param('id', ParseUUIDPipe ) id: string ){
return this.carsService.findOneById( id );
}

@Post()
create(@Body() createCarDto: CreateCarDto) {
  return this.carsService.create( createCarDto );
}

@Patch(':id')
updateCar(
  @Param('id', ParseUUIDPipe) id: string,
  @Body() updateCarDto: UpdateCarDto ) 
  {
    return this.carsService.update ( id, updateCarDto);
 }

 @Delete(':id')
deleteCar( @Param('id', ParseUUIDPipe ) id:string ) {
  return this.carsService.delete( id )
}

}
