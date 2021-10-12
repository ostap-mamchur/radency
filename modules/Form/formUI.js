import Note from "../Note.js";

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
        const { value: name } = FormUI.nameEl;
        const { value: category } = FormUI.categoryEl;
        const { value: content } = FormUI.contentEl;

        return new Note(name, category, content);
    }

    static toggleForm() {
        FormUI.noteFormEl.classList.toggle("d-none");
    }

    static setForm(name, category, content){
        FormUI.nameEl.value = name;
        FormUI.categoryEl.value = category;
        FormUI.contentEl.value = content;
        FormUI.noteFormEl.classList.add("edit");
    }
}