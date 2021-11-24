import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get(environment.baseurl+`/user`);
  }
  updateData(id : any,data : any){
    return this.http.put(environment.baseurl+`/user/`+id, data);
  }
  addNewuser(data : any) {        
    console.log(data, "Add New user successfully");
    return this.http.post(environment.baseurl+`/user`, data);
  }

  getDataFromId(id : any){
    return this.http.get(environment.baseurl+`/user/`+id);
  }

  deleteUser(id : any){
    console.log(id, "delete api");
    return this.http.delete(environment.baseurl+`/user/`+id);
  }
}
