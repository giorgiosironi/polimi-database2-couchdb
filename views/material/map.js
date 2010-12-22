function(doc) {
    if (doc.type == 'material' && doc.status != 'retired') {
        emit(null, doc);
    }
}
