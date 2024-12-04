interface DirectorInterface {
  workFromHme(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
};

interface TeacherInterface {
  workFromHme(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
};

class Director implements DirectorInterface {
  workFromHme(): string {
    return "Working from home";
  };
  getCoffeeBreak(): string {
    return "Getting a coffee break"
  };
  workDirectorTasks(): string {
    return "Getting to director task";
  }
}

class Teacher implements TeacherInterface {
  workDirectorTasks(): string {
    return "Cannot work From home";
  }
  getCoffeeBreak(): string {
    return "Cannot have a break";
  }
  workFromHme(): string {
    return "Getting to work";
  }
}

function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

console.log(createEmployee(200));
Teacher
console.log(createEmployee(1000));
Director
console.log(createEmployee('$500'));
Director
