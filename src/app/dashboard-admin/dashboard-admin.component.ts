import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent {
  countact: number = 0;
  
  constructor(private ds: DataService) { }

  ngOnInit() {
    this.getNombreActualites();
  }

  // Méthode pour récupérer le nombre d'actualités depuis le service DataService
  getNombreActualites() {
    this.ds.countActualite().subscribe((response: any) => {
      this.countact = response.count;
    });
  }
}
