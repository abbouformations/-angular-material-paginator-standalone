import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EmpListComponent } from './emp/emp-list/emp-list.component';
import { EmpCreateComponent } from './emp/emp-create/emp-create.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { EmpDetailComponent } from './emp/emp-detail/emp-detail.component';
import { EmpEditComponent } from './emp/emp-edit/emp-edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: AuthComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'employees', component: EmpListComponent, outlet: 'contenu' },
  { path: 'create', component: EmpCreateComponent, outlet: 'contenu' },
  { path: 'welcome', component: WelcomeComponent, outlet: 'contenu' },
  { path: 'logout', component: AuthComponent },
  { path: 'employees/:id', component: EmpEditComponent, outlet: 'contenu' },
  { path: 'delete/:id', component: EmpListComponent, outlet: 'contenu' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
