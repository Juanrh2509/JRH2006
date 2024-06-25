import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Vehicle } from '../../models/vehicles.model';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-new-vehicle',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './new-vehicle.component.html',
  styleUrl: './new-vehicle.component.css'
})
export class NewVehicleComponent {
  
  constructor(private conexionBaseDatos: HttpClient){

  }
  
  saveVehicle(registro: Vehicle) {

    this.conexionBaseDatos.post('url',registro).subscribe(

    (datos) => {

      console.log(datos)

    }
    );

    console.log(registro)
  
  }

}
