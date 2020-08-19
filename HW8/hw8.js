class Student {
    constructor(fullName, university, course) {
      this.fullName = fullName;
      this.university = university;
      this.course = course;
      this.allMarks = [5, 4, 4, 5];
      this.isStudent = true;
    }
  
    getInfo() {
      return `Student of ${this.course} course at the ${this.university}, ${this.fullName} `;
    }
  
     get marks() {
      if (this.isStudent) {
        return this.allMarks;
      } 
    }
  
    set marks(mark) {
      if (this.isStudent) {
        return this.allMarks.push(mark);
      } 
    }
  
    getAverageMark() {
        if(this.isStudent) return this.marks.reduce((a,b) => a + b)/this.marks.length;
      }
    
  
    dismiss() {
      return this.isStudent = false;
    }
  
    recover() {
      return this.isStudent = true;
    }
  }
  
  const student = new Student("Inna Forostiana", "KHIF", 1);
  
  
  class BudgetStudent extends Student {
    constructor(fullName, university, course) {
      super(fullName, university, course);
      let timer = setInterval(() => {this.getScholarship()}, 30000);
    }
  
    getScholarship() {
      if (this.isStudent && this.getAverageMark() >= 4) {
        console.log("Ви отримали 1400 грн. стипендії");
      } else {
        console.log("Ви не отримуєте стипендію");
      }
    }
  }
  
  
  console.log(student.getInfo());
  console.log(`Student's marks`, student.marks);
  student.marks = 5;
  console.log(`Student's marks`,student.marks);
  console.log(`Àverage mark`,student.getAverageMark());
  console.log(`Student dismiss`, student.dismiss());
  console.log(`Student recover`, student.recover());