import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessageComponent } from './message.component';
import { MessageResolver } from './message-resolver.service';

const routes: Routes = [
  {
    path: ':slug',
    component: MessageComponent,
    resolve: {
      message: MessageResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessageRoutingModule {}
