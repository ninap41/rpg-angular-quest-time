
import { trigger, animate, style, group, query, transition, state, stagger, keyframes } from '@angular/animations';

export const Animations = {
    popoverTrigger:  trigger('popOverState', [
        state('show',
        style({opacity: 1})
      ),
        state('hide', style({
          opacity: 0
        })),
        transition('show => hide', animate('1000ms ease-out')),
        transition('hide => show', animate('1000ms ease-in'))
    ]),
    photoState:  trigger('photoState', [
      state('move',
      style({transform: 'translateX(-100%) tranlsateY(50px'})
    ),
      state('enlarge',
      style({transform: 'scale(1.5)'
      })),
      state('spin',
      style({ transform: 'rotateY(180deg) rotateZ(90deg)',
      })),
      transition('* => move', animate('2000ms', keyframes([
        style({ transform: 'translateX(0) rotateY(0)', offset: 0 }),
        style({ transform: 'translateX(50%) rotateY(90deg)', offset: 0.33 }),
        style({ transform: 'translateY(-75%) rotateY(180deg)', offset: 0.66 }),
        style({ transform: 'translateX(-100%)', offset: 1 }),
      ])
    )),
      transition('* => *', animate('500ms ease-out')),
      transition('move => *', animate('500ms ease-out')),
  ]),
  healthState:  trigger('healthState', [
    state('inactive',
    style({transform: 'translateX(-100%) tranlsateY(50px'})
  ),
    state('active',
    style({transform: 'scale(1.5)'
    })),
    transition('* => *', animate('500ms ease-out')),
]),
  photosAnimation: trigger('photosAnimation', [
    transition('* => *', [
      query('img', style({ transform: 'translateX(-100%)'})),
      query('img',
      stagger('8000ms', [
        animate('10000ms', style({ transform: 'translateX(0)'}))
      ]))
    ])
  ])
};



export const routerTransition = trigger('routerTransition', [
  transition('* <=> *', [
    /* order */
    /* 1 */ query(':enter, :leave', style({ position: 'fixed'})
      , { optional: true }),
    /* 2 */ group([  // block executes in parallel
      query(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('6s ease-in-out', style({ transform: 'translateX(0%)' }))
      ], { optional: true }),
      query(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('6s ease-in-out', style({ transform: 'translateX(-100%)' }))
      ], { optional: true }),
    ])
  ])
]);



export const healthTransition = trigger('healthTransition', [
  transition('* => *', [
    query(
      ':enter',
      [style({ opacity: 0 })],
      { optional: true }
    ),
    query(
      ':leave',
      [style({ opacity: 1 }), animate('1s', style({ opacity: 0 }))],
      { optional: true }
    ),
    query(
      ':enter',
      [style({ opacity: 0 }), animate('1s', style({ opacity: 1 }))],
      { optional: true }
    )
  ])
]);

  export const routerTransition2 = trigger('routerTransition2', [
    transition('* <=> *', [
      /* order */
      /* 1 */ query(':enter, :leave', style({ position: 'fixed', opacity: 0, offset: 0 })
       ),
      /* 2 */ group([  // block executes in parallel
        query(':enter', [
        style({}),
          animate('3s  ease-out', style({ opacity: 1, position: 'fixed', transform: 'translateX(0)'}))
        ], { optional: true }),
        query(':leave', [
          animate('1s  ease-in', style({ opacity: 0, position: 'fixed', transform: 'translateX(0)' }))
        ], { optional: true }),
      ])
    ])
  ]);


  export const gameStart = trigger('gameStart', [
    transition('* => *', [
      query(
        ':enter',
        [style({ opacity: 0 })],
        { optional: true }
      ),
      query(
        ':leave',
        [style({ opacity: 1 }), animate('1s', style({ opacity: 0 }))],
        { optional: true }
      ),
      query(
        ':enter',
        [style({ opacity: 0 }), animate('1s', style({ opacity: 1 }))],
        { optional: true }
      )
    ])
  ]);


  export const fadeAnimation = trigger('fadeAnimation', [
    transition('* => *', [
      query(
        ':enter',
        [style({ opacity: 0 })],
        { optional: true }
      ),
      query(
        ':leave',
        [style({ opacity: 1 }), animate('1s', style({ opacity: 0 }))],
        { optional: true }
      ),
      query(
        ':enter',
        [style({ opacity: 0 }), animate('1s', style({ opacity: 1 }))],
        { optional: true }
      )
    ])
  ]);
