console.log("Homework #6");

    const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
}
}, 
{
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


function averageMark(student){
    const allMarks = Object.values(student.subjects).flat();

    let averageMark=0;
    for (let i=0; i<allMarks.length;i++){
       let number = allMarks[i];
       averageMark+=number;
   }
   averageMark = averageMark/allMarks.length;

    return averageMark.toFixed(2);
}


function getSubjects(studentName){
    const foundStudent = students.find(function(student){
        return student.name===studentName; 
    });
    const keysArray = Object.keys(foundStudent.subjects);

    const updateSubjects = keysArray.map(function getNewSubjects (subject){
        subject = subject.charAt(0).toUpperCase() + subject.slice(1);
        subject = subject.replace("_"," ");
    return subject;
    });

    return updateSubjects;
  
}


function getAverageMark(studentName){
    const foundStudent = students.find(function(student){
        return student.name===studentName; 
     });
    const mark = averageMark(foundStudent);

    return mark;
}


function getStudentInfo (studentName) {
    const foundStudent = students.find(function(student){
        return student.name===studentName; 
     });

    const mark = averageMark(foundStudent);    
    return {
        "Name": foundStudent.name,
        "Course": foundStudent.course,
        "Average Mark": mark, 
    };
}

function getStudentsNames (){
    let namesArray = students.map(function(student){
        return student.name;
    });

    return namesArray.sort();    
}

function getBestStudent (){
    const generalArray = students.map(function(student){
        return {
            "Name":student.name,
            "Average mark": averageMark(student),
        }
    });
    const sortArray = generalArray.sort(function(first,second){
        return second["Average mark"]-first["Average mark"];
    });

    return sortArray[0];
} 

function calculateWordLetters(str){
    let arrayOfStrings = str.split("");

    let obj = {};
    for (i=0; i<arrayOfStrings.length;i++){
        let letter = arrayOfStrings[i];
        obj[letter] = (obj[letter]+1) || 1;
    }

    return obj;
}


console.log("Function #1",getSubjects("Tanya"));

console.log("Function #2", getAverageMark("Anton"));

console.log("Function #3", getStudentInfo("Victor"));

console.log("Function #4",getStudentsNames());

console.log("Function #5",getBestStudent());

console.log("Function #6",calculateWordLetters("happy"));