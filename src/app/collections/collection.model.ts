import { Design } from '../shared/design.model';

export class Collection {
  public name: string;
  public description: string;
  public imagePath: string;
  public designs: Design[];

  constructor(name: string, desc: string, imagePath: string, designs: Design[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.designs = designs;
  }
}
