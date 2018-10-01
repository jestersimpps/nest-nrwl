import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ProjectComponent} from "./project/project.component";
import {NewProjectComponent} from "./new-project/new-project.component";
import {DashboardComponent} from "./dashboard/view/dashboard.component";

const routes: Routes = [
  {
    path: 'projects/:id',
    component: ProjectComponent
  },
  {
    path: 'new/project',
    component: NewProjectComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload',
      enableTracing:true
    })
  ],
  exports: [RouterModule]
})
export class DemoRoutingModule {
}
