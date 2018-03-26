import { Design } from '../shared/design.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {
  designsChanged = new Subject<Design[]>();
  startedEditing = new Subject<number>();
  private designs: Design[] = [
   
  ];

  getDesigns() {
    return this.designs.slice();
  }

  getIngredient(index: number) {
    return this.designs[index];
  }

  addDesign(design: Design) {
    this.designs.push(design);
    this.designsChanged.next(this.designs.slice());
  }

  addDesigns(designs: Design[]) {
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }
    this.designs.push(...designs);
    this.designsChanged.next(this.designs.slice());
  }

  updateDesign(index: number, newDesign: Design) {
    this.designs[index] = newDesign;
    this.designsChanged.next(this.designs.slice());
  }

  deleteDesign(index: number) {
    this.designs.splice(index, 1);
    this.designsChanged.next(this.designs.slice());
  }
}
