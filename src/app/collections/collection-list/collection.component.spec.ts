import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { CollectionListComponent }  from './collection-list.component';
import { Design } from '../../shared/design.model';

describe('CollectionListComponent', () => {
    let component: CollectionListComponent;
    let fixture: ComponentFixture<CollectionListComponent>;
  
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ CollectionListComponent ]
      })
      .compileComponents();
    }));
  
    beforeEach(() => {
      fixture = TestBed.createComponent(CollectionListComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
  
  
  });