import { Component } from '@angular/core';
import { MethodsService } from './methods-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'piperPine';
  check;

  constructor(private methodsService: MethodsService) {
  }

  ngOnInit(): void {
    window.addEventListener('load', () => {this.methodsService.initPositions(), this.methodsService.checkPosition(), this.methodsService.scroll()}, true);
    window.addEventListener('resize', () => {this.methodsService.initPositions()}, true);
    window.addEventListener('scroll', () => {this.methodsService.checkPosition(), this.methodsService.scroll()}, true);
  }

  revertColors = () => {
    this.methodsService.revert();
  }
}
