import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Game } from '../../interfaces/interfaces';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit {

  games: Game[] = [];

  constructor( private gameService: GameService ) { }

  ngOnInit(): void {
    this.gameService.getNominees().subscribe( games => this.games = games );
  }

  voteGame( game: Game ) {
    this.gameService.voteGame( game.id ).subscribe( (result: {ok: boolean, message: string }) => {
      if ( result.ok ) {
        Swal.fire({
          title: 'Thank you',
          text: result.message,
          icon: 'success'
        });
      } else {
        Swal.fire({
          title: 'Oops',
          text: result.message,
          icon: 'error'
        });
      }
    });
  }

}
