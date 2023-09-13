import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;
  students: any[] = [];
  ngOnInit(): void {
    for (let i = 1; i <= 40; i++) {
      this.students.push({
        id: i,
        firstName: `Student${i}`,
        lastName: `Lastname${i}`,
        age: Math.floor(Math.random() * 10) + 18, // Random age between 18 and 27
        grade: String.fromCharCode(65 + Math.floor(Math.random() * 4)) // Random grade (A, B, C, D)
      });
    }
  }
  title = 'infiniteScrolling';

  onScroll() {
    console.log("scrolled!!");
    this.appendFiveStudents()
  }
  onScrollUp(){

  }
  resetStudents() {
    this.students = []
    for (let i = 1; i <= 20; i++) {
      this.students.push({
        id: i,
        firstName: `Student${i}`,
        lastName: `Lastname${i}`,
        age: Math.floor(Math.random() * 10) + 18, // Random age between 18 and 27
        grade: String.fromCharCode(65 + Math.floor(Math.random() * 4)) // Random grade (A, B, C, D)
      });
    }
  }
  appendFiveStudents() {
    const newStudents = [
      {
        id: this.students.length + 1, // Generate a new ID
        firstName: 'NewStudent1',
        lastName: 'NewLastname1',
        age: 22,
        grade: 'C'
      },
      {
        id: this.students.length + 2,
        firstName: 'NewStudent2',
        lastName: 'NewLastname2',
        age: 23,
        grade: 'B'
      },
      {
        id: this.students.length + 3,
        firstName: 'NewStudent3',
        lastName: 'NewLastname3',
        age: 24,
        grade: 'A'
      },
      {
        id: this.students.length + 4,
        firstName: 'NewStudent4',
        lastName: 'NewLastname4',
        age: 25,
        grade: 'C'
      },
      {
        id: this.students.length + 5,
        firstName: 'NewStudent5',
        lastName: 'NewLastname5',
        age: 26,
        grade: 'A'
      }
    ];

    // Append the new students to the array
    this.students.push(...newStudents);
  }
}

