import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-jokes-layout',
  templateUrl: './jokes-layout.component.html',
  styleUrls: ['./jokes-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JokesLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
