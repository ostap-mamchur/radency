import { ArchiveUI } from "../Archive/archiveUI.js";
import Note from "../Note.js";
import { NoteUI } from "../Note/noteUI.js";

export class FormUI {
    static nameEl = document.querySelector("#name");
    static categoryEl = document.querySelector("#category");
    static contentEl = document.querySelector("#content");

    static noteFormEl = document.querySelector("#note-form");
    static toggleButtonEl = document.querySelector("#toggle-btn");

    static clearForm() {
        FormUI.nameEl.value = "";
        FormUI.categoryEl.value = "";
        FormUI.contentEl.value = "";

    }

    static getForm() {

        let date = new Date().toISOString();

        if (NoteUI.editEl) {
            date = NoteUI.editEl.children[1].textContent;
        }
        if (ArchiveUI.editEl) {
            date = ArchiveUI.editEl.children[1].textContent;
        }

        const { value: name } = FormUI.nameEl;
        const { value: category } = FormUI.categoryEl;
        const { value: content } = FormUI.contentEl;

        return new Note(name, category, date, content);
    }

    static toggleForm() {
        FormUI.noteFormEl.classList.toggle("d-none");
    }

    static setForm(name, category, content, className){
        if (FormUI.noteFormEl.classList.contains("d-none")) {
            FormUI.noteFormEl.classList.remove("d-none");
        }
        FormUI.nameEl.value = name;
        FormUI.categoryEl.value = category;
        FormUI.contentEl.value = content;
        FormUI.noteFormEl.classList.add(className);
    }
}