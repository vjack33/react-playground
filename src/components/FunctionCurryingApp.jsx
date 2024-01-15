
function FunctionCurryingApp() {

    function calculateVolume(length) {
        return function (breadth) {
            return function (height) {
                return length * breadth * height
            }
        }
    }

    console.log(calculateVolume(2)(3)(4))

    return (
        <>
            Function Currying demo
        </>
    )
}

export default FunctionCurryingApp