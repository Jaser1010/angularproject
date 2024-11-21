import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive  , Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from '../../product-details/product-details.component';

interface Product {
  id:  number;
  name: string;
  imageUrl: string;
  price: number;
  color: string;
  size: string;
  description: string;
}
interface PriceRange {
  label: string;
  min: number;
  max: number;
}
interface ColorOption {
  name: string;
  hex: string; // Color in hexadecimal format
}


@Component({
  selector: 'app-kids-shirts',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule, ProductDetailsComponent],
  templateUrl: './kids-shirts.component.html',
  styleUrl: './kids-shirts.component.css'
})
export class KidsShirtsComponent {

  products: Product[] = [
    { id: 1, name: 'Shirt 1', imageUrl: 'assets/images/kids/kids-shirts/kid-shirts-1.jpeg', price: 25, color: 'Black', size: 'M' ,description: 'A stylish kids shirt.'},
    { id: 2,name: 'Shirt 2', imageUrl: 'assets/images/kids/kids-shirts/kid-shirts-3.jpeg', price: 90, color: 'Blue', size: 'L',description: 'A stylish kids shirt.' },
    { id: 3,name: 'Shirt 3', imageUrl: 'assets/images/kids/kids-shirts/kid-shirts-4.jpeg', price: 150, color: 'Pink', size: 'S',description: 'A stylish kids shirt.' },
    { id: 4,name: 'Shirt 4', imageUrl: 'assets/images/kids/kids-shirts/kid-shirts-5.jpeg', price: 50, color: 'Yellow', size: 'XL',description: 'A stylish kids shirt.' },
    { id: 5,name: 'Shirt 5', imageUrl: 'assets/images/kids/kids-shirts/kid-shirts-6.jpeg', price: 200, color: 'Gray', size: 'M',description: 'A stylish kids shirt.' },
    { id: 6,name: 'Shirt 6', imageUrl: 'assets/images/kids/kids-shirts/kid-shirts-7.jpeg', price: 85, color: 'Black', size: 'L' ,description: 'A stylish kids shirt.'},
    { id: 7,name: 'Shirt 7', imageUrl: 'assets/images/kids/kids-shirts/kid-shirts-8.jpeg', price: 300, color: 'Blue', size: 'XL',description: 'A stylish kids shirt.' },
    { id: 8,name: 'Shirt 8', imageUrl: 'assets/images/kids/kids-shirts/kid-shirts-11.jpeg', price: 35, color: 'Pink', size: 'S',description: 'A stylish kids shirt.' },
    { id: 9,name: 'Shirt 9', imageUrl: 'assets/images/kids/kids-shirts/kid-shirts-12.jpeg', price: 35, color: 'Pink', size: 'S',description: 'A stylish kids shirt.' },
    { id: 10,name: 'Shirt 10', imageUrl: 'assets/images/kids/kids-shirts/kid-shirts-13.jpeg', price: 35, color: 'Pink', size: 'S',description: 'A stylish kids shirt.' },
    { id: 11,name: 'Shirt 11', imageUrl: 'assets/images/kids/kids-shirts/kid-shirts-14.jpeg', price: 35, color: 'Pink', size: 'S',description: 'A stylish kids shirt.' },
    { id: 12,name: 'Shirt 12', imageUrl: 'assets/images/kids/kids-shirts/kid-shirts-15.jpeg', price: 35, color: 'Pink', size: 'S',description: 'A stylish kids shirt.' },
    { id: 13,name: 'Shirt 13', imageUrl: 'assets/images/kids/kids-shirts/kid-shirts-16.jpeg', price: 35, color: 'Pink', size: 'S',description: 'A stylish kids shirt.' },

    ];



  filteredProducts: Product[] = [];
  priceRanges: PriceRange[] = [
    { label: '$0 - $25', min: 0, max: 25 },
    { label: '$26 - $50', min: 26, max: 50 },
    { label: '$51 - $100', min: 51, max: 100 },
    { label: '$101 - $200', min: 101, max: 200 },
  ];

  colors: ColorOption[] = [
    { name: 'Black', hex: '#000000' },
    { name: 'Blue', hex: '#0000FF' },
    { name: 'Pink', hex: '#FF69B4' },
    { name: 'Yellow', hex: '#FFFF00' },
    { name: 'Gray', hex: '#808080' },
  ];

  selectedPriceRanges: PriceRange[] = [];
  selectedColors: string[] = [];
  selectedSizes: string[] = [];

  sizes: string[] = ['S', 'M', 'L', 'XL'];

  ngOnInit(): void {
    this.filteredProducts = this.products; // Initially show all products
  }

  updatePriceRange(): void {
    this.filterProducts(); // Update filters whenever the price range changes
  }
  filterProducts(): void {
    this.filteredProducts = this.products.filter(product => {
      const isPriceMatched = this.selectedPriceRanges.length === 0 ||
        this.selectedPriceRanges.some(range => product.price >= range.min && product.price <= range.max);
      const isColorMatched = this.selectedColors.length === 0 || this.selectedColors.includes(product.color);
      const isSizeMatched = this.selectedSizes.length === 0 || this.selectedSizes.includes(product.size);

      return isPriceMatched && isColorMatched && isSizeMatched;
    });
  }


  togglePrice(range: PriceRange): void {
    const index = this.selectedPriceRanges.indexOf(range);
    if (index > -1) {
      this.selectedPriceRanges.splice(index, 1); // Remove price range filter
    } else {
      this.selectedPriceRanges.push(range); // Add price range filter
    }
    this.filterProducts();
  }

  toggleColor(color: string): void {
    const index = this.selectedColors.indexOf(color);
    if (index > -1) {
      this.selectedColors.splice(index, 1); // Remove color filter
    } else {
      this.selectedColors.push(color); // Add color filter
    }
    this.filterProducts();
  }

  toggleSize(size: string): void {
    const index = this.selectedSizes.indexOf(size);
    if (index > -1) {
      this.selectedSizes.splice(index, 1); // Remove size filter
    } else {
      this.selectedSizes.push(size); // Add size filter
    }
    this.filterProducts();
  }

  constructor(private router: Router) { }
  viewDetails(productId: number): void {
    this.router.navigate([`/product-list`, productId]);
  }
}
