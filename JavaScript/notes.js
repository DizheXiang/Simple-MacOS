// import NotesAPI from "./NotesAPI"
// import NotesView from "./NotesView"

var openNotes = document.querySelector(".open-notes")
var closeNotes = document.querySelector(".close-notes")
var app_name_notes = document.querySelector("#Notes")
var notes = document.querySelector(".notes")
var point_note = document.querySelector("#point-note")

var adding = document.querySelector("#adding")
var deleting = document.querySelector("#deleting")
var lists = document.querySelector(".content-lists")
var content_body = document.querySelector(".content-typing")

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
    var inputChild = document.querySelector(".content-lists input")
    inputChild.remove()
    // content_body.style.display = "none"
}
  
function handleNotes() {
    content_body.style.display = "block"
}

// const app = document.getElementById("notesApp")
// const view = new NotesView(app, {
//     onNoteAdd() {
//         console.log("Add a note");
//     },
//     onNoteEdit(newTitle, newBody) {
//       console.log(newTitle);
//       console.log(newBody);
//   }
// })

// view.updateNoteList(NotesAPI.getAllNotes());
