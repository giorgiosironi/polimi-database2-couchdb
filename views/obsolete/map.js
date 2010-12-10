function(doc) {
    if (doc.type == 'material' && doc.date_creation < '2010-01-01') {
        emit(doc.date_creation, doc);
    }
}
