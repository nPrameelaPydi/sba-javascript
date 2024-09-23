// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
};

// The provided assignment group.
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

// The provided learner submission data.
const LearnerSubmissions = [
    {
        learner_id: 125,
        assignment_id: 1,
        submission: {
            submitted_at: "2023-01-25",
            score: 47
        }
    },
    {
        learner_id: 125,
        assignment_id: 2,
        submission: {
            submitted_at: "2023-02-12",
            score: 150
        }
    },
    {
        learner_id: 125,
        assignment_id: 3,
        submission: {
            submitted_at: "2023-01-25",
            score: 400
        }
    },
    {
        learner_id: 132,
        assignment_id: 1,
        submission: {
            submitted_at: "2023-01-24",
            score: 39
        }
    },
    {
        learner_id: 132,
        assignment_id: 2,
        submission: {
            submitted_at: "2023-03-07",
            score: 140
        }
    }
];

function getAssignInfo(assign_id, ag) {
    for (let i = 0; ag.assignments.length; i++) {

        if (ag.assignments[i].id == assign_id) {
            return (ag.assignments[i]);
        };

    }
}
//console.log(getAssignInfo(2));

function getLearnerData(course, ag, submissions) {
    let results = [];
    console.log(results);
    let resultObj = {};

    for (let i = 0; i < submissions.length; i++) {
        const learnerId = submissions[i].learner_id;
        resultObj = {};
        if (!results.find(result => result.id === learnerId)) {
            resultObj.id = learnerId;
            resultObj.totalScore = 0;
            resultObj.totalMaxScore = 0;
            results.push(resultObj);
        }
    }

    let score = 0;
    for (let i = 0; i < submissions.length; i++) {
        score = submissions[i].submission.score;
        const assignInfo = getAssignInfo(submissions[i].assignment_id, ag);
        if (submissions[i].submission.submitted_at > assignInfo.due_at) {
            score = submissions[i].submission.score * 0.9;
        }
        let finalScorePerAssign = score / assignInfo.points_possible;

        resultObj = results.find(result => result.id === submissions[i].learner_id);
        //find and remove the existing object in results & push new updated resultObj to results
        results.splice(results.indexOf(resultObj), 1);
        resultObj[submissions[i].assignment_id] = finalScorePerAssign;

        //update totalScore & totalMaxScore per assignment
        resultObj.totalScore += score;
        resultObj.totalMaxScore += assignInfo.points_possible;
        results.push(resultObj);
    }

    //computing avg
    for (i = 0; i < results.length; i++) {
        results[i].avg = results[i].totalScore / results[i].totalMaxScore;
        delete results[i].totalScore;
        delete results[i].totalMaxScore;
    }

    return results;







    //if (!results.find(result => result.id === learnerId)) {
    //resultObj[`${LearnerSubmissions[i].assignment_id}`] = finalScorePerAssign;

    // here, we would process this data to achieve the desired result.
    //const result = [
    //    {
    //        id: 125,
    //        avg: 0.985, // (47 + 150) / (50 + 150)
    //        1: 0.94, // 47 / 50
    //        2: 1.0 // 150 / 150
    //    },
    //    {
    //        id: 132,
    //        avg: 0.82, // (39 + 125) / (50 + 150)
    //        1: 0.78, // 39 / 50
    //        2: 0.833 // late: (140 - 15) / 150
    //    }
    //];

    //return result;
}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result);




//let results = [];
//console.log(results);
//let resultObj = {};

//for (let i = 0; i < LearnerSubmissions.length; i++) {
//    const learnerId = LearnerSubmissions[i].learner_id;
//    resultObj = {};
//    if (!results.find(result => result.id === learnerId)) {
//        resultObj.id = learnerId;
//        results.push(resultObj);
//    }
//}
////console.log(results);

//let score = 0;
//for (let i = 0; i < LearnerSubmissions.length; i++) {
//    score = LearnerSubmissions[i].submission.score;
//    const assignInfo = getAssignInfo(LearnerSubmissions[i].assignment_id);
//    if (LearnerSubmissions[i].submission.submitted_at > assignInfo.due_at) {
//        score = LearnerSubmissions[i].submission.score * 0.9;
//    }
//    let finalScorePerAssign = score / assignInfo.points_possible;

//    resultObj = results.find(result => result.id === LearnerSubmissions[i].learner_id);
//    //find and remove the existing object in results & push new updated resultObj to results
//    results.splice(results.indexOf(resultObj), 1);
//    //console.log(resultObj);
//    resultObj[LearnerSubmissions[i].assignment_id] = finalScorePerAssign;

//    //if (!results.find(result => result.id === learnerId)) {
//    //resultObj[`${LearnerSubmissions[i].assignment_id}`] = finalScorePerAssign;
//    results.push(resultObj);
//}

//console.log(results);












//let score = 0;
//let results = [];

//for (let i = 0; i < LearnerSubmissions.length; i++) {
//console.log(LearnerSubmissions[i].assignment_id);
//console.log((getAssignInfo(LearnerSubmissions[i].assignment_id)));
//let assignInfo = getAssignInfo(LearnerSubmissions[i].assignment_id);




//score = LearnerSubmissions[i].submission.score;



//if (LearnerSubmissions[i].submission.submitted_at > assignInfo.due_at) {
//    score = LearnerSubmissions[i].submission.score * 0.9;
//    console.log(`score: ${score}`);
//}




//let finalScorePerAssign = score / assignInfo.points_possible;
//console.log(finalScorePerAssign);
//let temp;
/*to find if results already have object with learner-id using results.find()(gives only first find obj or element) - if nothing there it returns undefined, storing undefined or found result in temp,
*/
//temp = results.find((element) => element.id == LearnerSubmissions[i].learner_id);
//if (temp === undefined) {
//results.push(
//    {
//        id: LearnerSubmissions[i].learner_id,
//        LearnerSubmissions[i].assignment_id : finalScorePerAssign,

//    })
//temp = {};
//temp["id"] = LearnerSubmissions[i].learner_id;
//temp[LearnerSubmissions[i].assignment_id] = finalScorePerAssign;
//results.push(temp);
//} else {
//temp[LearnerSubmissions[i].assignment_id] = finalScorePerAssign;
//results.push(temp);

//}

//}

//console.log(results);



//function getResultsPerLearner(leanerId){

//}
