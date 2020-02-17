// const square = function (x) {
//     return x * x
// }
// const square = (x) => {return x * x}

// const square = (x) => x * x
//
// console.log(square(2))

const event = {
    name: 'Birthday party',
    guestList: ['Andrew', 'John', 'Peter'],
    printGuestList() {
        console.log('Guest list for event ' + this.name)
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
            }
        )
    }
}

event.printGuestList()