import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-advices',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './advices.component.html',
  styleUrl: './advices.component.scss'
})
export class AdvicesComponent {

}
