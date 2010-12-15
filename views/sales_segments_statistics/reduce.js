function(keys, values, rereduce) {
    total = 0;
    for (i in values) {
        total += values[i];
    }
    return total / values.length;
}
