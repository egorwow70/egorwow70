import { NgModule } from '@angular/core';
import { NotFoundComponent } from './not-found.component';
import { NotFoundRoutingModule } from './not-found-roating.module';

@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [NotFoundRoutingModule],
  providers: [],
  bootstrap: [NotFoundComponent]
})
export class NotFoundModule { }