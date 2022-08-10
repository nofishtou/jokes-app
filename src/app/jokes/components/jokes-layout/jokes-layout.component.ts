import { Component, ChangeDetectionStrategy, OnInit, } from '@angular/core';
import { Observable } from 'rxjs';
import { IJoke } from 'src/app/core/models/joke.interface';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-jokes-layout',
  templateUrl: './jokes-layout.component.html',
  styleUrls: ['./jokes-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JokesLayoutComponent implements OnInit {
  $jokes!: Observable<IJoke[]>;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.$jokes = this.apiService.$jokes;
  }
}
