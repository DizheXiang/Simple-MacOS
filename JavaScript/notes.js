var openNotes = document.querySelector(".open-notes")
var closeNotes = document.querySelector(".close-notes")
var app_name_notes = document.querySelector("#Notes")
var notes = document.querySelector(".notes")
var point_note = document.querySelector("#point-note")

var adding = document.querySelector("#adding")
var deleting = document.querySelector("#deleting")
var lists = document.querySelector(".content-lists")
var content_body = document.querySelector(".content-body")

openNotes.addEventListener("click", () =>
  open_window(notes, point_note, app_name_notes)
)
closeNotes.addEventListener("click", () =>
  close_window(notes, point_note, app_name_notes)
)

adding.addEventListener("click", handleAdding)
deleting.addEventListener("click", handleDeleting)

function handleAdding() {
    var create_input = document.createElement("div")
    create_input.innerHTML = `<input placeholder="Enter the title"></input>`
    lists.append(create_input)
    content_body.style.display = "block"
}
  
function handleDeleting() {
    var inputChild = document.querySelector(".content-lists div")
    inputChild.remove()
    content_body.style.display = "none"
}
