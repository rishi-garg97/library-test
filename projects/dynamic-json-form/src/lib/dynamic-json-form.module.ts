import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AngularMaterialModule} from './root/dependent-module/angular-material/angular-material.module';

import {DynamicJsonFormComponent} from './dynamic-json-form.component';
import {FormComponent} from './root/form.component';
import {TextComponent} from './root/form-fields/text/text.component';
import {NumberComponent} from './root/form-fields/number/number.component';
import {DropdownComponent} from './root/form-fields/dropdown/dropdown.component';
import {NormalComponent} from './root/viewer/normal/normal.component';
import {AccordianComponent} from './root/viewer/group/accordian/accordian.component';
import {TabComponent} from './root/viewer/group/tab/tab.component';
import {StepWizardComponent} from './root/viewer/group/step-wizard/step-wizard.component';
import {EmailComponent} from './root/form-fields/email/email.component';
import {PasswordComponent} from './root/form-fields/password/password.component';
import {MeasureComponent} from './root/form-fields/measure/measure.component';


@NgModule({
  declarations: [DynamicJsonFormComponent,
    FormComponent, TextComponent, NumberComponent,
    DropdownComponent, NormalComponent, AccordianComponent,
    TabComponent, StepWizardComponent, EmailComponent, PasswordComponent, MeasureComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule
  ],
  exports: [DynamicJsonFormComponent]
})
export class DynamicJsonFormModule {
  constructor() {
  }
}
