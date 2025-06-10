import { Component, OnInit } from '@angular/core';
import { Lesson, LessonListServiceService } from '../lessonsListService/lessons-list-service.service';
import { LessonComponent } from "../lesson/lesson.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lesson-list',
  standalone: true,
  imports: [CommonModule,LessonComponent],
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.css']
})
export class LessonListComponent implements OnInit {
  constructor(private lessonsListService:LessonListServiceService) { }
lessons:Lesson[] = [];
  ngOnInit(): void {
    this.lessons = this.lessonsListService.getLessons();
  }

  

}
