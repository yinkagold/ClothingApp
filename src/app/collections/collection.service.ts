import { Injectable } from '@angular/core';

import { Collection } from './collection.model';
import { Design } from '../shared/design.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CollectionService{
    collectionsChanged = new Subject<Collection[]>(); 

    private collections: Collection[] = [
        new Collection(
          'T-Shirt',
            'Repping your Hero in Style',
            '/assets/images/tshirt5.jpg',

            
            [
                
                
            ]
        )
    ];

    constructor(private slService:ShoppingListService){}

    getCollections(){
        return this.collections.slice();
    }

    getCollection(index: number){
        return this.collections[index];
    }

    addDesignToShoppingList(designs: Design[]){
        this.slService.addDesigns(designs);
    }

    addCollection(collection: Collection){
        this.collections.push(collection);
        this.collectionsChanged.next(this.collections.slice())
    }

    updateCollection(index: number, newColection: Collection){
        this.collections[index] = newColection;
        this.collectionsChanged.next(this.collections.slice());
    }

    deleteCollection(index: number){
        this.collections.splice(index, 1);
        this.collectionsChanged.next(this.collections.slice());
    }

}