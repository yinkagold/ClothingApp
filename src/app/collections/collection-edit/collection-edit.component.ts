import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { CollectionService } from '../collection.service';


@Component({
  selector: 'app-collection-edit',
  templateUrl: './collection-edit.component.html',
  styleUrls: ['./collection-edit.component.css']
})
export class CollectionEditComponent implements OnInit {
  id: number;
  editMode = false;
  collectionForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private collectionService: CollectionService,
      
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  onSubmit() {
    if (this.editMode) {
      this.collectionService.updateCollection(this.id, this.collectionForm.value);
    } else {
      this.collectionService.addCollection(this.collectionForm.value);
    }
    this.onCancel();

  }

  onAddSpecification() {
    (<FormArray>this.collectionForm.get('designs')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'size': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    );
  }

  onDeleteSpecification(index: number) {
    (<FormArray>this.collectionForm.get('designs')).removeAt(index);
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }
  getControls() {
    return (<FormArray>this. collectionForm.get('designs')).controls;
  }


  private initForm() {
    let collectionName = '';
    let collectionImagePath = '';
    let collectionDescription = '';
    let collectionDesigns = new FormArray([]);

    if (this.editMode) {
      const collection = this.collectionService.getCollection(this.id);
      collectionName = collection.name;
      collectionImagePath = collection.imagePath;
      collectionDescription = collection.description;
      if (collection['designs']) {
        for (let design of collection.designs) {
          collectionDesigns.push(
            new FormGroup({
              'name': new FormControl(design.name, Validators.required),
              'size': new FormControl(design.size, Validators.required),
              'amount': new FormControl(design.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          );
        }
      }
    }

    this.collectionForm = new FormGroup({
      'name': new FormControl(collectionName, Validators.required),
      'imagePath': new FormControl(collectionImagePath, Validators.required),
      'description': new FormControl(collectionDescription, Validators.required),
      'designs': collectionDesigns
    });
  }

}
