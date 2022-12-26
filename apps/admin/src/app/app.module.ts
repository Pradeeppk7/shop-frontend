import { NgModule } from '@angular/core';
import { CategoriesService, ProductsService } from '@deepbits/products';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { DasboardComponent } from './pages/dasboard/dasboard.component';
import { ShellComponent } from './shared/shell/shell.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { CategoriesListComponent } from './categories/categories-list/categories-list.component';
import { ProductListComponent } from './pages/products/product-list/product-list.component';
import { ProductFormComponent } from './pages/products/product-form/product-form.component';
import { CategoriesFormComponent } from './categories/categories-form/categories-form.component';
//UI
import {InputNumberModule} from 'primeng/inputnumber';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ColorPickerModule } from 'primeng/colorpicker';
import { InputTextareaModule } from 'primeng/inputtextarea';
import {InputSwitchModule} from 'primeng/inputswitch';

const UX_MODULE = [
  CardModule,
  ToolbarModule,
  ButtonModule,
  InputTextModule,
  TableModule,
  ToastModule,
  ColorPickerModule,
  ConfirmDialogModule,
  InputNumberModule,
  InputTextareaModule,
  InputSwitchModule
];

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    DasboardComponent,
    ShellComponent,
    SidebarComponent,
    CategoriesListComponent,
    CategoriesFormComponent,
    ProductListComponent,
    ProductFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    ...UX_MODULE,
  ],
  providers: [CategoriesService, MessageService, ConfirmationService, ProductsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
