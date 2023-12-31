const COHORT_NAME = "2306-GHP-ET-WEB-FT-SF";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

// write a function to fetch all data from API
export async function fetchAllData() {
  try {
    const response = await fetch(`${BASE_URL}/posts`);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
}

// write a function to DELETE data from API(method/CRUD)
export async function deletePost(playerId) {
  try {
    // TODO
    const response = await fetch(`${BASE_URL}/posts/${playerId}`, {
      method: "DELETE",
    });
    const removedPlayer = await response.json();
    return;
  } catch (err) {
    console.error(
      `Whoops, trouble removing player #${playerId} from the roster!`,
      err
    );
  }
}

// login function
export async function loginUser(username, password, event) {
  event.preventDefault();
  try {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
}
