import { Mapper } from "src/app/modules/shared/base/mapper";
import { CardModel } from "../card.model";
import { DatosPersonalesComponent } from "../../components/cards/datos-personales/datos-personales.component";
import { CurriculumComponent } from "../../components/cards/curriculum/curriculum.component";
import { EstudiosComponent } from "../../components/cards/estudios/estudios.component";
import { ContratoComponent } from "../../components/cards/contrato/contrato.component";
import { HorarioComponent } from "../../components/cards/horario/horario.component";
import { DocumentosComponent } from "../../components/cards/documentos/documentos.component";
import { NominaComponent } from "../../components/cards/nomina/nomina.component";
import { ActasComponent } from "../../components/cards/actas/actas.component";
import { TrayectoriaComponent } from "../../components/cards/trayectoria/trayectoria.component";
import { CursosComponent } from "../../components/cards/cursos/cursos.component";
import { TestComponent } from "../../components/cards/test/test.component";

export class CardMapper extends Mapper<string, CardModel> {
    override mapFrom(param: string): CardModel {
        //console.log("Map from: " + param);

        switch(param) {
            case "Datos personales": {
                return {
                    component: DatosPersonalesComponent,
                    x: 2,
                    y: 1
                }
            }
            case "Curriculum": {
                return {
                    component: CurriculumComponent,
                    x: 1,
                    y: 3
                }
            }
            case "Estudios": {
                return {
                    component: EstudiosComponent,
                    x: 2,
                    y: 3
                }
            }
            case "Contrato": {
                return {
                    component: ContratoComponent,
                    x: 1,
                    y: 2
                }
            }
            case "Horario": {
                return {
                    component: HorarioComponent,
                    x: 4,
                    y: 1
                }
            }
            case "Documentos": {
                return {
                    component: DocumentosComponent,
                    x: 2,
                    y: 4
                }
            }
            case "Nomina": {
                return {
                    component: NominaComponent,
                    x: 1,
                    y: 1
                }
            }
            case "Actas": {
                return {
                    component: ActasComponent,
                    x: 2,
                    y: 1
                }
            }
            case "Trayectoria": {
                return {
                    component: TrayectoriaComponent,
                    x: 4,
                    y: 2
                }
            }
            case "Cursos": {
                return {
                    component: CursosComponent,
                    x: 3,
                    y: 1
                }
            }
            //Test
            default: {
                return {
                    component: TestComponent,
                    x: 1,
                    y: 1
                }
            }
          }
    }

    override mapTo(param: CardModel): string {
        throw new Error("Method not implemented.");
    }
    
}