"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class VehicleController {
    List(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const vehicles = yield database_1.default.query('SELECT * FROM vehicles');
            res.json(vehicles);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const vehicle = yield database_1.default.query('SELECT * FROM vehicles WHERE id = ?', [id]);
            if (vehicle.length > 0) {
                return res.json(vehicle[0]);
            }
            res.status(404).json({ menssage: "The vehicle doesn't exists" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO vehicles set ?', [req.body]);
            res.json({ menssage: 'Vehicle Save' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM vehicles WHERE id = ?', [id]);
            res.json({ menssage: 'Vehicle Deleted' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE vehicles set ? WHERE id = ?', [req.body, id]);
            res.json({ menssage: 'Updating a vehicle' + req.params.id });
        });
    }
}
const vehicleController = new VehicleController();
exports.default = vehicleController;
