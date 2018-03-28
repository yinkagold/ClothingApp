import { Component } from '@angular/core';
import { Response } from '@angular/http';

import { DataStorageService } from '../../shared/data-storage.service';
import { AuthService } from '../../auth/auth-guard.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(private dataStorageService: DataStorageService,
              public authService: AuthService) {
}

  onSaveData() {
      this.dataStorageService.storeCollections()
      .subscribe(
      (response: Response) => {
      console.log(response);
      }
  );
}

onFetchData() {
  this.dataStorageService.getCollections();
}

onLogout() {
  this.authService.logout();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
}
