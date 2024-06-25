import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Vehicle } from '../../models/vehicles.model';
import { VehicleService } from '../../services/vehicle.service';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-vehicle',
  standalone: true,
  imports: [ FormsModule, CommonModule ],
  templateUrl: './vehicle.component.html',
  styleUrl: './vehicle.component.css'
})
export class VehicleComponent {

  vehicles: any = [];

  constructor(private vehicleService: VehicleService){

  }

  ngOnInit(): void {
    

    this.vehicleService.getVehicles().subscribe(
      res => {
        this.vehicles = res;
      },
      err => console.log(err)
      
    );
  }
  








  // this.vehicleService.getVehicles().subscribe(response => {
  //   const { vehicles } = response
  //   this.vehicles = vehicles;
  //     });
  // getVehicles(): void {

  //   this.vehicleService.getVehicles().subscribe(response => {
  //     const { vehicles } = response
  //     this.vehicles = vehicles;
  //   });

  // }

}
