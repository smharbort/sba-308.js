/* 
cursory functions:

function validateType for:
-- courseInfo                       // object
-- assignmentGroup                  // object -> one nested array
-- assignmentInfo                   // array of objects
-- learnerSubmission                // array of objects -> one nested object per index object of array

function validateData for:
-- assignmentGroup  if aG course_id != cI id -> throw error "input was invalid"

-- assignmentInfo   if due_at is not yet due, ignore from grade calc;   if points_possible === 0 -> ignore from grade calc;

-- how and where do I calc the grade numbers?

MAIN FUNCTION
function getLearnerData () {}
*/

//                                              SAMPLE PARAMETER VALUES TO TEST CODE
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
}

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
}

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
]

//                                              MY CODE HERE
// error logs & other global variables
const typeValidationErrorLog = []

//              Type Validation Functions Here
// validate Course Info
function validateTypeCourseInfo (courseInfo) {
    let typeCheck = false

    try {
        if ((courseInfo.id) && (courseInfo.name)) {
            typeCheck = true
            return typeCheck
        } else {
            throw new ReferenceError("Invalid input: 'Course Info'")
        }
    } catch (err) {
        typeValidationErrorLog.push(err)
    }
}

// validate Assignment Group
function validateTypeAssignmentGroup (assignmentGroup) {
    let typeCheck = false
    const agExpectedKeys = ['id', 'name', 'course_id', 'group_weight', 'assignments']
    const getObjectKeys = Object.keys(assignmentGroup)
    let correctKeysCounter = 0

    try {

    } catch (err) {

    }
}

/* console.log(validateTypeCourseInfo(CourseInfo))
console.log(typeValidationErrorLog) */


/* function typeValidationAssignmentGroup (assignmentGroup) {
    let typeCheck = false
    const agExpectedKeys = ['id', 'name', 'course_id', 'group_weight', 'assignments']
    const agFoundKeys = []

    try {
        for (const key in assignmentGroup) {
            agFoundKeys.push(assignmentGroup.key)
        }

    } catch (err) {
        typeValidationErrorLog.push(err)
    }
} */

// console.log(typeValidationAssignmentGroup(AssignmentGroup))

// const agExpectedKeys = ['id', 'name', 'course_id', 'group_weight', 'assignments']
/* const agFoundKeys = []
for (const key in AssignmentGroup) {
    agFoundKeys.push(AssignmentGroup.key)
} */

/* const agKeys = Object.keys(AssignmentGroup)

console.log(agExpectedKeys)
console.log(agKeys)

console.log((agExpectedKeys === agKeys)) */

console.log(validateTypeAssignmentGroup(AssignmentGroup))

/* function validateTypeAssignmentGroup (assignmentGroup) {
    let typeCheck = false
    const agExpectedKeys = ['id', 'name', 'course_id', 'group_weight', 'assignments']
    const getObjectKeys = Object.keys(assignmentGroup)
    let correctKeysCounter = 0

    for (let i = 0; i < getObjectKeys.length; i++) {
        if (agExpectedKeys[i] == getObjectKeys[i]) {
            correctKeysCounter += 1
        }
    }

    return correctKeysCounter
} */