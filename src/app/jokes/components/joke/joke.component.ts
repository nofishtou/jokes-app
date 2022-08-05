import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JokeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
