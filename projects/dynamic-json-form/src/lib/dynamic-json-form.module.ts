import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatRadioModule} from '@angular/material/radio';
import { NgJsonEditorModule } from 'ang-jsoneditor';
import {MatDatepickerModule} from '@angular/material/datepicker';


import {AngularMaterialModule} from './root/dependent-module/angular-material/angular-material.module';


import {DynamicJsonFormComponent} from './dynamic-json-form.component';
import {FormComponent} from './root/form.component';
import {TextComponent} from './root/form-fields/text/text.component';
import {NumberComponent} from './root/form-fields/number/number.component';
import {DropdownComponent} from './root/form-fields/dropdown/dropdown.component';
import {NormalComponent} from './root/viewer/normal/normal.component';
import {AccordianComponent} from './root/viewer/group/accordian/accordian.component';
import {TabComponent} from './root/viewer/group/tab/tab.component';
import {EmailComponent} from './root/form-fields/email/email.component';
import {PasswordComponent} from './root/form-fields/password/password.component';
import {MeasureComponent} from './root/form-fields/measure/measure.component';
import { GroupComponent } from './root/viewer/group/group.component';
import { StepperComponent } from './root/viewer/group/stepper/stepper.component';
import { ModelSchemaComponent } from './json-editor/model-schema/model-schema.component';
import { UiSchemaComponent } from './json-editor/ui-schema/ui-schema.component';
import { EditorComponent } from './json-editor/editor.component';
import { ErrorSchemaComponent } from './json-editor/error-schema/error-schema.component';
import { RadioComponent } from './root/form-fields/radio/radio.component';
import { DateComponent } from './root/form-fields/date/date.component';


@NgModule({
  declarations: [
    DynamicJsonFormComponent,
    FormComponent,
    TextComponent,
    NumberComponent,
    DropdownComponent,
    NormalComponent,
    AccordianComponent,
    TabComponent,
    EmailComponent,
    PasswordComponent,
    MeasureComponent,
    GroupComponent,
    StepperComponent,
    ModelSchemaComponent,
    UiSchemaComponent,
    EditorComponent,
    ErrorSchemaComponent,
    RadioComponent,
    DateComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    MatTabsModule,
    MatExpansionModule,
    NgJsonEditorModule,
    MatRadioModule,
    MatDatepickerModule
  ],
  exports: [FormComponent, EditorComponent]
})
export class DynamicJsonFormModule {
  constructor() {
  }
}
