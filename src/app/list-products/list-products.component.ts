import { Component, OnInit } from '@angular/core';
import { ProductService } from '../serviceProduct/product.service';  // Assurez-vous du bon chemin vers ProductService
import { Product } from '../entity/Product';  // Assurez-vous du bon chemin vers Product

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  listProducts: Product[] = [];
  selectedLibelle: string | null = null;
  numberOfProducts: number = 0;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.listProducts = this.productService.getAllProducts();
  }

  calculateNumberOfProducts(libelle: string): void {
    this.selectedLibelle = libelle;
    this.numberOfProducts = this.productService.getNbProductsByLibelle(libelle);
  }
}