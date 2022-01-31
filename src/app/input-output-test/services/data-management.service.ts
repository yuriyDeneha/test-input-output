import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataManagementService {

  private _translationObject: any = {
    title: "Child component",
    description: "Child component loooooong description"
  };

  constructor() { }

  get translationObject() {
    return this._translationObject;
  }
}
