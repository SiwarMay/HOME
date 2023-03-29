import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard-pro',
  templateUrl: './dashboard-pro.component.html',
  styleUrls: ['./dashboard-pro.component.css']
})
export class DashboardProComponent {
  count: number = 0;
  
  constructor(private ds: DataService) { }

  ngOnInit() {
    this.getNombreMaisons();
  }

  // Méthode pour récupérer le nombre d'actualités depuis le service DataService
  getNombreMaisons() {
    this.ds.countmaisons().subscribe((response: any) => {
      this.count = response.count;
    });
  }
}
