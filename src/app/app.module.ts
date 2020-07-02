import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CountriesComponent } from './components/countries/countries.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './components/menu/menu.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './components/signup/signup.component';
import { UsersComponent } from './components/users/users.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, MainComponent, HomeComponent, PageNotFoundComponent, CountriesComponent, MenuComponent, AboutComponent, ContactComponent, SignupComponent, UsersComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NgxSpinnerModule, BrowserAnimationsModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
