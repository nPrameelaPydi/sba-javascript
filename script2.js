const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
        {
            id: 1,
            name: "Declare a Variable",
            due_at: "2023-01-25",
            points_possible: 50
        },
        {
            id: 2,
            name: "Write a Function",
            due_at: "2023-02-27",
            points_possible: 150
        },
        {
            id: 3,
            name: "Code the World",
            due_at: "3156-11-15",
            points_possible: 500
        }
    ]
};


function getAssignInfo(assign_id) {
    for (let i = 0; AssignmentGroup.assignments.length; i++) {

        if (AssignmentGroup.assignments[i].id == assign_id) {
            return (AssignmentGroup.assignments[i]);
        };

    }
}
//console.log(getAssignInfo(2));

for (let i = 0; i < LearnerSubmissions.length; i++) {
    console.log(LearnerSubmissions[i].assignment_id);
}

console.log(LearnerSubmissions.length);