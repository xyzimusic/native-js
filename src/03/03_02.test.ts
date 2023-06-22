import {CityType} from "../02/02_02";
import {addMoneyToBudget, createMessage, repairHouse, toHireStaff} from "./03";

let city: CityType

beforeEach(() => {
    city = {
        title: 'New-York',
        houses: [
            {
                buildedAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: 'White street'
                    }
                }
            },
            {
                buildedAt: 2008,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: 'Happy street'
                    }
                }
            },
            {
                buildedAt: 2020,
                repaired: false,
                address: {
                    number: 101,
                    street: {
                        title: 'Happy street'
                    }
                }
            },
        ],
        governmentBuildings: [
            {
                type: 'HOSPITAL',
                budget: 200000,
                staffCount: 200,
                address: {
                    number: 200,
                    street: {
                        title: 'Central Str'
                    }
                },
            },
            {
                type: 'FIRE-STATION',
                budget: 500000,
                staffCount: 1000,
                address: {
                    number: 1000,
                    street: {
                        title: 'South Str'
                    }
                },
            },
        ],
        cityzensNumber: 1000000
    }
})


test('budget should be changed for hospital', () => {
    addMoneyToBudget(city.governmentBuildings[0], 100000)
    expect(city.governmentBuildings[0].budget).toBe(300000)
})

test('budget should be changed for fire station', () => {
    addMoneyToBudget(city.governmentBuildings[1], -100000)
    expect(city.governmentBuildings[1].budget).toBe(400000)
})

test('House should be repared', () => {
    repairHouse(city.houses[1])
    expect(city.houses[1].repaired).toBeTruthy()
})

test('House should be repared', () => {
    toHireStaff(city.governmentBuildings[0], 20)
    expect(city.governmentBuildings[0].staffCount).toBe(220)
})

test('Greeting message should be correct for city', () => {
  const message = createMessage(city)
    expect(message).toBe('Hello New-York cititzens. I want you be happy. All 1000000 men')
})