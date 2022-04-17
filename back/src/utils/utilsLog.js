function lineToJSON(line) {
    while (line.includes("  ")) {
        line = line.replace("  ", " ");
    }

    const months = {
        Jan: '01',
        Feb: '02',
        Mar: '03',
        Apr: '04',
        May: '05',
        Jun: '06',
        Jul: '07',
        Aug: '08',
        Sep: '09',
        Oct: '10',
        Nov: '11',
        Dec: '12',
    }

    let [p1, day, hour, p4, p5, ...rest] = line.split(' ');

    year = new Date().getFullYear();
    monht = months[p1];
    date = year.toString() + "-" + monht.toString() + "-" + day + " " + hour;
    ip = p4.replace("-", ".").slice(3);
    [type, idType] = p5.replace("]:", "").split("[");
    message = rest.join(' ');
    new_json = {
        date,
        ip,
        type,
        idType,
        message
    };
    return new_json;
}

module.exports = { lineToJSON }
