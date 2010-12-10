function(doc) {
    if (doc.type == 'material' && doc.status) {
        emit(doc.status, 1);
    }
}
