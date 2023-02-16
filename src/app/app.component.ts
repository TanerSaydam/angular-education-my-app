import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  product: string = "";
  quantity: number = 0;
  isUpdateBtn: boolean = false;
  index: number = 0;

  list:{product: string, quantity:number}[] = [
    {product: "Elma1", quantity: 10},
    {product: "Elma2", quantity: 20},
    {product: "Elma3", quantity: 30},
    {product: "Elma4", quantity: 40},
    {product: "Elma5", quantity: 50},
    {product: "Elma6", quantity: 60},
    {product: "Elma7", quantity: 70},
    {product: "Elma8", quantity: 80},
    {product: "Elma9", quantity: 90},
  ];

  add(){
    this.list.push({product: this.product, quantity: this.quantity});
    this.product = "";
    this.quantity = 0;
    console.log(this.list);
  }

  remove(index:number){
    let _confirm: boolean = confirm(this.list[index].product+  " ürününü silmek istiyor musunuz");
    if(_confirm)
      this.list.splice(index,1);
  }

  get(index:number){
    this.product = this.list[index].product;
    this.quantity = this.list[index].quantity;
    this.isUpdateBtn = true;
    this.index = index;
  }

  cancel(){
    this.isUpdateBtn = false;
    this.product = "";
    this.quantity = 0;
  }

  update(){
    this.list[this.index].product = this.product;
    this.list[this.index].quantity = this.quantity;
    this.cancel();
  }

}