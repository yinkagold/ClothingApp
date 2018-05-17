import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Design } from '../shared/design.model';
@Injectable()
export class ShoppingService {

    shoppingsList: AngularFireList<any>;
    selectedDesign: Design = new Design()

    constructor(private firebase: AngularFireDatabase){}

    getData(){
        this.shoppingsList = this.firebase.list('shopping-list');
        return this.shoppingsList;
    }

    insertDesign(design: Design)
    {
        this.shoppingsList.push({
            name: design.name,
            size: design.size,
            amount: design.amount
        });
    }

    updateDesign(design: Design){
        this.shoppingsList.update(design.$key,{
            name: design.name,
            size: design.size,
            amount: design.amount
        })
    }

    deleteDesign($key: string){
        this.shoppingsList.remove($key);
    }
}