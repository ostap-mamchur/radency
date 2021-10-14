import { archives } from "../../data/archiveData.js";

class ArchiveState {
    constructor(initialState = []) {
        this.initialState = initialState;
    }

    getArchives() {
        return this.initialState;
    }
}

export default new ArchiveState(archives);
