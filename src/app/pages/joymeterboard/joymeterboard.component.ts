import { Component } from '@angular/core';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-joymeterboard',
  templateUrl: './joymeterboard.component.html',
  styleUrls: ['./joymeterboard.component.scss'],
})
export class JoymeterboardComponent {
  isDropdownOpen: boolean = false;
  isDropdownOpen2: boolean = false;
  model: NgbDateStruct;
  /*
   * @ Type vn = Very Negative 
   * @ Type n = Negative
   * @ Type p = Positive 
   * @ Type vp = Very Positive 
   * @ Type c = Custom 
   */
  feedbackRecords = [
    {
      name: 'TIRED',
      type: 'n',
      count: '90',
    },
    {
      name: 'DISAPPOINTED',
      type: 'n',
      count: '90',
    },
    {
      name: 'DOWN',
      type: 'n',
      count: '90',
    },
    {
      name: 'POSITIVE',
      type: 'p',
      count: '90',
    },
    {
      name: 'CHARMED',
      type: 'p',
      count: '90',
    },
    {
      name: 'BELONGED',
      type: 'p',
      count: '90',
    },
    {
      name: 'ACCOMPLISHED',
      type: 'vp',
      count: '90',
    },
    {
      name: 'VERY HAPPY',
      type: 'vp',
      count: '90',
    },
    {
      name: 'THRILLED',
      type: 'vp',
      count: '90',
    },
    {
      name: 'CUSTOM',
      type: 'c',
      count: '90',
    },
  ];

  allRecords = [
    {
      "id": 1,
      "type": "n",
      "feedback": "Disappointed",
      "name": "Patty Kerry",
      "team": "Team A",
      "desc": "I have done some work for somebody, but he is not satisfied. I still want the feedback from him, and am trying to convince him to give me some feedback (likely bad); I honestly wouldn’t like to get negative feedback."
    },
    {
      "id": 2,
      "type": "vp",
      "feedback": "Very Happy",
      "name": "Anonymous",
      "team": "anon.",
      "desc": "Thank you for always being my sides during all the interviews and decision makings in the last sprint. Without you if wouldn't be that easy for me to manage everything. Looking forward for more tasks together :D "
    },
    {
      "id": 3,
      "type": "p",
      "feedback": "Positive",
      "name": "Patty Kerry",
      "team": "Team A",
      "desc": "I think that the word “kind” can be of help here. Kind comments… kind reviews etc., will be somewhat more subtle and may hint at the desired action on their part ;)"
    },
    {
      "id": 4,
      "type": "vp",
      "feedback": "Very Happ",
      "name": "Patty Kerry",
      "team": "Team A",
      "desc": "Thank you for always being my sides during all the interviews and decision makings in the last sprint. Without you if wouldn't be that easy for me to manage everything. Looking forward for more tasks together :D"
    },
    {
      "id": 5,
      "type": "p",
      "feedback": "THAT WAS AWESOME!",
      "name": "Patty Kerry",
      "team": "Team A",
      "desc": "I think that the word “kind” can be of help here. Kind comments… kind reviews etc., will be somewhat more subtle and may hint at the desired action on their part ;)"
    },
    {
      "id": 6,
      "type": "p",
      "feedback": "could be better",
      "name": "Patty Kerry",
      "team": "Team A",
      "desc": "I think that the word “kind” can be of help here. Kind comments… kind reviews etc., will be somewhat more subtle and may hint at the desired action on their part ;)"
    },
    {
      "id": 7,
      "type": "p",
      "feedback": "Positive",
      "name": "Patty Kerry",
      "team": "Team A",
      "desc": "I think that the word “kind” can be of help here. Kind comments… kind reviews etc., will be somewhat more subtle and may hint at the desired action on their part ;)"
    },
    {
      "id": 8,
      "type": "vp",
      "feedback": "Very Happy",
      "name": "Patty Kerry",
      "team": "Team A",
      "desc": "Thank you for always being my sides during all the interviews and decision makings in the last sprint. Without you if wouldn't be that easy for me to manage everything. Looking forward for more tasks together :D"
    },
    {
      "id": 9,
      "type": "vp",
      "feedback": "Very Happy",
      "name": "Patty Kerry",
      "team": "Team A",
      "desc": "Thank you for always being my sides during all the interviews and decision makings in the last sprint. Without you if wouldn't be that easy for me to manage everything. Looking forward for more tasks together :D"
    },
    {
      "id": 10,
      "type": "n",
      "feedback": "Disappointed",
      "name": "Patty Kerry",
      "team": "Team A",
      "desc": "I have done some work for somebody, but he is not satisfied. I still want the feedback from him, and am trying to convince him to give me some feedback (likely bad); I honestly wouldn’t like to get negative feedback."
    },
    {
      "id": 11,
      "type": "n",
      "feedback": "Disappointed",
      "name": "Patty Kerry",
      "team": "Team A",
      "desc": "I have done some work for somebody, but he is not satisfied. I still want the feedback from him, and am trying to convince him to give me some feedback (likely bad); I honestly wouldn’t like to get negative feedback."
    },
    {
      "id": 12,
      "type": "vp",
      "feedback": "Very Happy",
      "name": "Patty Kerry",
      "team": "Team A",
      "desc": "Thank you for always being my sides during all the interviews and decision makings in the last sprint. Without you if wouldn't be that easy for me to manage everything. Looking forward for more tasks together :D"
    },
    {
      "id": 13,
      "type": "p",
      "feedback": "Positive",
      "name": "Patty Kerry",
      "team": "Team A",
      "desc": "I think that the word “kind” can be of help here. Kind comments… kind reviews etc., will be somewhat more subtle and may hint at the desired action on their part ;)"
    },
    {
      "id": 14,
      "type": "vp",
      "feedback": "Very Happy",
      "name": "Patty Kerry",
      "team": "Team A",
      "desc": "Thank you for always being my sides during all the interviews and decision makings in the last sprint. Without you if wouldn't be that easy for me to manage everything. Looking forward for more tasks together :D"
    },
    {
      "id": 15,
      "type": "p",
      "feedback": "meh",
      "name": "Patty Kerry",
      "team": "Team A",
      "desc": "I think that the word “kind” can be of help here. Kind comments… kind reviews etc., will be somewhat more subtle and may hint at the desired action on their part ;)"
    },
  ];
  reviewRecords: any[] = [];
  mainTab: number = 1;
  selectedTab: string = "";

  constructor(private calendar: NgbCalendar) {
    this.model = this.calendar.getToday();
    this.reviewRecords = this.allRecords
  }

  onDateSelect(event: any) {
    console.log(event);
    // Do something with the selected date if needed
  }
  feedBackTab(name: string) {
    this.selectedTab = name;
    this.reviewRecords = this.allRecords.filter(x => x.feedback.toLowerCase() === name.toLowerCase());

  }
}
