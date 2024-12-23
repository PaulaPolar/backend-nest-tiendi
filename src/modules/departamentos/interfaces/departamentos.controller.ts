import { Controller, Get } from "@nestjs/common";

@Controller({})
export class DepartamentosController{

    @Get('/obtenerDepartamentos')
    obtenerDepartamentos(){
        return "obteneniendo todos los departamentos"
    }

}

