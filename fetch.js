//fetch() has replaced XMLHttpRequest
//fetch() - global method for making HTTP Request
// 2 ways to call - then, async await

// fetch() is easy to use compare to XMLHttpRequest
// fetch() returns a promise
// returned promise can only handle network error
// does not support all older browser

//then 

// fetch('https://jsonplaceholder.typicode.com/posts/101')
// .then((res) => {
//     if(!res.ok){
//         const message  = `Error:${res.status}`;
//         throw new Error(message)
//     }

//     return res.json()
// })
// .then((data) => console.log(data))
// .catch((err) => console.log(err))


//async await

const makeRequest = async (url, config) =>{
    const res = await fetch(url, config);
    if(!res.ok){
        const message =   `Error:${res.status}`;
        throw new Error(message)
    }
    const data = await res.json();
    return data;
}

const getData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: JSON.stringify({
          id: 1,
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
    .then((res)=> console.log(res))
    .catch((err) => console.log(err))
}

getData();