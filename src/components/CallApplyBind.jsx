export default function CallApplyBind() {

    function callFn() {
        // The call() method is a predefined JavaScript method.
        const person1 = {
            firstName:"John",
            lastName: "Doe"
        }
        const person2 = {
            firstName:"Mary",
            lastName: "Doe"
        }

        const person = {
            fullName: function (city, place) {
                return this.firstName + " callFn " + this.lastName + city + place;
            }
        }

        console.log(person.fullName.call(person1,'Oslo'))
    }

    function applyFn() {
        // Similar to Call just that the arguments are passed as an array
        const person1 = {
            firstName:"John",
            lastName: "Doe"
        }
        const person2 = {
            firstName:"Mary",
            lastName: "Doe"
        }

        const person = {
            fullName: function (city, place) {
                return this.firstName + " applyFn " + this.lastName + city + place;
            }
        }

        console.log(person.fullName.apply(person1,['Oslo', 'home']))
    }


    function bindFn() {
        // Can
        const person = {
            firstName:"John",
            lastName: "Doe",
            fullName: function () {
                return this.firstName + " " + this.lastName;
            }
        }

        const member = {
            firstName:"Hege",
            lastName: "Dex",
        }

        let fullName = person.fullName.bind(member);
        console.log(fullName())
    }

    callFn()
    applyFn()
    bindFn()
    const person = {
        firstName: "John",
        lastName: "Doe",
        fullName: function() {
            return `${this.firstName} 00 ${this.lastName}`
        }
    }



// This will return "John Doe":
    person.fullName();

    return (
        <>
            Call Apply Bind {person.fullName()}
        </>
    )
}