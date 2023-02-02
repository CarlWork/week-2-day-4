let names = ['CarL WoRk', 'CaMerOn', 'LuKaS', 'boBBy BroWn']
let nums = [3 ,6 ,7 ,57, 46, 90]


const logNames = function(element, index){
console.log(`${element} is at the index of ${index}`)
}

names.forEach(logNames)

let filteredArray = nums.filter(num => {
    return num % 2 === 0
})

let sum = nums.reduce(acc, curr =>{
    return acc * curr
})

// console.log(filteredArray)

// const copyAndChangeArray = (arr, callBack) =>{
    //     let newArr = []
    //     for(let i = 0; i< arr.length; i++){
        //         let newValue = callBack(arr[i])
        //         newArr.push(newValue)
        //     }
        //     return newArr
        // }
        
        const strToCamelCase = str  => {
                let splitStr = str.split(' ')
                for( let i = 0; i < splitStr.length; i++){
                        splitStr[i] = splitStr[i].toLowerCase()
                        if(i !== 0){
                                splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].slice(1)
                            }
                        }
                        return splitStr.join('')
                    }
                    
                    let mappedArray = names.map()
                    console.log(mappedArray)
// const addFive = num => {
//     return num += 5
// }

// console.log(copyAndChangeArray(names, strToCamelCase))
// console.log(copyAndChangeArray(nums, addFive))


class Users {
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }
}
let nameObj = []


names.forEach(element =>{
    let nameArr = element.split(' ')
    let newUser = new Users(nameArr[0],nameArr)
    nameObj.push(newUser)
})

console.log(nameObj)

let firstNameArr = nameObj.map(name =>{
    return user.firstName
})
let greet = (user) => {
    user.greeting()
}
nameObj.forEach()
console.log(firstNameArr)