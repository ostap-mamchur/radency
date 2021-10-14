import { ArchiveUI } from "./Archive/archiveUI.js";
import { FormUI } from "./Form/formUI.js";
import { NoteUI } from "./Note/noteUI.js";
import { SummaryUI } from "./Summary/summaryUI.js";

export default class App {
    constructor() {
        this.startApp();
    }

    startApp() {
        document.addEventListener("DOMContentLoaded",() => {
            NoteUI.displayNotes();
            ArchiveUI.displayArchives();
        });

        NoteUI.notesEl.addEventListener(
            "DOMSubtreeModified",
            SummaryUI.displayActiveSummary
        );

        ArchiveUI.archiveEl.addEventListener(
            "DOMSubtreeModified",
            SummaryUI.displayArchivedSummary
        );

        FormUI.noteFormEl.addEventListener("submit", (e) => {
            const note = FormUI.getForm();

            e.preventDefault();

            if (FormUI.noteFormEl.classList.contains("active-edit")) {
                NoteUI.replaceNote(note);
            } else if (FormUI.noteFormEl.classList.contains("archive-edit")) {
                ArchiveUI.replaceArchive(note);
            } 
            else {
                NoteUI.addNote(note);
            }
            FormUI.clearForm();
        });
        
        NoteUI.openArchiveButtonEl.addEventListener("click", () => {
            ArchiveUI.showTable();
            NoteUI.hideTable();
        })

        ArchiveUI.openActiveButtonEl.addEventListener("click", () => {
            ArchiveUI.hideTable();
            NoteUI.showTable();
        })

        FormUI.toggleButtonEl.addEventListener("click", FormUI.toggleForm);

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
                trEl.remove();
                ArchiveUI.archiveElement(trEl);
            }
        });

        ArchiveUI.archiveEl.addEventListener("click", (e) => {
            const buttonEl = e.target.closest("button");
            if (!buttonEl) return;

            const trEl = buttonEl.closest("tr");
            if (!trEl) return;

            if (buttonEl.classList.contains("delete")) {
                trEl.remove();
            } else if (buttonEl.classList.contains("edit")) {
                ArchiveUI.editArchive(trEl);
            } else if (buttonEl.classList.contains("unarchive")) {
                trEl.remove();
                NoteUI.unarchiveElement(trEl);
            }
        })
    }
}
