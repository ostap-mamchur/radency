import { FormUI } from "./Form/formUI.js";
import { NoteUI } from "./Note/noteUI.js";

export default class App {
    constructor() {
        this.startApp();
    }

    startApp() {
        document.addEventListener("DOMContentLoaded", function (event) {
            NoteUI.displayNotes();
        });

        FormUI.noteFormEl.addEventListener("submit", (e) => {
            const note = FormUI.getForm();

            e.preventDefault();

            if (FormUI.noteFormEl.classList.contains("edit")) {
                NoteUI.replaceNote(note);
            } else {
                NoteUI.addNote(note);
            }
            FormUI.clearForm();
        });

        FormUI.toggleButtonEl.addEventListener("click", (e) => {
            FormUI.toggleForm();
        });

        NoteUI.notesEl.addEventListener("click", (e) => {
            const buttonEl = e.target.closest("button");
            if (!buttonEl) return;

            const trEl = buttonEl.closest("tr");
            if (!trEl) return;

            if (buttonEl.classList.contains("delete")) {
                trEl.remove();
            } else if (buttonEl.classList.contains("edit")) {
                NoteUI.editNote(trEl);
            } else if (buttonEl.classList.contains("archive")) {
                NoteUI.archiveNote(trEl);
            }
        });
    }
}
