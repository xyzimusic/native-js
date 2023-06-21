type  AddressType = {
    streetTitle: string
    city:LocaleCityType
}

type LocaleCityType = {
    title: string
    countryTitle: string
}
type TechType={
    id:number
    title:string
}
type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies:TechType[]
}

export const student: StudentType = {
    // "Мое имя": "Ily",
    id:1,
    name: 'Dima',
    age: 32,
    isActive: true,
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

// console.log(student['Мое имя'])
console.log(student.age)
console.log(student.address.city.countryTitle)
console.log(student.technologies[2].title)