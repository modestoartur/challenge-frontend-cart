import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private storageSub = new Subject<string>();
  constructor() {}
  /**
   * Observavel que sera notificado quando o localStorage for alterado
   * @returns Observable<string> string é a chave alterada
   */
  watchStorage(): Observable<any> {
    return this.storageSub.asObservable();
  }
  /**
   * Adiciona um item no localStorage
   * @param key chave do item
   * @param data Valor a ser armazenado
   */
  setItem(key: string, data: any) {
    localStorage.setItem(key, data);
    this.storageSub.next(key);
  }
  /**
   * Remove um item do localStorage
   * @param key chave do item
   */
  removeItem(key) {
    localStorage.removeItem(key);
    this.storageSub.next(key);
  }
}
