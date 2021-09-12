import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    MenuComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
