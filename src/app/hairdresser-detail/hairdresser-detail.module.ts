import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../material/material.module";
import { HairdresserDetailComponent } from "./hairdresser-detail/hairdresser-detail.component";
import { HairdresserSliderComponent } from "./hairdresser-slider/hairdresser-slider.component";
import { MdbootstrapModule } from "../mdbootstrap/mdbootstrap.module";
import { TreatmentListComponent } from "./treatment-list/treatment-list.component";

@NgModule({
  declarations: [
    HairdresserDetailComponent,
    HairdresserSliderComponent,
    TreatmentListComponent
  ],
  imports: [CommonModule, MdbootstrapModule, MaterialModule]
})
export class HairdresserDetailModule {}
