import { Component, OnInit } from '@angular/core';
import {InterviewQ, interviews} from '../data-model/interview-q';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  constructor(private _interviewQ: InterviewQ) { }

  ngOnInit() {
    // this._interviewQ
  }

}
