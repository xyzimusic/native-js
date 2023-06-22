import {StudentType} from "../02/02";
import {CityType, GovernmentBuildingsType, HouseType} from "../02/02_02";

export const sum = (a: number, b: number) => {
    return a + b
}

const res1 = sum(sum(1, 2), sum(1, 3))

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export const makeStudentActive = (s: StudentType) => {
    s.isActive = true
}
export const doesStudentLiveIn = (s: StudentType, cityName: string) => {
    return s.address.city.title === cityName
}

export const addMoneyToBudget = (governmentBuilding: GovernmentBuildingsType, budget: number) => {
    governmentBuilding.budget += budget
}

export const repairHouse = (houseType: HouseType) => {
    houseType.repaired = true
}

export const toFireStaff = (buildings: GovernmentBuildingsType, staffTofire: number) => {
    buildings.staffCount -= staffTofire
}
export const toHireStaff = (building: GovernmentBuildingsType, staffTofire: number) => {
    building.staffCount += staffTofire
}
export const createMessage = (city: CityType) => {
   return `Hello ${city.title} cititzens. I want you be happy. All ${city.cityzensNumber} men`
}

