import { Router } from "express";

import  vehicleController  from "../controllers/vehicleController";

class VehiclesRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.get('/', vehicleController.List);
    this.router.get('/:id', vehicleController.getOne);
    this.router.post('/', vehicleController.create);
    this.router.delete('/:id', vehicleController.delete);
    this.router.put('/:id', vehicleController.update);
  }

}
const vehiclesRoutes = new VehiclesRoutes();
export default vehiclesRoutes.router;