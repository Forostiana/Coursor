const students = ["Саша", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

//1
function getPairs(students){
    let pairs = []; 
    let boys = [];
    let girls = [];
    for(student of students){
        if(student === "Саша" || student === "Ігор" || student === "Олексій"){
            boys.push(student);
        }
        else{
            girls.push(student);
        }
    }
    for(let i = 0; i < 3; i++){
        pairs[i] = [`${boys[i]}`, `${girls[i]}`];
    }
    return pairs;
}
let pairs = getPairs(students);
console.log(pairs);
//document.writeln(`<p>пари студентів: ${pairs}</p>`);


//2
function studentsWithThemes(pair, them){
	let studentThemes = [];
    for(let i = 0; i < themes.length; i++) {
        studentThemes[i] = [`${pairs[i].join(" та ")}`, `${themes[i]}`];
    }
    return studentThemes;
}
const studentWithTheme = studentsWithThemes(pairs, themes);
console.log(studentWithTheme);

//3
function marksForStudents(students, marks){
  let studentMark =[];
  for(let i =0; i < students.length; i++){
    studentMark.push(students[i]  + ': ' + marks[i]); 
  }
   return studentMark;
}
let final = marksForStudents(students, marks);
console.log(final);


//4

function getRandomMark() {
    const groups = [];
    for (i = 0; i < studentWithTheme.length; i++) {
        groups.push(studentWithTheme[i] + ' - ' + Math.floor(Math.random(marks) * 5 - 1));
    }

    return groups;
}

const randomMark = getRandomMark(students, themes, marks);


console.log(randomMark);


document.body.innerHTML = <p> №1:  ${getPairs()}</p>;
document.body.innerHTML = <p> №2:  ${studentsWithThem()}</p>;
document.body.innerHTML = <p> №3:  ${marksForStudents()}</p>;
document.body.innerHTML = <p> №4:  ${getRandomMark()}</p>;
