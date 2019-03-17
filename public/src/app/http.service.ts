import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) { 
    // this.getTasks();
    // this.getTask('5c8ac89e8d40f8624dbc343c');
    // this.deleteTask('');
  }
  getPokemon(){
    return this._http.get('https://pokeapi.co/api/v2/pokemon/4/');
  }
  getTasks(){
    return this._http.get('/tasks');
  }
  getTask(id: String){
    return this._http.get('/tasks/'+id);
  }
  deleteTask(id: string){
    return this._http.delete('/tasks'+id);
  }
  
}

