function(doc) {
    if (doc.type == 'material') {
        emit(doc.status, doc);
    }
}
