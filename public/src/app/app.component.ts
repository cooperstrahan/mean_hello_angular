import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'public';
  constructor(private _httpService: HttpService){
    _httpService.getTasks().subscribe(data => console.log("Got our tasks!", data));
    _httpService.getTask('5c8ac89e8d40f8624dbc343c').subscribe(data => console.log("Got our task!", data));
    _httpService.getPokemon().subscribe(data => {
      console.log(data['name']+"'s abilities are: ");
      for (var ability in data['abilities']){
        console.log(data['abilities'][ability]['ability']['name']);
        console.log();
        _httpService.getAbility(data['abilities'][ability]['ability']['url']).subscribe(ability => {
          console.log('The pokemon with this ability are: ')
          for (var pokemon in ability['pokemon']){
            console.log(ability['pokemon'][pokemon]['pokemon']['name']); 
          }
        });
     }
      console.log("Got pokemon!", data);
    });
    // _httpService.deleteTask(id).subscribe(data => console.log("Deleted the task!", data))
  }
}
