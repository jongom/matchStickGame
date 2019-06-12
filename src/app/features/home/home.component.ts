import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, query, stagger, style, keyframes } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('zoom', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), { optional: true }),

        query(':enter', stagger('200ms', [
          animate('.3s ease-in', keyframes([
            style({ opacity: 0, transform: 'scale3d(0.4, 0.4, 0.4)', offset: 0 }),
            style({ opacity: .5, transform: 'scale3d(0.8, 0.8, 0.8)', offset: 0.3 }),
            style({ opacity: 1, transform: 'scale3d(1, 1, 1)', offset: 1.0 }),
          ]))]), { optional: true })
      ])
    ])
  ]
})
export class HomeComponent {

  menuItems: any[] = [
    {
      title: 'Play game',
      icon: 'videogame_asset',
      routerLink: '/game/',
    },
    {
      title: 'Settings',
      icon: 'settings',
      routerLink: '/settings/',
    },
    {
      title: 'Exit',
      icon: 'exit_to_app',
      routerLink: '/exit/',
    },
  ];
  constructor() { }

}
