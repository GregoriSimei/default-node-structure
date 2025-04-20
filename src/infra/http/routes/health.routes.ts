import { Router } from "express"
import { IController } from "../protocols/controller"
import { container } from "tsyringe"
import { RouterAdapter } from "../adapters/RouterAdapter"

const livenessController: IController = container.resolve('LivenessController') 
const readinessController: IController = container.resolve('ReadinessController') 

export default (route: Router): void => {
    route.get('/health/liveness', RouterAdapter.adapt(livenessController))
    route.get('/health/readiness', RouterAdapter.adapt(readinessController))
}