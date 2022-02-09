import { Injectable } from '@angular/core';
// import {Observable} from "rxjs";
// import {addDoc, collection, collectionData, deleteDoc, doc, Firestore, updateDoc} from "@angular/fire/firestore";

// import {Skin} from '../shared/models/skin';

@Injectable({
  providedIn: 'root'
})
export class SkinsService {
  // private skinsCollectionName = 'skins_new';
  private skinsCollectionName = 'skins';

  skinsDoc;

  constructor(
      // private firestore: Firestore,
  ) { }

  // getSkins(): Observable<any> {
  //   const skinsRef = collection(this.firestore, this.skinsCollectionName);
  //   return collectionData(skinsRef, { idField: 'id' });
  // }

  // addSkin(skin: Skin): Promise<any> {
  //   const skinsRef = collection(this.firestore, this.skinsCollectionName);
  //   return addDoc(skinsRef, skin);
  // }

  // deleteSkin(id: string): Promise<any> {
  //   const skinsDocRef = doc(this.firestore, `${this.skinsCollectionName}/${id}`);
  //   return deleteDoc(skinsDocRef);
  // }

  // updateSkin(id: string, skin: Skin): Promise<any> {
  //   const skinsDocRef = doc(this.firestore, `${this.skinsCollectionName}/${id}`);
  //   return updateDoc(skinsDocRef, (skin as any));
  // }
}
