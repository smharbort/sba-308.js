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

// console.log("2023-03-07" > "2023-01-24")

//                                                      START CODE HERE
//                                                      FORGET ABOUT TYPE VALIDATION RN

/* const objStructure = {                               THIS IS 100% WHAT IM MISSING
        learner_id: x,
        submission_details: {
            asgmt_id_arr: [],
            submitted_at_arr: [],
            score_arr: []
        },
        asgmt_details: {
            asgmt_id_arr: [],
            due_at_arr: [],
            points_psbl_arr: []
        }

    } */

/* function structureLSData (ls) {
    const lsObjArr = []
    for (const objEntry of ls) {
        
        const newObjEntry = {
            learner_id: 0,
            subm_details: {
                asgmt_ids: [],
                subm_ats: [],
                scores: []
            }
        }

        if (newObjEntry.learner_id === 0) {
            newObjEntry.learner_id = objEntry.learner_id
        }

        if (newObjEntry.learner_id == objEntry.learner_id) {
            newObjEntry.subm_details.asgmt_ids.push(objEntry.assignment_id)
            newObjEntry.subm_details.subm_ats.push(objEntry.submission.submitted_at)
            newObjEntry.subm_details.scores.push(objEntry.submission.score)
        }
    }
}
console.log(structureLSData(LearnerSubmissions)) */


function structureLSData (ls) {
    const lsObjArr = []
    const learner_ids = []

    for (const objEntry of ls) {
        
        const checkId = learner_ids.indexOf(objEntry.learner_id)
        // console.log(`checking indexOf objEntry.learner_id: ${checkId}`)

        const newLSObjEntry = {
            learner_id: 0,
            subm_details: {
                asgmt_ids: [],
                subm_ats: [],
                scores: []
            }
        }

        if (checkId === -1) {

            learner_ids.push(objEntry.learner_id)
            // console.log(learner_ids)

            newLSObjEntry.learner_id = objEntry.learner_id

            newLSObjEntry.subm_details.asgmt_ids.push(objEntry.assignment_id)
            newLSObjEntry.subm_details.subm_ats.push(objEntry.submission.submitted_at)
            newLSObjEntry.subm_details.scores.push(objEntry.submission.score)

            lsObjArr.push(newLSObjEntry)
        } else {
            lsObjArr[checkId].subm_details.asgmt_ids.push(objEntry.assignment_id)
            lsObjArr[checkId].subm_details.subm_ats.push(objEntry.submission.submitted_at)
            lsObjArr[checkId].subm_details.scores.push(objEntry.submission.score)
        }
    }
    return lsObjArr
}
// console.log(structureLSData(LearnerSubmissions))

function structureAGData (ls, ag) {

    const getLSData = structureLSData(LearnerSubmissions)

    // console.log(getLSData)
    /* console.log(getLSData[0].subm_details.asgmt_ids)
    console.log(getLSData[1].subm_details.asgmt_ids)

    console.log(getLSData[0].subm_details.subm_ats)
    console.log(getLSData[1].subm_details.subm_ats)
    
    console.log(getLSData[0].subm_details.scores)
    console.log(getLSData[1].subm_details.scores) */

    console.log(getLSData[0])
}
structureAGData(LearnerSubmissions)