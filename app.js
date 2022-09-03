// Question 1

function showRating(rating){
    let ratings = ""
    for(let i =0; i < Math.floor(rating); ++i){
        ratings = ratings + "*"
        if (i !== Math.floor(rating) - 1){
            ratings = ratings + " "
        }
    }
    if (!Number.isInteger(rating)){
        ratings = ratings + " ."
    }
    return ratings
}

console.log(showRating(3.5))

// Question 2

function lowToHigh(arr){
    return arr.sort((a, b) => a - b)
}

console.log(lowToHigh([20, 40, 10, 30, 50, 100, 5]))

// Question 3

function objects(arr){
    return arr.sort((a, b) => b.price - a.price)
}

console.log(objects([
    {id: 1, price: 50},
    {id: 2, price: 30},
    {id: 3, price: 60},
    {id: 4, price: 10},
]))

// Question 5

async function postsByUser(userId){
    const promise = await fetch ("https://jsonplaceholder.typicode.com/posts");

    const result = await promise.json()

    const posts = result.filter(element => element.userId === userId)

    console.log(posts) 
}

postsByUser(4);

// Question 6

async function incompleteTodos(userId){
    const promise = await fetch ("https://jsonplaceholder.typicode.com/todos");
    
    const result = await promise.json()

    const posts = result.filter(element => !element.completed).slice(0, 6)

    console.log(posts) 
}

incompleteTodos(6);