import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CountriesComponent } from './components/countries/countries.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { SignupComponent } from './components/signup/signup.component';
import { UsersComponent } from './components/users/users.component';
import { UpdateComponent } from './components/update/update.component';

const routes: Routes = [
    {path: "home", component: HomeComponent },
    {path: "countries", component: CountriesComponent },
    {path: "about", component: AboutComponent },
    {path: "contact", component: ContactComponent },
    {path: "signup", component: SignupComponent },
    {path: "users", component: UsersComponent },
    {path: "products/update/:userID", component: UpdateComponent },
    {path: "admin", loadChildren: () => import("../app/components/admin/admin.module").then(m => m.AdminModule)},
    {path: "", redirectTo: "/home", pathMatch: "full" },
    {path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
