import archiveState from "../Archive/archiveState.js";
import noteState from "../Note/noteState.js";

export class SummaryUI {
    static activeTaskEl = document.querySelector("#active-task");
    static archivedTaskEl = document.querySelector("#archived-task");
    static activeThoughtEl = document.querySelector("#active-thought");
    static archivedThoughtEl = document.querySelector("#archived-thought");
    static activeIdeaEl = document.querySelector("#active-idea");
    static archivedIdeaEl = document.querySelector("#archived-idea");

    static countSummary(data) {
        const values = {
            tasks: 0,
            thoughts: 0,
            ideas: 0,
        };

        data.forEach((value) => {
            switch (value.textContent) {
                case "Task":
                    values.tasks++;
                    break;
                case "Random Thought":
                    values.thoughts++;
                    break;
                case "Idea":
                    values.ideas++;
                    break;
            }
        });

        return values;
    }

    static displayActiveSummary(e) {
        const activeEls = e.target.querySelectorAll(".category-active");

        const { tasks, thoughts, ideas } = SummaryUI.countSummary(activeEls);

        SummaryUI.activeTaskEl.textContent = tasks;
        SummaryUI.activeThoughtEl.textContent = thoughts;
        SummaryUI.activeIdeaEl.textContent = ideas;
    }

    static displayArchivedSummary(e) {
        const archivedEls = e.target.querySelectorAll(".category-archived");
        console.log(archivedEls);
        const { tasks, thoughts, ideas } = SummaryUI.countSummary(archivedEls);

        SummaryUI.archivedTaskEl.textContent = tasks;
        SummaryUI.archivedThoughtEl.textContent = thoughts;
        SummaryUI.archivedIdeaEl.textContent = ideas;

    }
}
