export default class NotesView {
    constructor(root, { onNoteSelect, onNoteAdd, onNoteEdit, onNoteDelete } = {}) {
        this.root = root;
        this.onNoteSelect = onNoteSelect;
        this.onNoteAdd = onNoteAdd;
        this.onNoteEdit = onNoteEdit;
        this.onNoteDelete = onNoteDelete;
        
        var openNotes = document.querySelector(".open-notes")
        var closeNotes = document.querySelector(".close-notes")

        var app_name_notes = document.getElementById("#Notes")
        var notes = document.querySelector(".notes")
        var point_note = document.querySelector("#point-note")

        const adding = document.getElementById("#adding")
        const deleting = document.getElementById("#deleting")
        const noteTitle = document.getElementById(".content-title")
        const noteBody = document.getElementById(".content-body")

        openNotes.addEventListener("click", () =>
        open_window(notes, point_note, app_name_notes)
        )
        closeNotes.addEventListener("click", () =>
        close_window(notes, point_note, app_name_notes)
        )

        adding.addEventListener("click", () => {
            this.onNoteAdd();
        })
        [titles, noteBody].forEach(inputField => {
            inputField.addEventListener("blur", () => {
                const updatedTitle = titles.value.trim();
                const updateBody = noteBody.value.trim();
                this.onNoteEdit(updatedTitle, updateBody);
            })
        });
        deleting.addEventListener("click", handleDeleting)
    }
}