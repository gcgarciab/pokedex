import { Component, OnInit } from '@angular/core';
import { PokedexService } from './pokedex.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  pokemons!: any[];
  title = 'pokedex';

  constructor (private pokedexService: PokedexService) { }

  ngOnInit() {
    this.pokedexService.getPokemons()
      .subscribe(data => {
        this.pokemons = data?.results;
        console.log(data);
      });
  }
}