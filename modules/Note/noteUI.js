import { FormUI } from "../Form/formUI.js";
import Note from "../Note.js";
import noteState from "./noteState.js";

export class NoteUI {
    static notesEl = document.querySelector("#note-list");
    static editEl = null;

    static displayNotes() {
        const notes = noteState.getNotes();

        notes.forEach((note) => {
            NoteUI.addNote(note);
        });
    }

    static createElement({ name, created, category, content, dates }) {
        const rowEl = document.createElement("tr");

        rowEl.innerHTML = `
            <td>${name}</td>
            <td>${created}</td>
            <td>${category}</td>
            <td>${content}</td>
            <td>${dates}</td>
            <td>
                <button type="button" class="btn btn-secondary delete"><i class="fas fa-trash"></i></button>
                <button type="button" class="btn btn-secondary edit"><i class="fas fa-pen"></i></button>
                <button type="button" class="btn btn-secondary archive"><i class="fas fa-archive"></i></button>
            </td>
        `;
        return rowEl;
    }

    static addNote(note) {
        const rowEl = NoteUI.createElement(note);

        NoteUI.notesEl.append(rowEl);
    }

    static replaceNote(note) {
        const rowEl = NoteUI.createElement(note);

        NoteUI.notesEl.replaceChild(rowEl, NoteUI.editEl);

        NoteUI.editEl = null;
        FormUI.noteFormEl.classList.remove("edit");
    } 

    static editNote(trEl) {
        NoteUI.editEl = trEl;

        const name = trEl.children[0].textContent;
        const category = trEl.children[2].textContent;
        const content = trEl.children[3].textContent;

        FormUI.setForm(name, category, content);
    }
}
