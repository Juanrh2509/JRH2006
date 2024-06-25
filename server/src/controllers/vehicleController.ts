import { Request, Response } from "express";

import DB from "../database";
import pool from "../database";

class VehicleController {

  public async List (req: Request, res:Response) {
    const vehicles = await pool.query('SELECT * FROM vehicles');
    res.json(vehicles);
  }

  public async getOne (req: Request, res:Response): Promise<any>{
    const { id } = req.params;
    const vehicle = await pool.query('SELECT * FROM vehicles WHERE id = ?', [id]);
    if (vehicle.length > 0) {
      return res.json(vehicle[0]);
    }
    res.status(404).json({menssage: "The vehicle doesn't exists"})

  }
  
  public async create (req:Request, res:Response) {
    await pool.query('INSERT INTO vehicles set ?', [req.body])
    res.json({menssage: 'Vehicle Save'})
  }

  public async delete (req:Request, res:Response): Promise<void>{
    const { id } = req.params;
    await pool.query('DELETE FROM vehicles WHERE id = ?', [id]);
    res.json({menssage: 'Vehicle Deleted'})
  }

  public async update (req:Request, res:Response): Promise<void>{
    const { id } = req.params;
    await pool.query('UPDATE vehicles set ? WHERE id = ?', [req.body, id]);
    res.json({menssage: 'Updating a vehicle' + req.params.id })
  }
}

const vehicleController = new VehicleController();
export default vehicleController;

