const CourseInfo = {                        // CourseInfo -> object
    id: 451,
    name: "Introduction to JavaScript"
}

const AssignmentGroup = {                   // AssignmentGroup -> object > array > objects (assignments info)
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
}

const LearnerSubmissions = [                // LearnerSubmissions -> array > objects > object (submissions info)
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
]

//                                                      START CODE HERE
//              Type & Data Validation Functions
// validate courseInfo -> both type of input & course id check out -> return 'validated' object
function validateCourseInfo (courseInfo) {
    const courseInfoErrorLog = []
    let validated = {
        type_check: false,
        course_id: null
    }

    try {
        if (typeof courseInfo == "object") {
            validated.type_check = true
        } else {
            throw new ReferenceError("Invalid input: 'Course Info'")
        }
    } catch (err) {
        courseInfoErrorLog.push(err)
    }

    try {
        if (typeof courseInfo.id == "number") {
            validated.course_id = courseInfo.id
        } else {
            throw new ReferenceError("Missing input: 'id'")
        }
    } catch (err) {
        courseInfoErrorLog.push(err)
    }

    // console.log(courseInfoErrorLog)
    return validated
}
// console.log(validateCourseInfo(CourseInfo))


// validate assignmentGroup -> 
function validateAssignmentGroup (assignmentGroup) {
    const assignmentGroupErrorLog = []

    let validated = {
        type_check: false,
        course_id: null}

    try {
        if (typeof assignmentGroup == "object") {
            validated.type_check = true
        } else {
            throw new ReferenceError("Invalid input: 'Assignment Group'")
        }
    } catch (err) {
        assignmentGroupErrorLog.push(err)
    }

    try {
        if (typeof assignmentGroup.course_id == "number") {
            validated.course_id = assignmentGroup.course_id
        } else {
            throw new ReferenceError("Missing input: 'course_id'")
        }
    } catch (err) {
        assignmentGroupErrorLog.push(err)
    }

    // console.log(assignmentGroupErrorLog)
    return validated
}
// console.log(validateAssignmentGroup(AssignmentGroup))


/* function validateAssignmentsInfo (assignmentGroup) {
    const assignmentsInfoErrorLog = []
    const validated = {
        typeCheck: false,
        assignments: []
    }

    try {

    } catch (err) {

    }
} */







































//                              Putting the thing together functions

/* 
                getLearnerData(courseInfo, assignmentGroup, learnerSubmission)
                OUTPUT SHOULD LOOK LIKE:    // array > objects

{
    id: number,
    avg: number,
    assignment_id: number
}
*/

/* function getLearnerData(courseInfo, assignmentGroup, learnerSubmission) {
    const result = []

    const populatedObj = {
        id: learnerId,
        avg: totalAvg,
        assignment_id: assignmentScore
    }

    return result
} */