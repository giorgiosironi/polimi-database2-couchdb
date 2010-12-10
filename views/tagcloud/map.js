function(doc) {
    if (doc.tags) {
        for (i in doc.tags) {
            emit(doc.tags[i], 1);
        }
    }
}
