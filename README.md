## Manara and/or Tishana:
### I have put SO much time & effort into this project over the last 2 days-- I hope you will recognize that by appreciating that the program generally works as intended. It is missing a couple things as per the SBA requirements, which I will leave comments about below, but I am confident about how to implement those missing requirements-- as in, I believe I would have been able to satisfy and go beyond requirements if it were not for, a. unfortunately, poor task prioritization initially, and b. a need for more repetitions with these concepts before I am familiar to the extent that I can more easily plan & execute according to specifications, within time constraints.


## missing requirements I know about:
1. try/catch statements -> I worked with these a lot in my first attempts at the project, and feel generally comfortable implementing them now, but doing so actually
soaked up too much of my time as I played around with supporting functions for [type & expected keys validations of objects that would be passed as arguments to
the getLearnerData function]
2. missing getLearnerData parameter to pass CourseInfo object -> met this requirement in a past project iteration. I will go back and add these missing components
another day soon following submission, but, I don't want my current product to break by factoring in [(pseudo-code) if CourseInfo.id === AssignmentGroup.course_id, then ...]
into my series of if statements in the getLearnerData function.
3. I could not quickly figure out how to move the assignment entries {number: assignment_grade_percentage} AFTER the {id: x, avg: y} entries, so unfortunately the formatting of the final result is slightly off

## generally, this is how the program works:
1. structureLSData function -> takes LearnerSubmissions as its argument and restructures the relevant keys & values in a way that I thought would be more palatable to
[evaluate against AssignmentGroup.assignments keys & values] in order to produce the grade calculations necessary for the getLearnerData() result.

(I am SUPER suprised and proud to have figured out, FINALLY, with minimal sleep, how to [restructure LearnerSubmissions objects values as arrays in a single key-value pair, producing
only a single object for each learner_id found] by using the whole [(pseudo-code) append new learner_ids found (while iterating) to a learner_id array and then use indexOf as the
fulcrum of an if statement, determining whether to [push values to a new object to push to array] OR [find the existing object with matching learner_id by using array[indexOf_const] to push values to while iterating]]. I HOPE THAT MADE SOME SENSE.)

2. structureAGData function -> similar to structureLSData() but WAY less complicated both because [the object structure of AssignmentGroup itself was easier to navigate] and [because
the structureLSData() function did a lot of the heavy lifting by producing a formatted object against which the structureAGData() function could be easily compared].

3. getLearnerData function -> uses nested loops and a chain of if statements to evaluate LearnerSubmission values against AssignmentGroup.assignments values to produce desired result

## key takeaways:
1. need more repititions with README to familiarize myself with formatting syntax
2. constantly reminded just how important & essential it is to get the planning phase right with coding to ensure you're prioritizing tasks correctly, and to signficantly ease the process of execution. I understand now what Manara was talking about when he said something like only 20% of his professional time is spent coding, like 80% goes into planning
3. I feel like there's probably a whole lot of room for improvement of efficiency of the code via less complex approaches, but at least I got the code to work first
4. got a LOT of useful practice working with functions/arrays/objects
5. I get way too wordy when I am tired I think. I'm wordy in general to begin with smh