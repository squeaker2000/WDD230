alert("Hi there! Good morning!");

console.log("Hi there! Good morning!");

function add_item() {
    let user_text = document.querySelector("#user_text").value;
    let li = document.createElement("li");
    li.innerHTML = user_text;

    document.querySelector("#my_list").appendChild(li);
}