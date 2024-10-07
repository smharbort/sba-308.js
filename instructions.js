// input -> courseInfo -> object -> key name/"data-type expected"
//        highest structure is: object


// input -> assignmentGroup
//        highest structure is: object w/ nested arrays of nested objects


// input -> assignmentInfo
//        highest structure is: object


// input -> learnerSubmission
//        highest structure is: array of objects w/ nested objects


// function getLearnerData(courseInfo, assignmentGroup, [learnerSubmission])


// OUTPUT -> formatted result, should be an array of objects
/* const result = [
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
] */