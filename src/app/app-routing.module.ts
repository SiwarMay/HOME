import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { ContactComponent } from './contact/contact.component';
import { AjoutMaisonComponent } from './dashboard-pro/ajout-maison/ajout-maison.component';
import { DashboardProComponent } from './dashboard-pro/dashboard-pro.component';
import { DetailMaisonComponent } from './detail-maison/detail-maison.component';
import { BlogComponent } from './home/blog/blog.component';
import { HomeComponent } from './home/home.component';
import { MaisonsComponent } from './maisons/maisons.component';
import { LoginComponent } from './login/login.component';;
import { RegisterComponent } from './register/register.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { EditProfilComponent } from './dashboard-admin/edit-profil/edit-profil.component';
import { MessageComponent } from './dashboard-admin/message/message.component';
import { CoordonneeComponent } from './dashboard-admin/coordonnee/coordonnee.component';
import { ActualiteComponent } from './dashboard-admin/actualite/actualite.component';
import { UsersComponent } from './dashboard-admin/users/users.component';
import { ModifierActComponent } from './dashboard-admin/actualite/modifier-act/modifier-act.component';
import { ModifierComponent } from './dashboard-admin/coordonnee/modifier/modifier.component';
import { ListeMaisonsComponent } from './dashboard-pro/liste-maisons/liste-maisons.component';
import { BlogDetailComponent } from './home/blog/blog-detail/blog-detail.component';


const routes: Routes = [
{path:'',redirectTo:'/home',pathMatch:'full'},
{path: 'home' , component: HomeComponent},
{path: 'contact' , component: ContactComponent},
{path: 'blog' , component: BlogComponent},
{path: 'blog_detail/:id' , component: BlogDetailComponent},

{path: 'blog_page' , component: BlogPageComponent},
{path: 'user/login', component: LoginComponent},
{path: 'user/register', component: RegisterComponent},
{path: 'maisons', component: MaisonsComponent},
{path: 'maison/:id', component: DetailMaisonComponent},
{path: 'dashboard_pro',component:DashboardProComponent},
{path: 'dashboard_pro/listemaison',component:ListeMaisonsComponent},

{path: 'dashboard_pro/ajoutmaison',component:AjoutMaisonComponent},
{path: 'dashboard_admin',component:DashboardAdminComponent},
{path: 'dashboard_admin/edit_profile',component:EditProfilComponent},
{path: 'dashboard_admin/message',component:MessageComponent},
{path: 'dashboard_admin/coordonnee',component:CoordonneeComponent},
{path: 'dashboard_admin/coordonnee/modifier',component:ModifierComponent},

{path: 'dashboard_admin/users',component:UsersComponent},

{path: 'dashboard_admin/actualite',component:ActualiteComponent},
{path: 'dashboard_admin/actualite/modifier_act/:id',component:ModifierActComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
