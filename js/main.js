function fetchProjectJson(callback) {
    fetch('json/tree_structure_json.json')
        .then(data => data.json())
        .then(rootNode => callback(rootNode));
}

