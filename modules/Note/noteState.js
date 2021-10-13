import { notes } from "../../data/noteData.js";

class NoteState {
    constructor(initialState = []) {
        this.initialState = initialState;
    }

    getNotes() {
        return this.initialState;
    }
}

export default new NoteState(notes);
