/**
 * This functions executes the Prim`s algorithm to find minimum spanning tree
 * and records its execution time
 *
 * @param nodes - number of vertex
 * @param matrix - weighted graph
 */

/**
 *Find minimum spanning tree using Prim`s algorithm
 *
 * @param nodes - number of nodes in the graph
 * @param matrix - input weight matrix
 */

function getPrimsMst(nodes, matrix) {
    var starttime = new Date().getTime();
    document.write("Prim`s algorithm started executing - ", "<br>");
    var nodes = nodes;

    // Nodes array keeping track of weights
    var weights = [];
    for (var i = 0; i < nodes; i++) {
        weights.push(Infinity);
    }
    weights[0] = 0;
    console.log('weights', weights);

    // Parent array keeping track of parent of the node
    var parent = [];
    for (var i = 0; i < nodes; i++) {
        parent.push(undefined);
    }
    parent[0] = -1;
    console.log('parent', parent);

    // Keeping track of visited nodes
    var visited = [];
    for (var i = 0; i < nodes; i++) {
        visited.push(false);

    }
    console.log('visited', visited);


    for (var j = 0; j < nodes; j++) {
        var currentNode = getNodeWithMinWeight(weights, visited, nodes);
        visited[currentNode] = true;
        for (var vertex = 0; vertex < nodes; vertex++) {
            if (matrix[currentNode][vertex] > 0 && visited[vertex] == false && weights[vertex] > matrix[currentNode][vertex]) {
                weights[vertex] = matrix[currentNode][vertex];
                parent[vertex] = currentNode;
            }
        }
    }
    var currentdate = new Date();
    var endtime = currentdate.getTime(); // TODO - Get time in micro seconds
    var TimeDiff = endtime - starttime;
    document.write("The minimum cost spanning tree of the connected input graph is - ", "<br>");
    var minimumCost = 0;
    for (var i = 1; i < nodes; i++) {
        document.write("(", parent[i], "-", i, ")", " edge cost=", matrix[i][parent[i]]);
        document.write("<br>");
        minimumCost = minimumCost + matrix[i][parent[i]];
        console.log("(", parent[i], "-", i, ")", " edge cost=", matrix[i][parent[i]]);
    }
    document.write("The minimum cost spanning tree of the connected input graph is - ", minimumCost, "<br>");
    document.write('Execution time for Prims Algorithm in milliseconds:', TimeDiff);
    document.write("<br>");
}

function getNodeWithMinWeight(current, visited, nodes) {
    var minimum = Infinity;
    var current_node;
    for (var i = 0; i < nodes; i++) {
        if (current[i] < minimum && visited[i] == false) {
            minimum = current[i];
            current_node = i;
        }
    }
    return current_node;
}
