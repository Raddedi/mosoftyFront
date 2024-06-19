import { Component } from '@angular/core';
import { ProduitService } from 'src/app/services/produit/produit.service';

@Component({
  selector: 'app-gestion-produits',
  templateUrl: './gestion-produits.component.html',
  styleUrls: ['./gestion-produits.component.css']
})
export class GestionProduitsComponent {

  produits:any;
  constructor(private produitService: ProduitService) { }


  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.produitService.GetAll().subscribe((data) => {
      this.produits = data;
      console.log('Produit : ', this.produits);
    },
    (error) => {
      console.error('Error fetching Produits:', error);
    });
  }

  deleteProduit(ProduitId: number): void {
    if (confirm('Are you sure you want to delete this Produit?')) {
      this.produitService.delete(ProduitId).subscribe(
        () => {
          console.log('Order deleted successfully');
          this.getAll();
        },
        (error) => {
          console.error('Error deleting order:', error);
        }
      );
    }
  }
}
