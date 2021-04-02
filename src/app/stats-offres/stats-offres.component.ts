import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { Statistiques } from '../classes/Statistiques';
import { StatsOffresService } from './stats-ofrres.service';

@Component({
  selector: 'ns-stats-offres',
  templateUrl: './stats-offres.component.html',
  styleUrls: ['./stats-offres.component.css']
})
export class StatsOffresComponent implements OnInit {

  title = "STATISTIQUES";
  public chart: any;
  
  public stats: any[] = [
    { numero: 15, sommeMoney: 50, sommeCredit: 10},
  ];
  
  errorMessage: any;
  
  public  numeros: string[] = null;
  public  sommesMoney: number[] = null;
  public  sommesCredit: number[] = null;

  //-------------------------------------

  constructor(private statsOffresService: StatsOffresService) { }

  ngOnInit(): void {
    
    this.statsOffresService.getClientsFavoris().subscribe({
      next: reponse => {
        this.stats = reponse;
        console.log(this.stats);
      },
      error: err => this.errorMessage = err
    });
  }

  showChart(): void{

    this.numeros = this.stats.map(itemOfStats => itemOfStats.numero.toString());   
    this.sommesMoney = this.stats.map(itemOfStats => itemOfStats.sommeMoney);
    this.sommesCredit = this.stats.map(itemOfStats => itemOfStats.sommeCredit);

    var taille = this.numeros.length;    
    this.numeros[taille] = ''; 
    this.sommesMoney[taille] = 0;
    this.sommesCredit[taille] = 0;

    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: this.numeros,
        datasets: [
          {
            label: 'Montant Total',
            data: this.sommesMoney,
            backgroundColor: 'rgb(247, 9, 100)',
          },
          {
            label: 'Credit Total',
            data: this.sommesCredit,
            backgroundColor: 'rgb(24, 255, 43)',
          }
        ]
      },
      options: {
        scales: {
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Montant (en Ariary)'
            }
          }],
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Numero client'
            }
          }]
        }
      }
    });
  }
}
