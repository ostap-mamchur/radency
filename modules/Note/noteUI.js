import { FormUI } from "../Form/formUI.js";
import noteState from "./noteState.js";

export class NoteUI {
    static notesEl = document.querySelector("#note-list");
    static openArchiveButtonEl = document.querySelector("#open-archive");
    static noteTableEl = document.querySelector("#note-table");
    static editEl = null;

    static displayNotes() {
        const notes = noteState.getNotes();

        notes.forEach((note) => {
            NoteUI.addNote(note);
        });
    }

    static createButtons() {
        const tdEl = document.createElement("td");
        tdEl.className = "buttons";
        tdEl.innerHTML = `
            <button type="button" class="btn btn-secondary archive"><i class="fas fa-archive"></i></button>
            <button type="button" class="btn btn-secondary delete"><i class="fas fa-trash"></i></button>
            <button type="button" class="btn btn-secondary edit"><i class="fas fa-pen"></i></button>
        `;
        return tdEl;
    }

    static createElement({ name, created, category, content, dates }) {
        const rowEl = document.createElement("tr");

        rowEl.innerHTML = `
            <td>${name}</td>
            <td>${created}</td>
            <td class="category-active">${category}</td>
            <td>${content}</td>
            <td>${dates}</td>
        `;
        rowEl.append(NoteUI.createButtons());
        return rowEl;
    }

    static hideTable() {
        NoteUI.noteTableEl.classList.add("d-none");
    }
    static showTable() {
        NoteUI.noteTableEl.classList.remove("d-none");
    }

    static addNote(note) {
        const rowEl = NoteUI.createElement(note);

        NoteUI.notesEl.prepend(rowEl);
    }

    static replaceNote(note) {
        const rowEl = NoteUI.createElement(note);

        NoteUI.notesEl.replaceChild(rowEl, NoteUI.editEl);

        NoteUI.editEl = null;
        FormUI.noteFormEl.classList.remove("active-edit");
    }

    static editNote(trEl) {
        NoteUI.editEl = trEl;

        const name = trEl.children[0].textContent;
        const category = trEl.children[2].textContent;
        const content = trEl.children[3].textContent;

        FormUI.setForm(name, category, content, "active-edit");
    }

    static unarchiveElement(el) {
        const category = el.querySelector(".category-archived");
        category.classList.remove("category-archived");
        category.classList.add("category-active");
        

        el.replaceChild(
            NoteUI.createButtons(),
            el.querySelector(".buttons")
        );
        NoteUI.notesEl.prepend(el);
    }
}
