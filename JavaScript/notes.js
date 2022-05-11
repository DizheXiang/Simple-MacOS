// import NotesAPI from "./NotesAPI"
// import NotesView from "./NotesView"

// const app = document.getElementById("notesApp")
// const view = new NotesView(app, {
//     onNoteSelect() {
//         console.log("Note has been selected")
//     }
// })

var openNotes = document.querySelector(".open-notes")
var closeNotes = document.querySelector(".close-notes")
var adding = document.querySelector("#adding")
var deleting = document.querySelector("#deleting")
var lists = document.querySelector(".notes-content-lists")
var content_body = document.querySelector(".content-typing")

var app_name_notes = document.querySelector("#Notes")
var notes = document.querySelector(".notes")
var point_note = document.querySelector("#point-note")

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
    lists.append(create_input)
}
  
function handleDeleting() {
    var inputChild = document.querySelector(".notes-content-lists input")
    inputChild.remove()
    // content_body.style.display = "none"
}
  
function handleNotes() {
    content_body.style.display = "block"
}

// console.log(NotesAPI.getAllNotes())
