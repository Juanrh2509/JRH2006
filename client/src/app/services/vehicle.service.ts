import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/enviroment';
import { Vehicle } from '../models/vehicles.model';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  apiUrl = environment.apiUrl

  constructor( public http: HttpClient) { }

  getVehicles(){
    return this.http.get(`${this.apiUrl}/vehicle`);
  }

  getVehicle(id: string){
    return this.http.get(`${this.apiUrl}/vehicle/${id}`);
  }


  deleteVehicle(id: string){
    return this.http.delete(`${this.apiUrl}/vehicle/${id}`);
  }

  saveVehicle(vehicle: Vehicle){
    return this.http.post(`${this.apiUrl}/vehicle`, vehicle);
  }
  
  updateVehicle(id: string, updatedVehicle: any){
    return this.http.delete(`${this.apiUrl}/vehicle/${id}`, updatedVehicle);
  }
}
