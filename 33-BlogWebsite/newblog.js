const form = document.querySelector("form");
const textarea = document.querySelector(".textareaForm");
const input = document.querySelectorAll(".input");

const BASE_URL = `http://localhost:8080`;
const id = new URLSearchParams(window.location.search).get("id");
console.log(id);

async function getBlogs() {
  try {
    let response = await axios(`${BASE_URL}/suppliers/${id}`);
    console.log(response.data);

    (input.value = response.data.title),
      (textarea.value = response.data.body),
      (option.value = response.data.author);
  } catch (error) {
    console.log(error);
  }
}

id && getBlogs();
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const blogs = {
    body: textarea.value,
    author: option.value,
  };

  if (!id) {
    axios.post(`${BASE_URL}`, blogs);
  } else {
    axios.patch(`${BASE_URL}/${id}`, blogs);
  }
  console.log(blogs);

  input.forEach((item) => {
    item.value = "";
  });
});

async function addBlogs(obj) {
  await axios.post(`${BASE_URL}/blogs`, obj);
  window.location = "home.html";
}
async function updateBlogs(obj) {
  await axios.patch(`${BASE_URL}/blogs/${id}`, obj);
  window.location = "home.html";
}
