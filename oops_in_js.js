class student{
    static name = "swarit";
    static rollno = 12345;
constructor(name, rollno){
    name=name;
    rollno=rollno;
    console.log(name);
    console.log(rollno);

}
display(){
    console.log(student.name);
    console.log(student.rollno);

}
}
let obj = new student("swarit", 12345);
let obj1 = new student("royal", 12346);


