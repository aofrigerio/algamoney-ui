import { LancamentoService } from './lancamento.service';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {InputTextModule, InputText} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {CalendarModule} from 'primeng/calendar';
import { TooltipModule } from 'primeng/tooltip';
import {SelectButtonModule} from 'primeng/selectbutton';
import {DropdownModule} from 'primeng/dropdown';
import { TabViewModule } from 'primeng/tabview';

import { CurrencyMaskModule } from "ng2-currency-mask";

import { LancamentoCadastroComponent } from './lancamento-cadastro/lancamento-cadastro.component';
import { LancamentosPesquisaComponent } from './lancamentos-pesquisa/lancamentos-pesquisa.component';
import { LancamentosGridComponent } from './lancamentos-grid/lancamentos-grid.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    LancamentosGridComponent,
    LancamentosPesquisaComponent,
    LancamentoCadastroComponent
  ],
  imports: [
    BrowserModule,
    TabViewModule,
    AccordionModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    CalendarModule,
    BrowserAnimationsModule,
    SelectButtonModule,
    DropdownModule,
    CurrencyMaskModule,
    FormsModule,

    SharedModule

  ],
  exports: [
    LancamentoCadastroComponent,
    LancamentosPesquisaComponent
  ],
  providers: [

  ]
})
export class LancamentosModule { }
