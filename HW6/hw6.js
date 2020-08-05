
const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }];
  
  
  
     //1
      const getSubjects = (students) => {
          const subjects = Object.keys(students.subjects);
          return subjects.map( elem => elem.slice(0,1).toUpperCase() + elem.slice(1).replace('_',' '));
      };
  
      console.log(getSubjects(students[0]));
      console.log(getSubjects(students[1]));
      console.log(getSubjects(students[2]));
    
  
      //2
      const getAverageMark = (students) => {
        const marks = Object.values(students.subjects).flat();
        let sum = 0;
        for(let i = 0; i < marks.length; i++){
          sum += marks[i];
        }
        return +(sum / marks.length).toFixed(2);
      };
  
      console.log(getAverageMark(students[0]));
      console.log(getAverageMark(students[1]));
      console.log(getAverageMark(students[2]));
  
  
      //3
     const getStudentInfo = (students) =>{
       return{
         averageMarc: (getAverageMark(students)),
         name: students.name,
         course: students.course,
       };
     };
  
      console.log(getStudentInfo(students[0]));
      console.log(getStudentInfo(students[1]));
      console.log(getStudentInfo(students[2]));
  
  
     //4
  
  const getStudentsNames =(students) =>{
    return students.map(el => el.name).sort(); 
  };
  
  console.log(getStudentsNames(students));
  
  //5
  const getBestStudent = (students) =>{
    let bestStudent;
    if (getAverageMark(students[0])> getAverageMark(students[1]) > getAverageMark(students[2])){
        bestStudent = students[0].name; 
    }  else if (getAverageMark(students[1])> getAverageMark(students[0]) > getAverageMark(students[2])){
        bestStudent = students[1].name;
    }   else  {
        bestStudent = students[2].name;
     }
    return bestStudent;
  }
  
  console.log(getBestStudent(students));
  
  
  //6
   const calculateWordLetters = (test) => {
     let word = {};
    for(elem of test){
  
    if (word [elem]){
     (word [elem]++);
  
      }else{
        word [elem] = 1;
     }
  }
  return word;
  };
  
   console.log(calculateWordLetters('test'));

   document.writeln(`<p><b>Функція, яка повертає список предметів для конкретного студента:</b> ${getSubjects(students[0])} </p>`);
   document.writeln(`<p><b>Функція, яка поверне середню оцінку по усім предметам для переданого студента:</b> ${getAverageMark(students[0])} </p>`);
   document.writeln(`<p><b>Функція, яка повертає інформацію загального виду по переданому студенту:</b> ${getStudentInfo(students[0])} </p>`);
   document.writeln(`<p><b>Функція, яка повертає імена студентів у алфавітному порядку:</b> ${getStudentsNames(students)} </p>`);
   document.writeln(`<p><b>Функція, яка повертає кращого студента зі списку по показнику середньої оцінки:</b> ${getBestStudent(students)} </p>`);
   document.writeln(`<p><b>Функція, яка повертає обє'кт, в якому ключі це букви у слові:</b> ${calculateWordLetters('test')} </p>`);
   

