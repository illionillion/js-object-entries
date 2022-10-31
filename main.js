"use strict"
const exam_results = {
    english: 90,
    math: 95,
    Japanese: 89,
    science: 85
}

// for in
for (const subject in exam_results) {
    if (Object.hasOwnProperty.call(exam_results, subject)) {
        const point = exam_results[subject];
        console.log(`${subject} : ${point}`);
    }
}

// for of
for (const subject of Object.keys(exam_results)) {
    const point = exam_results[subject];
    console.log(`${subject} : ${point}`);
}

// forEach
Object.keys(exam_results).forEach((subject, index) => {
    const point = exam_results[subject];
    console.log(`${index}. ${subject} : ${point}`);
});

// Object.entries()
for (const [subject, point] of Object.entries(exam_results)) {
    console.log(`${subject} : ${point}`);
}
console.log(Object.entries(exam_results));

// for await of
for await(const [subject, point] of Object.entries(exam_results)) {
    console.log(`${subject} : ${point}`);
}