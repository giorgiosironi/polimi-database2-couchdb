function(doc) {
    if (doc.type == 'material') {
        emit([doc.creation_year, doc.creation_month, doc.creation_day], 1);
    }
}
