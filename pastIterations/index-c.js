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
function validateInputs (ci, ag, ls) {
    const validationErrorLog = []
    const validatedObj = {
        check_ci: false,
        check_ag: false,
        check_ls: false
    }

    try {
        if (typeof ci === "object") {

            validatedObj.check_ci = true

            if (ci.id) {
                const ciCourseId = ci.id
            } else {
                throw new ReferenceError("Missing 'course_id'")
            }

        } else {
            throw new ReferenceError("Invalid input: 'Course Info'")
        }
    } catch (err) {
        validationErrorLog.push(err)
    }


    try {

    } catch (err) {

    }

    try {

    } catch (err) {

    }
}

