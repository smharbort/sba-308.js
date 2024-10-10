//                                                      SAMPLE DATASET
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
function validateArguments(ci, ag, ls) {

  const validationErrorLog = []
  
  const validated = {
    checkCI: false,
    checkAG: false,
    checkLS: false,
    hasKeysCI: false,
    hasKeysAG: false,
    courseIdsMatch: false
  }

  try {
    if (typeof ci === "object") {
      validated.checkCI = true

      if (ci.id) {
        validated.hasKeysCI = true
      } else {
        throw new ReferenceError("Course Info Missing: 'id'")
      }
    } else {
      throw new ReferenceError("Invalid Input: 'Course Info'")
    }
  } catch (err) {
    validationErrorLog.push(err)
  }

  try {
    if (typeof ag === "object") {
      validated.checkAG = true

      if ((ag.assignments) && (ag.course_id)) {
        validated.hasKeysAG = true
      } else {
        throw new ReferenceError("Assignment Group Missing Keys")
      }
    } else {
      throw new ReferenceError("Invalid Input: 'Assignment Group'")
    }
  } catch (err) {
    validationErrorLog.push(err)
  }

  try {
    if (typeof ls === "object") {
      validated.checkLS = true

    } else {
      throw new ReferenceError("Invalid Input: 'Learner Submissions'")
    }

    if (ci.id === ag.course_id) {
      validated.courseIdsMatch = true
    } else {
      throw new ReferenceError("Invalid Input: Assignment Group does not match this course!")
    }

  } catch (err) {
    validationErrorLog.push(err)
  }

  if (Object.values(validated) === true) {
    return validated
  } else {
    return validated
  }
}
console.log(validateArguments(CourseInfo, AssignmentGroup, LearnerSubmissions))

function structureLSData (ls) {

    const checkIdsMatch = validateArguments(CourseInfo, AssignmentGroup, LearnerSubmissions)

    const lsResultArray = []
    const learnerIDs = []

    if (checkIdsMatch.courseIdsMatch === true) {

      for (const objEntry of ls) {
          
          const checkId = learnerIDs.indexOf(objEntry.learner_id)

          const lsResultObjEntry = {
              learner_id: 0,
              asgmt_ids: [],
              subm_ats: [],
              scores: []
          }

          if (checkId === -1) {

              learnerIDs.push(objEntry.learner_id)

              lsResultObjEntry.learner_id = objEntry.learner_id

              lsResultObjEntry.asgmt_ids.push(objEntry.assignment_id)
              lsResultObjEntry.subm_ats.push(objEntry.submission.submitted_at)
              lsResultObjEntry.scores.push(objEntry.submission.score)

              lsResultArray.push(lsResultObjEntry)
          } else {
              lsResultArray[checkId].asgmt_ids.push(objEntry.assignment_id)
              lsResultArray[checkId].subm_ats.push(objEntry.submission.submitted_at)
              lsResultArray[checkId].scores.push(objEntry.submission.score)
          }
      }
    }

    return lsResultArray
}
// console.log(structureLSData(LearnerSubmissions))

function structureAGData (ag) {

    const agResultObject = {
        asgmt_ids: [],
        due_ats: [],
        points_possible_arr: []
    }
  
    for (const objEntry of ag.assignments) {
        agResultObject.asgmt_ids.push(objEntry.id)
        agResultObject.due_ats.push(objEntry.due_at)
        agResultObject.points_possible_arr.push(objEntry.points_possible)
    }

    return agResultObject
}
// console.log(structureAGData(AssignmentGroup))

function getLearnerData (ag, ls) {

    const getAGData = structureAGData(ag)
    const getLSData = structureLSData(ls)
    const todaysDate = "2024-10-09"                 // hard-coded today's date -> it works for the purposes of date evaluations in this assignment but Manara
    const result = []                               // clued me in to why I should definitely convert to number AND THEN evaluate, going forward
    
    for (const objEntry of getLSData) {

        const finalObj = {
            id: 0,
            avg: 0
        }

        let scoresTotal = 0
        let pointsPossibleTotal = 0

        for (let i = 0; i < objEntry.asgmt_ids.length; i++) {       // LS arrays in ObjEntry all have the same number of entries, and, for each, array[index]
                                                                    // refers to info about the same submission entry, therefore, I can use the same [i] to interact
                                                                    // with each array to perform operations that would otherwise be tedious to reference individually
                                                                    // --> probably would need to restructure code below if working with more complex data sets

            if (objEntry.asgmt_ids[i] === getAGData.asgmt_ids[i]) {             // match AG assignment id to LS assignment id
                
                if (getAGData.due_ats[i] > todaysDate) {                        // ignore assignments due beyond today's date
                    continue
                } else {
                    if (objEntry.subm_ats[i] > getAGData.due_ats[i]) {                      // if LS assignment submission date is beyond assignment due date,
                        objEntry.scores[i] -= (getAGData.points_possible_arr[i] * 0.1)      // calculate and deduct late penalty from score
                    }                                                                                               

                    const calcAsgmt = ((objEntry.scores[i] / getAGData.points_possible_arr[i]) * 100).toFixed(1)    // find assignment grade percentage

                    scoresTotal += objEntry.scores[i]
                    pointsPossibleTotal += getAGData.points_possible_arr[i]

                    finalObj[i + 1] = calcAsgmt
                }

            } else {
                continue
            }
        }
        const calcAvg = ((scoresTotal / pointsPossibleTotal) * 100).toFixed(1)  // overall grade percentage

        finalObj.id = objEntry.learner_id
        finalObj.avg = calcAvg

        result.push(finalObj)
    }
    return result
}
console.log(getLearnerData(AssignmentGroup, LearnerSubmissions))