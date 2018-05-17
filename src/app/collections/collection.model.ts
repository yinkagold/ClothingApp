import { Design } from '../shared/design.model';

export class Collection {
  
  public name: string;
  public description: string;
  public imagePath: string;
  public featured: boolean;
  public designs: Design[];

  constructor( name: string, desc: string, imagePath: string, featured: boolean, designs: Design[]) {
    
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.featured = featured;
    this.designs = designs;
  }
}
