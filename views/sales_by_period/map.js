function(doc) {
    if (doc.type == 'sale') {
        emit([doc.date_year, doc.date_month, doc.date_day], 1);
    }
}
