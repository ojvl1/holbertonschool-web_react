namespace Subjects {
  export class Subject {
      private _teacher: Teacher;

      setTeacher(teacher: Teacher): void {
          this._teacher = teacher;
      }

      get teacher(): Teacher {
          return this._teacher;
      }
  }
}