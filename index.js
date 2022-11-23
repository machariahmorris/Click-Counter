let counter = document.getElementById("count")
let saved = document.getElementById("saved")
let count = 0
function counted() {
    count = count + 1
    counter.innerHTML = count
}
function save() {
    let savedClick = count + " + "
    saved.innerHTML += savedClick
    counter.innerHTML = 0
    count = 0
}