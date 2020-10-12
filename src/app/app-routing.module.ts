import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeckOfCardsComponent } from './deck-of-cards/deck-of-cards.component';
import { PokerSlotsComponent } from './poker-slots/poker-slots.component';

const routes: Routes = [
  {
    path: '',
    children: [

      {
        path: 'deckOfCards',
        component: DeckOfCardsComponent,
        data: { animationState: 'One' }
      },
      {
        path: 'pokerSlots',
        component: PokerSlotsComponent,
        data: { animationState: 'One' }
      },
      {
        path: '**',
        redirectTo: 'one'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'one'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
