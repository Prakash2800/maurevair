import {animate, state, style, transition, trigger} from "@angular/animations";

export const hideShow = trigger('hideShow', [
  state(
    'opened',
    style({
      transform: 'scale(1)',
      opacity: 1,
    })
  ),
  state(
    'closed',
    style({
      transform: 'scale(0.5)',
      opacity: 0,
    })
  ),

  transition('opened => closed', [animate('200ms ease-out')]),

  transition('closed => opened', [animate('200ms ease-in')]),
]);
