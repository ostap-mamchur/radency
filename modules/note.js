class Note {
    constructor (name, category, created = new Date().toISOString(), content) {
        this.name = name;
        this.setCreate(created);
        this.category = category;
        this.content = content;
        this.dates = this.searchForDate(content) || [];
    }

    //todo
    searchForDate(content) {
        debugger;
        const dateRegexp =
            /\b\d{1,2}\/\d{1,2}\/\d{4}\b/g;
        
        return content.match(dateRegexp);
    }

    setCreate(created) {
        const dateRegexp = /^\d{4}-\d{2}-\d{2}/;

        this.created = created.match(dateRegexp)[0];
    }
}

export default Note;