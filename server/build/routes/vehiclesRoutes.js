"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const vehicleController_1 = __importDefault(require("../controllers/vehicleController"));
class VehiclesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', vehicleController_1.default.List);
        this.router.get('/:id', vehicleController_1.default.getOne);
        this.router.post('/', vehicleController_1.default.create);
        this.router.delete('/:id', vehicleController_1.default.delete);
        this.router.put('/:id', vehicleController_1.default.update);
    }
}
const vehiclesRoutes = new VehiclesRoutes();
exports.default = vehiclesRoutes.router;
