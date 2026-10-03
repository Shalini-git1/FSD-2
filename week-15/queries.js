db.students.insertMany([
    { name: "Pradeep", branch: "AIML", country: "India", marks: 85 },
    { name: "Rahul", branch: "AIML", country: "India", marks: 72 },
    { name: "Sneha", branch: "AIDS", country: "India", marks: 91 },
    { name: "Kiran", branch: "AIML", country: "India", marks: 65 },
    { name: "Divya", branch: "AIML", country: "India", marks: 88 },
    { name: "Arjun", branch: "AIDS", country: "India", marks: 76 },
    { name: "Meena", branch: "AIML", country: "India", marks: 93 },
    { name: "Ravi", branch: "AIDS", country: "India", marks: 69 }
]);
db.students.find();
db.students.find({
    branch: "AIML",
    country: "India"
});
db.students.find().limit(3);
db.students.find().sort({
    marks: -1
});
db.students.find().sort({
    marks: 1
});
db.students.createIndex({
    name: 1
});
db.students.aggregate([
    {
        $group: {
            _id: "$branch",
            totalStudents: { $sum: 1 }
        }
    }
]);
