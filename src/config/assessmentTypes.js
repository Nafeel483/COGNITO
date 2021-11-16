const assesmentTypes = {
    0: 'Multiple Choice',
    1: 'Short Answer',
    2: 'True False',
    3: 'Fill in the Blanks',
    4: 'Note',
    5: 'Matching'
}

export default assesmentTypes

export function getAssesmentOptions() {
    return Object.keys(assesmentTypes).map(key => {
        return { title: assesmentTypes[key], value: key}
    })
}