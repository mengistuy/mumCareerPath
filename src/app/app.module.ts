import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import {RouterModule, Route} from '@angular/router';
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatDatepicker,
  MatNativeDateModule,
  MatRadioModule,
  MatSelectModule,
  MatOptionModule,
  MatSidenavModule,
  MatListModule,
  MatSlideToggleModule,
  ErrorStateMatcher,
  ShowOnDirtyErrorStateMatcher
} from '@angular/material';
// import {MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule} from '@angular/material';
import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { QuestionDetailComponent } from './question-detail/question-detail.component';
import { QuestionEditComponent } from './question-edit/question-edit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {IqserviceService} from './iqservice.service';
import {LayoutModule } from '@angular/cdk/layout';
import {QstService} from './qst.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Http, HttpModule} from '@angular/http';
import {InterviewQ, Comment} from './data-model/interview-q';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    QuestionDetailComponent,
    QuestionEditComponent,
    PageNotFoundComponent
   // InterviewQComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  // MatDatepickerModule,
  // MatDatepicker,
  MatNativeDateModule,
  MatRadioModule,
  MatSelectModule,
  MatOptionModule,
  MatSidenavModule,
  MatListModule,
  MatSlideToggleModule,
  BrowserAnimationsModule,
  HttpModule
  // ErrorStateMatcher
  // ShowOnDirtyErrorStateMatcher
  ],
  exports: [
    AppComponent,
    QuestionComponent,
    QuestionDetailComponent,
    QuestionEditComponent,
    PageNotFoundComponent
  ],
  providers: [IqserviceService, QstService, InterviewQ],
  bootstrap: [AppComponent]
})
export class AppModule { }
