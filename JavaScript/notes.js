var openNotes = document.querySelector(".open-notes")
var closeNotes = document.querySelector(".close-notes")
var adding = document.querySelector("#adding")
var deleting = document.querySelector("#deleting")

var app_name_notes = document.querySelector("#Notes")
var notes = document.querySelector(".notes")
var point_note = document.querySelector("#point-note")
var objects = document.querySelector(".notes-content-names")
var content_typing = document.querySelector(".content-typing")

openNotes.addEventListener("click", () =>
  open_window(notes, point_note, app_name_notes)
)
closeNotes.addEventListener("click", () =>
  close_window(notes, point_note, app_name_notes)
)
adding.addEventListener("click", handleAdding)
deleting.addEventListener("click", handleDeleting)

function handleAdding() {
    var create_input = document.createElement("input")
    create_input.placeholder = "Enter the title"
    objects.append(create_input)
}
  
function handleDeleting() {
    var inputChild = document.querySelector(".notes-content-names input")
    inputChild.remove()
    content_typing.style.display = "none"
}
  
function handleNotes() {
    content_typing.style.display = "block"
}