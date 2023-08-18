const COHORT_NAME = "2306-GHP-ET-WEB-FT-SF"
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

// write a function to fetch all data from API
export async function fetchAllData() {
    try{
        const response = await fetch(`${BASE_URL}/posts`)
        const result = await response.json()
        console.log(result);
        return result;
    } catch(error) {
        console.log(error)
    }
}

// write a function to get single post data
export async function fetchSinglePost(postId) {
    try{
        const response = await fetch(`${BASE_URL}/posts/${postId}`)
        const result = await response.json()
        const singlePost = result.data.posts
        return singlePost;
    } catch(error) {
        console.log("uhoh can't get single post info", error)
    }
}

// write a function to POST data to API(method/CRUD)

// write a function to DELETE data from API(method/CRUD)