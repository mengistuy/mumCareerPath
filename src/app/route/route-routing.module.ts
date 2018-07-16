import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionComponent } from '../question/question.component';
import { QuestionDetailComponent } from '../question-detail/question-detail.component';
import { QuestionEditComponent } from '../question-edit/question-edit.component';
import {PageNotFoundComponent} from '../page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: QuestionDetailComponent },
  { path: 'question', component: QuestionComponent },
  { path: 'question/detail/:id', component: QuestionDetailComponent },
  { path: 'question/:id', component: QuestionEditComponent },
  { path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
