class Note {
    constructor (name, category, content) {
        this.name = name;
        this.created = new Date().getTime();
        this.category = category;
        this.content = content;
        this.dates = [];
    }
}

export default Note;