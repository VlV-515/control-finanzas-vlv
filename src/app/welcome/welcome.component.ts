import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialCustomModule } from '../shared/material.module';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule, MaterialCustomModule],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {

}
