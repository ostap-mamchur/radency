import archiveState from "./archiveState.js";
import { FormUI } from "../Form/formUI.js";

export class ArchiveUI {
    static archiveTableEl = document.querySelector("#archive-table");
    static openActiveButtonEl = document.querySelector("#open-active");
    static archiveEl = document.querySelector("#archive-list");

    static editEl = null;

    static createButtons() {
        const tdEl = document.createElement("td");
        tdEl.className = "buttons";
        tdEl.innerHTML = `
            <button type="button" class="btn btn-secondary unarchive">
                <i class="fas fa-book-open"></i>
            </button>
            <button type="button" class="btn btn-secondary delete">
                <i class="fas fa-trash"></i>
            </button>
            <button type="button" class="btn btn-secondary edit">
                <i class="fas fa-pen"></i>
            </button>
        `;
        return tdEl;

    }

    static showTable() {
        ArchiveUI.archiveTableEl.classList.remove("d-none");
    }
    static hideTable() {
        ArchiveUI.archiveTableEl.classList.add("d-none");
    }

    static displayArchives() {
        const archives = archiveState.getArchives();

        archives.forEach((archive) => {
            ArchiveUI.addArchive(archive);
        });
    }

    static addArchive(archive) {
        const rowEl = ArchiveUI.createElement(archive);

        ArchiveUI.archiveEl.prepend(rowEl);
    }

    static createElement({ name, created, category, content, dates }) {
        const rowEl = document.createElement("tr");

        rowEl.innerHTML = `
            <td>${name}</td>
            <td>${created}</td>
            <td class="category-archived">${category}</td>
            <td>${content}</td>
            <td>${dates}</td>
        `;
        rowEl.append(ArchiveUI.createButtons());
        return rowEl;
    }

    static archiveElement(el) {

        const category = el.querySelector(".category-active");
        category.classList.remove("category-active");
        category.classList.add("category-archived");

        el.replaceChild(
            ArchiveUI.createButtons(),
            el.querySelector(".buttons")
            
        );
        ArchiveUI.archiveEl.prepend(el);
    }

    static editArchive(trEl) {
        ArchiveUI.editEl = trEl;

        const name = trEl.children[0].textContent;
        const category = trEl.children[2].textContent;
        const content = trEl.children[3].textContent;

        FormUI.setForm(name, category, content, "archive-edit");
    }

    static replaceArchive(note) {
        const rowEl = ArchiveUI.createElement(note);

        ArchiveUI.archiveEl.replaceChild(rowEl, ArchiveUI.editEl);

        ArchiveUI.editEl = null;
        FormUI.noteFormEl.classList.remove("archive-edit");
    }
}