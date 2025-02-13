import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { AboutComponent } from "./about/about.component";

import { WelcomeComponent } from "./welcome/welcome.component";

const routes: Route[] = [
  {
    path: "",
    component: WelcomeComponent,
  },
  {
    path: "about",
    // component: AboutComponent, // ! This will work for eager loading for both case (standalone: true | false). But if we want to use lazy loading in the standalone component then we need to use the loadComponent instead of loadChildren.
    loadComponent: () =>
      import("./about/about.component").then((comp) => comp.AboutComponent),
  },
  {
    path: "dashboard",
    loadChildren: () =>
      import("./dashboard/routes").then((routes) => routes.DASHBOARD_ROUTE),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
