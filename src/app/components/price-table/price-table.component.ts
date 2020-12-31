import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-table',
  templateUrl: './price-table.component.html',
  styleUrls: ['./price-table.component.scss']
})
export class PriceTableComponent implements OnInit {
pricing = [
  {
    id:'1',
    bg:'#4b7633',
    name:'Free',
    price:0,
    specs:[
      {
        id:1,
        title:'specs1',
        extra:'unlimited'
      },
      {
        id:2,
        title:'specs2',
        extra:'unlimited'
      },
      {
        id:3,
        title:'specs3',
       
      },
      {
        id:4,
        title:'specs4',
       
      },
    ]
  },
  {
    id:'2',
    bg:'#48a3da',
    name:'Standerd',
    price:150,
    specs:[
      {
        id:1,
        title:'specs1',
        extra:'unlimited'
      },
      {
        id:2,
        title:'specs2',
        extra:'unlimited'
      },
      {
        id:3,
        title:'specs3',
       
      },
      {
        id:4,
        title:'specs4',
       
      },
    ]
  },
  {
    id:'3',
    bg:'#e03b4c',
    name:'Special',
    price:300,
    specs:[
      {
        id:1,
        title:'specs1',
        extra:'unlimited'
      },
      {
        id:2,
        title:'specs2',
        extra:'unlimited'
      },
      {
        id:3,
        title:'specs3',
       
      },
      {
        id:4,
        title:'specs4',
       
      },
    ]
  },
  {
    id:'4',
    bg:'#fcbb40',
    name:'All in One',
    price:500,
    specs:[
      {
        id:1,
        title:'specs1',
        extra:'unlimited'
      },
      {
        id:2,
        title:'specs2',
        extra:'unlimited'
      },
      {
        id:3,
        title:'specs3',
       
      },
      {
        id:4,
        title:'specs4',
       
      },
    ]
  },
];
extraService = [
  {
    id:'1',
    bg:'#e03b4c',
    name:'Notifications',
    price:0,
    unit:'EGP',
    desc:'Descripe Notifications Add-ons',
    selected:false
  },
  {
    id:'2',
    bg:'#e03b4c',
    name:'Mobile App',
    price:150,
    unit:'EGP',
    desc:'Descripe Mobile App Add-ons',
    selected:false
  },
  {
    id:'3',
    bg:'#e03b4c',
    name:'New Branch',
    price:50,
    unit:'%',
    desc:'Descripe New Branch Add-ons',
    selected:false
  },
  
];
mask = true;

changeMask(item){
  if(item == 3){
    this.mask = false;
  } else {
    this.mask = true;
  }
};
selectedIndex: number;
select(index: number) {
    this.selectedIndex = index;
}
onItemSelect(item,index){
  this.select(index)
  this.changeMask(item)
}

  constructor() { }

  ngOnInit(): void {
  }

}
