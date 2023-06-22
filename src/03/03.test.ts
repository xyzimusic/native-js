import {addSkill, doesStudentLiveIn, makeStudentActive} from "./03";
import {StudentType} from "../02/02";

let student: StudentType
beforeEach(() => {
    student = {
        // "Мое имя": "Ily",
        id: 1,
        name: 'Dima',
        age: 32,
        isActive: false,
        address: {
            streetTitle: 'Surganov 2',
            city: {
                title: "Minsk",
                countryTitle: 'Belarus'
            }
        },
        // technologies1: [
        //     'Css', 'Js', 'Node js'
        // ],
        technologies: [
            {
                id: 1,
                title: 'HTML'
            },
            {
                id: 2,
                title: 'JS'
            },
            {
                id: 3,
                title: 'REACT'
            },

        ]
    }
})
test('new Skill should be added to student', () => {
    expect(student.technologies.length).toBe(3)
    addSkill(student, 'JS')


    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].id).toBeDefined()
    expect(student.technologies[3].title).toBe('JS')

})

test('student should be made active', () => {
    expect(student.isActive).toBe(false)
    makeStudentActive(student)


    expect(student.isActive).toBe(true)

})

test('does student live in city', () => {
    expect(student.isActive).toBe(false)
    let result1 = doesStudentLiveIn(student, 'Moscow')
    let result2 = doesStudentLiveIn(student, 'Minsk')


    expect(result1).toBe(false)
    expect(result2).toBe(true)

})