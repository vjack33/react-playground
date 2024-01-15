function PromiseApp() {

    // let p1 = fetch('https://jsonplaceholder.typicode.com/todos/1')
    //     // .then(response => response.json()).then(data => data).catch(e => console.log(e))
    //
    // let p2 = fetch('https://jsonplaceholder.typicode.com/todos/2')
    //     // .then(response => response.json()).then(data => data).catch(e => console.log(e))
    //
    // let p3 = fetch('https://jsonplaceholder.typicode.com/todos/3')
    //     // .then(response => response.json()).then(data => data).catch(e => console.log(e))
    //
    // let f2 = fetch('https://ddjsonplaceholder.typicode.com/todos/2')
    //     // .then(response => response.json()).then(data => data).catch(e => console.log(e))

    let p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("resolve p1")
        }, 200)
    })

    let p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("resolve p2")
        }, 400)
    })

    let p3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("resolve p3")
        }, 600)
    })

    let f2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("reject f2")
        }, 400)
    })



    Promise.all([p1, p2, p3])
        .then(data => console.log("all",data))
        .catch(e => console.log)

    Promise.all([p1, f2, p3])
        .then(data => console.log("all f2:",data))
        .catch(e => console.log("all f2:", e))

    Promise.allSettled([p1, p2, p3])
        .then(data => console.log("allSettled",data))
        .catch(e => console.log(e))

    Promise.allSettled([p1, f2, p3])
        .then(data => console.log("allSettled f2:",data))
        .catch(e => console.log)

    Promise.race([p1, p2, p3])
        .then(data => console.log("race",data))
        .catch(e => console.log)

    Promise.race([p1, f2, p3])
        .then(data => console.log("race f2:",data))
        .catch(e => console.log(e))

    Promise.any([p1, p2, p3])
        .then(data => console.log("any:",data))
        .catch(e => console.log)

    Promise.any([p1, f2, p3])
        .then(data => console.log("any f2:", data))
        .catch(e => console.log)



    return (
        <>Promise</>
    )
}

export default PromiseApp;