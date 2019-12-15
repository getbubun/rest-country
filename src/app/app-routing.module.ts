import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AllCountriesComponent } from "./country/all-countries/all-countries.component";
import { SingleCountryComponent } from "./country/single-country/single-country.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "*", component: HomeComponent },
  { path: "**", component: HomeComponent },
  {
    path: "allCountry/:firstLevel/:secondLevel/:thirdLevel",
    component: AllCountriesComponent
  },
  { path: "country/:countryName", component: SingleCountryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
