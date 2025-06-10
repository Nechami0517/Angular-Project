import { Component, Input ,ChangeDetectionStrategy, OnInit} from '@angular/core';
import { Lesson } from '../lessonsListService/lessons-list-service.service';

import {MatCardModule} from '@angular/material/card';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-lesson',
  standalone: true,
  imports: [MatCardModule,NgClass],
  templateUrl: './lesson.component.html',
  styleUrl: './lesson.component.css'
})
export class LessonComponent implements OnInit {
 
  @Input() lesson!: Lesson;
  isLessonStarted: boolean = false;

  ngOnInit(): void {
    this.checkIfLessonStarted();
  }

  checkIfLessonStarted(): void {
    const today = new Date();
    const lessonStartDate = new Date(this.lesson.startDate); 
    console.log('Today:', today);
    console.log('Lesson Start Date:', lessonStartDate);
    this.isLessonStarted = lessonStartDate <= today; 
    console.log('Is Lesson Started:', this.isLessonStarted);
  }
}
