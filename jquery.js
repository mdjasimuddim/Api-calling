//add jquery library cdn
// ajax - asynchronous javascript and xml

const makeRequest = async(url, method) => {
    try{
        const result = await $.ajax({
            url : url,
            method : method
        })
        return result;
    }catch(err){
        console.log(err)
    }
}

const getData = () => {
    makeRequest("https://jsonplaceholder.typicode.com/posts", "GET").then(
        (res) => console.log(res)
    )
}
getData();