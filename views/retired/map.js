function(doc) {
    if (doc.type == 'material' && doc.status == 'retired') {
        emit(doc.date_creation, doc);
    }
}
