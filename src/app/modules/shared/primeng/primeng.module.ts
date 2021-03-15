import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {PasswordModule} from 'primeng/password';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import {MenubarModule} from 'primeng/menubar';
import {MenuModule} from 'primeng/menu';
import {TableModule} from 'primeng/table';
import {CalendarModule} from 'primeng/calendar';
import {InputMaskModule} from 'primeng/inputmask';
import {DropdownModule} from 'primeng/dropdown';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    PasswordModule,
    ToastModule,
    MenuModule,
    MenubarModule,
    TableModule,
    CalendarModule,
    InputMaskModule,
    DropdownModule
  ],
  exports:[
    InputTextModule,
    ButtonModule,
    PasswordModule,
    ToastModule,
    MenuModule,
    MenubarModule,
    TableModule,
    CalendarModule,
    InputMaskModule,
    DropdownModule
  ],
  providers:[MessageService]
})
export class PrimengModule { }
