// var openNotes = document.querySelector(".open-notes")
// var closeNotes = document.querySelector(".close-notes")
// var adding = document.querySelector("#adding")
// var deleting = document.querySelector("#deleting")

// var app_name_notes = document.querySelector("#Notes")
// var notes = document.querySelector(".notes")
// var point_note = document.querySelector("#point-note")
// var lists = document.querySelector(".content-list")
// var content_body = document.querySelector(".content-typing")

export default class NotesAPI {
    static getAllNotes() {
        const notes = JSON.parse(localStorage.getItem("notesapp-notes") || "[]");
        return notes.sort((a, b) => {
            return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
        });
    }

    static saveNote(noteToSave) {
        const notes = NotesAPI.getAllNotes();
        const existing = notes.find(note => note.id === noteToSave.id);

        if (existing) {
            // edit and update
            existing.title = noteToSave.title;
            existing.body = noteToSave.body;
            existing.updated = new Date().toISOString();
        } else {
            // insert
            noteToSave.id = Math.floor(Math.random() * 1000000);
            noteToSave.updated = new Date().toISOString();
            notes.push(noteToSave);
        }
        localStorage.setItem("notesapp-notes", JSON.stringify(notes));
    }

    static deleteNote(id) {
        const notes = NotesAPI.getAllNotes();
        const newNotes = notes.filter(note => note.id !== id);
        localStorage.setItem("notesapp-notes", JSON.stringify(newNotes));
    }
    
}