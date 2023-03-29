import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './latout/header/header.component';
import { FooterComponent } from './latout/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HomeListComponent } from './home/home-list/home-list.component';
import { CoverComponent } from './home/cover/cover.component';
import { ClientsSayComponent } from './home/clients-say/clients-say.component';
import { BestCitiesComponent } from './home/best-cities/best-cities.component';
import { WhyChooseComponent } from './home/why-choose/why-choose.component';
import { BlogComponent } from './home/blog/blog.component';
import { PartenaireComponent } from './home/partenaire/partenaire.component';
import { ContactComponent } from './contact/contact.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { MaisonsComponent } from './maisons/maisons.component';
import { DetailMaisonComponent } from './detail-maison/detail-maison.component';
import { DashboardProComponent } from './dashboard-pro/dashboard-pro.component';
import { AjoutMaisonComponent } from './dashboard-pro/ajout-maison/ajout-maison.component';
import { MainComponent } from './dashboard-pro/main/main.component'
import { LoginComponent } from './login/login.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { ActualiteComponent } from './dashboard-admin/actualite/actualite.component';
import { EditProfilComponent } from './dashboard-admin/edit-profil/edit-profil.component';
import { MainAdminComponent } from './dashboard-admin/main-admin/main-admin.component';
import { MessageComponent } from './dashboard-admin/message/message.component';
import { UsersComponent } from './dashboard-admin/users/users.component';
import { CoordonneeComponent } from './dashboard-admin/coordonnee/coordonnee.component';
import { AjoutActComponent } from './dashboard-admin/actualite/ajout-act/ajout-act.component';
import { ModifierActComponent } from './dashboard-admin/actualite/modifier-act/modifier-act.component';
import { ModifierComponent } from './dashboard-admin/coordonnee/modifier/modifier.component';
import { ListeMaisonsComponent } from './dashboard-pro/liste-maisons/liste-maisons.component';
import { BlogDetailComponent } from './home/blog/blog-detail/blog-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MainComponent,
    HomeListComponent,
    CoverComponent,
    ClientsSayComponent,
    BestCitiesComponent,
    WhyChooseComponent,
    BlogComponent,
    PartenaireComponent,
    ContactComponent,
    BlogPageComponent,   
    RegisterComponent,
    MaisonsComponent,
    DetailMaisonComponent,
    DashboardProComponent,
    AjoutMaisonComponent,
    MainComponent,
    LoginComponent,
    DashboardAdminComponent,
    ActualiteComponent,
    EditProfilComponent,
    MainAdminComponent,
    MessageComponent,
    UsersComponent,
    CoordonneeComponent,
    AjoutActComponent,
    ModifierActComponent,
    ModifierComponent,
    ListeMaisonsComponent,
    BlogDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SlickCarouselModule,
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

