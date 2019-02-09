function fetchProjectJson(callback) {
    fetch('json/tree_structure_json.json')
        .then(data => data.json())
        .then(rootNode => callback(rootNode));
}

function getNodeLabel(nodes, id) {
    for (let i = 0; i < nodes.length; ++i) {
        if (nodes[i].id == id) { 
            return nodes[i].label;
        } else {
            let rez = getNodeLabel(nodes[i].nodes, id);
            if (rez != null) {
                return rez;
            }
        }
    }
    return null;
}


let i = parseInt(prompt("Enter node ID, please:", 2));
fetchProjectJson(rootNode => {
    let label = getNodeLabel([rootNode], i);
    alert(label);
});

