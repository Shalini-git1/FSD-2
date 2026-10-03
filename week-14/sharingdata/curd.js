db.students.insertOne({
    name: "JP",
    age: 25,
    course: "EEE"
});
db.students.find({
    name: "JP"
});
db.students.updateOne(
    { name: "JP" },
    { $set: { age: 35 } }
);
db.students.deleteOne({
    name: "JP"
});
