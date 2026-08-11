class Student {
    constructor(
        public studentId: number,
        public studentName: string,
        public studentCourse: string
    ) {}

    display(): void {
        console.log("Student Details");
        console.log("ID:", this.studentId);
        console.log("Name:", this.studentName);
        console.log("Course:", this.studentCourse);
    }
}

const student = new Student(10, "HARI", "AI&DS");
student.display();