const CourseInfo = {                        // CourseInfo -> object
    id: 451,
    name: "Introduction to JavaScript"
}

const AssignmentGroup = {                   // AssignmentGroup -> object > array > objects
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

const LearnerSubmissions = [                // LearnerSubmissions -> array > objects > object
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
function structureLSData (ls) {
    const lsObjArr = []
    const learner_ids = []

    for (const objEntry of ls) {
        
        const checkId = learner_ids.indexOf(objEntry.learner_id)

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

function structureAGData (ag) {

    const agObjArrays = {
        asgmt_ids: [],
        due_ats: [],
        points_possible_arr: []
    }
    
    for (const objEntry of ag.assignments) {
        agObjArrays.asgmt_ids.push(objEntry.id)
        agObjArrays.due_ats.push(objEntry.due_at)
        agObjArrays.points_possible_arr.push(objEntry.points_possible)
    }

    return agObjArrays
}

function getLearnerData (ag, ls) {

    const getAGData = structureAGData(ag)
    const getLSData = structureLSData(ls)
    const todaysDate = "2024-10-09"
    const result = []
    
    for (const objEntry of getLSData) {

        const finalObj = {
            id: 0,
            avg: 0
        }

        let scoresTotal = 0
        let pointsPossibleTotal = 0

        for (let i = 0; i < objEntry.subm_details.asgmt_ids.length; i++) {

            if (objEntry.subm_details.asgmt_ids[i] === getAGData.asgmt_ids[i]) {
                
                if (getAGData.due_ats[i] >= todaysDate) {
                    continue
                } else {

                    if (objEntry.subm_details.subm_ats[i] > getAGData.due_ats[i]) {
                        objEntry.subm_details.scores[i] -= (getAGData.points_possible_arr[i] * 0.1)
                    }

                    const calcAsgmt = ((objEntry.subm_details.scores[i] / getAGData.points_possible_arr[i]) * 100).toFixed(1)
                    const j = i + 1

                    scoresTotal += objEntry.subm_details.scores[i]
                    pointsPossibleTotal += getAGData.points_possible_arr[i]

                    finalObj[j] = calcAsgmt

                }

            } else {
                continue
            }
        }
        const calcAvg = ((scoresTotal / pointsPossibleTotal) * 100).toFixed(1)

        finalObj.id = objEntry.learner_id
        finalObj.avg = calcAvg

        result.push(finalObj)
    }

    return result
}
console.log(getLearnerData(AssignmentGroup, LearnerSubmissions))