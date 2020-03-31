import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductsComponent implements OnInit {

  products: any;
  cartProducts: any;

  constructor(private router: Router) { }

  ngOnInit() {
    let data = localStorage.getItem('cart');
    if(data !== null)
    {
      this.cartProducts = JSON.parse(data);
    } else {
      this.cartProducts = [];
    }
    this.cartProducts = JSON.parse(data);

    this.products = [
      {
        id: 1,
        title: "Americano",
        description: "Americano",
        img: "assets/ameri.png",
        price: 50,
      },
      {
        id:2,
        title: "Espresso Machine",
        description: "Italian Espresso Machine",
        img:"assets/cofem.png",
        price:200
      },
      {
        id:3,
        title: "Coffee",
        description: "Cup of coffee",
        img:"assets/coffe.png",
        price:45
      },
      {
        id:4,
        title: "Latte",
        description: " Latte",
        img:"assets/latte.png",
        price:60
      },
      {
        id:5,
        title: "Cappuccino",
        description: " Cappuccino",
        img:"assets/cappicanno.jpg",
        price:80
      },
      {
        id:6,
        title: "Milk",
        description: "Pint of milk",
        img:"assets/milk.jpg",
        price:35
      },
      {
        id:7,
        title: "HOT-Coffe",
        description: "Fresh Coffee-Bean",
        img:"assets/bean.png",
        price:45
      },
      {
        id:8,
        title: "Hot-Chocolate",
        description: "Hot Cocoa",
        img:"assets/hotcho.png",
        price:30
      },
      {
        id:9,
        title: "Macchiato",
        description: "macchiato",
        img:"assets/mach.jpg",
        price:100
      },
      {
        id:10,
        title: "Cold-coffee",
        description: " Cold-coffee",
        img:"assets/coldc.png",
        price:70
      },
      {
        id:11,
        title: "Cookies",
        description: "Chocolate,Oatsmeal cookie",
        img:"assets/cookie.png",
        price:20
      },
      {
        id:12,
        title: "Browine",
        description:'Hot-Browine',
        img:"assets/bbbbb.jpg",
        price:50
      },
      {
        id:13,
        title: "Cupcake",
        description: "icecreame Cupcake",
        img:"assets/cupcake.jpg",
        price:85
      },
      {
        id:14,
        title: "Cool-blue",
        description: "Refreshing Dring",
        img:"assets/cool.png",
        price:60
      },
      {
        id:15,
        title: "Mint mozito",
        description: "Refreshint mint Drink",
        img:"assets/mojito.png",
        price:60
      }
    ];
  }

  addToCart(index){
    let product = this.products[index];
    let cartData = [];
    let data = localStorage.getItem('cart');
    if (data !== null)
    // tslint:disable-next-line:one-line
    {
      cartData = JSON.parse(data);
    }
    cartData.push(product);
    this.updateCartData(cartData);
    localStorage.setItem('cart', JSON.stringify(cartData));
    this.products[index].isAdded = true;
  }
  updateCartData(cartData) {
    this.cartProducts = cartData;
  }
  goToCart() {
    this.router.navigate(['/cart']);
  }
}
