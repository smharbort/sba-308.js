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
        submitted_at: "2023-01-25",         // convert date to number or something
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


function validateAssignmentsInfo (assignmentGroup) {
    const assignmentsInfoErrorLog = []
    const validated = {
        typeCheck: true,
        assign_id_arr: [],
        assign_name_arr: [],
        due_at_arr: [],
        points_possible_arr: []
    }

    try {
        assignmentGroup.assignments.forEach(objEntry => {
            validated.assign_id_arr.push(objEntry.id)
            validated.assign_name_arr.push(objEntry.name)
            validated.due_at_arr.push(objEntry.due_at)
            validated.points_possible_arr.push(objEntry.points_possible)
        })
    } catch (err) {
        assignmentsInfoErrorLog.push(err)
    }

    // console.log(assignmentsInfoErrorLog)
    return validated
}
// console.log(validateAssignmentsInfo(AssignmentGroup))

function validateLearnerSubmissions (learnerSubmissions) {
    const learnerSubmissionsErrorLog = []
    const validated = {
        type_check: false,
        learner_id_arr: [],
        assignment_id_arr: [],
        submission_date_arr: [],
        score_arr: []
    }

    try {
        if (typeof learnerSubmissions == "object") {
            validated.type_check = true
        } else {
            throw new ReferenceError("Invalid input: 'Learner Submissions'")
        }
    } catch (err) {
        learnerSubmissionsErrorLog.push(err)
    }

    try {
        learnerSubmissions.forEach(objEntry => {
            validated.learner_id_arr.push(objEntry.learner_id)
            validated.assignment_id_arr.push(objEntry.assignment_id)
            validated.submission_date_arr.push(objEntry.submission.submitted_at)
            validated.score_arr.push(objEntry.submission.score)
        })
    } catch (err) {
        learnerSubmissionsErrorLog.push(err)
    }

    // console.log(learnerSubmissionsErrorLog)
    return validated
}
// console.log(validateLearnerSubmissions(LearnerSubmissions))


function bigPenultimateFormatting (courseInfo, assignmentGroup, learnerSubmissions) {
    const checkCourseInfo = validateCourseInfo(CourseInfo)
    const checkAssignmentGroup = validateAssignmentGroup(AssignmentGroup)
    const checkAssignmentsInfo = validateAssignmentsInfo(AssignmentGroup)
    const checkLearnerSubmissions = validateLearnerSubmissions(LearnerSubmissions)

    const splitSubmissionDateArr = []

    for (const index of checkLearnerSubmissions.submission_date_arr) {
        splitSubmissionDateArr.push(index.split('-'))
    }

    const splitDueAtDateArr = []

    for (const index of checkAssignmentsInfo.due_at_arr) {
        splitDueAtDateArr.push(index.split('-'))
    }

    const allRequiredInfoTogether = {
        ci_course_id: checkCourseInfo.course_id,
        ag_course_id: checkAssignmentGroup.course_id,
        assign_id_arr: checkAssignmentsInfo.assign_id_arr,
        due_at_arr: checkAssignmentsInfo.due_at_arr,
        formatted_due_at_arr: splitDueAtDateArr,
        points_possible_arr: checkAssignmentsInfo.points_possible_arr,
        learner_id_arr: checkLearnerSubmissions.learner_id_arr,
        submission_assignment_id_arr: checkLearnerSubmissions.assignment_id_arr,
        submission_date_arr: checkLearnerSubmissions.submission_date_arr,
        formatted_submission_date_arr: splitSubmissionDateArr,
        score_arr: checkLearnerSubmissions.score_arr
    }
    // console.log(allRequiredInfoTogether)

    return allRequiredInfoTogether
}
// console.log(getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions))

/* function viewEndBossObject (courseInfo, assignmentGroup, learnerSubmissions) {
    const endBossObject = bigPenultimateFormatting(courseInfo, assignmentGroup, learnerSubmissions)

    return endBossObject
} */
// console.log(viewEndBossObject(CourseInfo, AssignmentGroup, LearnerSubmissions))


function viewEndBossObject (courseInfo, assignmentGroup, learnerSubmissions) {
    const endBossObject = bigPenultimateFormatting(courseInfo, assignmentGroup, learnerSubmissions)

    const byLearnerId = []

    for (const index of endBossObject.learner_id_arr) {

        if (index === )

    }



    // return endBossObject
}
// console.log(viewEndBossObject(CourseInfo, AssignmentGroup, LearnerSubmissions))


































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