//axis is a js library
// it helps to make request from browser (plain Js / Vue js / react js)


//very easy to use
//it supports all modern including IE
//it returns promise
//throw error brilliantly
 // No need to set header, cause is intelligent

 //get

// axios.get("https://jsonplaceholder.typicode.com/posts")
// .then((res) => console.log(res.data))

//post


axios.post("https://jsonplaceholder.typicode.com/posts", {
    method:"POST",
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),
})
.then((res) => console.log(res.data.body))
.catch((err) => console.log(err))