import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LessonListServiceService {

  constructor() { }
  private lessons: Lesson[] = [
    {
      lessonName: 'שיעור מתמטיקה',
      teacherName: 'יוסי כהן',
      numberOfSessions: 10,
      startDate: new Date('2023-09-01'),
      price: 100,
      day: 'ראשון',
      time: '10:00'
    },
    {
      lessonName: 'שיעור אנגלית',
      teacherName: 'שרה לוי',
      numberOfSessions: 8,
      startDate: new Date('2023-09-05'),
      price: 80,
      day: 'שלישי',
      time: '14:00'
    },
    {
      lessonName: 'שיעור מדעי המחשב',
      teacherName: 'אבי ישראלי',
      numberOfSessions: 12,
      startDate: new Date('2023-09-10'),
      price: 120,
      day: 'חמישי',
      time: '16:00'
    },
    {
      lessonName: 'שיעור פיזיקה',
      teacherName: 'רונית גולדשטין',
      numberOfSessions: 6,
      startDate: new Date('2025-09-15'),
      price: 90,
      day: 'רביעי',
      time: '09:00'
    }
  ];

  public getLessons(): Lesson[] {
    return this.lessons;
  }
}
export interface Lesson {
  lessonName:string,
  teacherName: string; 
  numberOfSessions: number; 
  startDate: Date; 
  price: number; 
  day: string; 
  time: string; 
}
