export default class NotesView {
    constructor(root, { onNoteSelect, onNoteAdd, onNoteEdit, onNoteDelete } = {}) {
        this.root = root;
        this.onNoteSelect = onNoteSelect;
        this.onNoteAdd = onNoteAdd;
        this.onNoteEdit = onNoteEdit;
        this.onNoteDelete = onNoteDelete;
        this.root.innerHTML = `
            <div class="notes_top">
                <button class="close-notes"></button>
                <button class="notes__add" type="button">
                    <img src="https://img.icons8.com/material-rounded/25/000000/insert-page.png"/>
                </button>
                <button class="notes__delete" type="button">
                    <img src="https://img.icons8.com/ios-glyphs/25/000000/delete-forever.png"/>
                </button>
            </div>
            <div class="notes_bottom">
                <div class="notes__sidebar">
                    <div class="notes__list"></div>
                </div>
                <div class="notes__preview">
                    <input class="notes__title" type="text" placeholder="New Note">
                    <textarea class="notes__body" placeholder="Note starts here..."></textarea>
                </div>
            </div>
        `;

        const btnAddNote = this.root.querySelector(".notes__add");
        const btnDeleteNote = this.root.querySelector(".notes__delete");
        const inpTitle = this.root.querySelector(".notes__title");
        const inpBody = this.root.querySelector(".notes__body");
        const closeNotes = document.querySelector(".close-notes")

        btnAddNote.addEventListener("click", () => {
            this.onNoteAdd();
        });
        
        btnDeleteNote.addEventListener("click", () => {
            const notesListContainer = this.root.querySelector(".notes__list");
            notesListContainer.querySelectorAll(".notes__list-item").forEach(noteListItem => {
                noteListItem.addEventListener("click", () => {
                    const doDelete = confirm("Are you sure you want to delete this note?");
    
                    if (doDelete) {
                        this.onNoteDelete(noteListItem.dataset.noteId);
                    }
                });
            });
        });

        closeNotes.addEventListener("click", () =>
            close_window(notes, point_note, app_name_notes)
        );

        [inpTitle, inpBody].forEach(inputField => {
            inputField.addEventListener("blur", () => {
                const updatedTitle = inpTitle.value.trim();
                const updatedBody = inpBody.value.trim();

                this.onNoteEdit(updatedTitle, updatedBody);
            });
        });

        this.updateNotePreviewVisibility(false);
    }

    _createListItemHTML(id, title, body, updated) {
        const MAX_BODY_LENGTH = 60;

        return `
            <div class="notes__list-item" data-note-id="${id}">
                <div class="notes__small-title">${title}</div>
                <div class="notes__small-body">
                    ${body.substring(0, MAX_BODY_LENGTH)}
                    ${body.length > MAX_BODY_LENGTH ? "..." : ""}
                </div>
                <div class="notes__small-updated">
                    ${updated.toLocaleString(undefined, { dateStyle: "full", timeStyle: "short" })}
                </div>
            </div>
        `;
    }

    updateNoteList(notes) {
        const notesListContainer = this.root.querySelector(".notes__list");

        // Empty list
        notesListContainer.innerHTML = "";

        for (const note of notes) {
            const html = this._createListItemHTML(note.id, note.title, note.body, new Date(note.updated));

            notesListContainer.insertAdjacentHTML("beforeend", html);
        }

        // Add select/delete events for each list item
        notesListContainer.querySelectorAll(".notes__list-item").forEach(noteListItem => {
            noteListItem.addEventListener("click", () => {
                this.onNoteSelect(noteListItem.dataset.noteId);
            });

            noteListItem.addEventListener("dblclick", () => {
                const doDelete = confirm("Are you sure you want to delete this note?");

                if (doDelete) {
                    this.onNoteDelete(noteListItem.dataset.noteId);
                }
            });

        });
    }

    updateActiveNote(note) {
        this.root.querySelector(".notes__title").value = note.title;
        this.root.querySelector(".notes__body").value = note.body;

        this.root.querySelectorAll(".notes__list-item").forEach(noteListItem => {
            noteListItem.classList.remove("notes__list-item--selected");
        });

        this.root.querySelector(`.notes__list-item[data-note-id="${note.id}"]`).classList.add("notes__list-item--selected");
    }

    updateNotePreviewVisibility(visible) {
        this.root.querySelector(".notes__preview").style.visibility = visible ? "visible" : "hidden";
    }
}
