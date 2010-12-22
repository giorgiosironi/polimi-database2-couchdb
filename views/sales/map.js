function(doc) {
    if (doc.type == 'sale') {
        emit(doc.id, doc);
    }
}
