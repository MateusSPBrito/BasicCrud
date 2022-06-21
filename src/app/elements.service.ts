import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ElementModel } from './elements/element.model';

@Injectable({
  providedIn: 'root'
})
export class ElementsService {

  constructor(private http: HttpClient) { }

  listElements(): Observable<any> {
    return this.http.get(environment.url + "elements");
  }

  listElementId(id:number):Observable<any>{
    return this.http.get(environment.url + "elements/"+id);
  }

  creatElement(element:ElementModel):Observable<any>{
    return this.http.post(environment.url + "elements/",element);
  }

  updateElement(id:number, element:ElementModel):Observable<any>{
    return this.http.put(environment.url + "elements/"+id,element)
  }

  deleteElement(id:number){
    return this.http.delete(environment.url + "elements/"+id)
  }
}
