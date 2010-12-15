function(doc) {
    if (doc.type == 'sale') {
        emit(doc.segment, doc.amount);
    }
}
