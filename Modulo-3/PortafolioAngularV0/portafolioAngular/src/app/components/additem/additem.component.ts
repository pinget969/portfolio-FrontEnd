import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item.service';
//import { Item } from 'src/app/models/Item';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {
  id:number=0;
  title:string ='';
  comentario:string= '';
  img:string='';
  

  constructor(private itemService:ItemService, private router:Router){ }

  ngOnInit(): void {
  }
  onSubmit(){
    const item = new Item();
    item.id = this.id;
    item.title = this.title;
    item.comentario = this.comentario;
    item.img = this.img;
    item.complete = false;

    //this.itemService.addItem(item);
    this.itemService.addItem(item).subscribe(i =>{
      this.router.navigate(['/']);
    });
    
  }
  
}
