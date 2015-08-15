function list() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [
        {
            date: '12/1/2011',
            reading: 3,
            id: 20055
    },
        {
            date: '13/1/2011',
            reading: 5,
            id: 20053
    },
        {
            date: '14/1/2011',
            reading: 6,
            id: 45652
    }
]; // initializes an empty array to store list elements
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.length = length;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.length = length;
    this.contains = contains;
}

function append(element) {
    this.datastore[this.listSize++] = element;
}

function find(element) {
    for (i = 0; i <= datastore.length; ++i) {
        if (this.datastore[i] == element) {
            return i;
        }

    }
    return -1;

}

function remove(element) {
    var foundAt = find(element);
    if (foundAt > -1) {
        datastore.splice(foundAt, 1);
        --this.listSize;
        return true;
    }
    return false;
}