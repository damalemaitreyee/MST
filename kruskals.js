/**
 * Find minimum spanning tree using Kruskal`s algorithm
 *
 * @param nodes - number of nodes in the graph
 * @param imatrix - input weight matrix
 */

function getKruskalsMst(nodes, imatrix) {
    document.write("------------------------------------------------------------- <br>");
    document.write("Kruskal`s algorithm started executing -");
    document.write("<br>");

    result_array = [];
    var nodes = nodes;
    var matrix = [];
    var weightedEdges = {};
    for (var i = 0; i < nodes; i++) {
        for (var j = 0; j < nodes; j++) {
            if (imatrix[i][j] !== -1) {
                matrix.push([i, j, imatrix[i][j]]);
                weightedEdges[[i, j]] = imatrix[i][j];
            }
        }
    }

    console.log('input', matrix);
    console.log('object', weightedEdges);

    var currentdate = new Date();
    var starttime = currentdate.getTime();

    var sortedArray = [];
    for (var key in weightedEdges) {
        sortedArray.push([key, weightedEdges[key]]);
    }
    sortedArray.sort(function (a, b) {
        return a[1] - b[1];
    });
    console.log('sortedArray', sortedArray);


    var parent = [];
    var rank = [];

    // Initialize parent and rank array
    for (var k = 0; k < nodes; k++) {
        parent.push(k); // every vertex is a parent of itself
        rank.push(0);
    }

    console.log('parent', parent);
    console.log('rank', rank);

    var j = 0;
    var i = 0;
    while (j < nodes - 1) {
        var sortedArrayElement = sortedArray[i];
        var edge = sortedArrayElement[0].split(',');
        var source = parseInt(edge[0]);
        var destination = parseInt(edge[1]);
        var weight = sortedArrayElement[1];
        i = i + 1;
        var sourceParent = find_parent(parent, source);
        var destParent = find_parent(parent, destination);
        if (sourceParent != destParent) {
            j = j + 1;
            result_array.push([source, destination, weight]);
            var x_rank = find_parent(parent, sourceParent);
            var y_rank = find_parent(parent, destParent);
            if (rank[x_rank] < rank[y_rank]) {
                parent[x_rank] = y_rank;
            } else if (rank[x_rank] > rank[y_rank]) {
                parent[y_rank] = x_rank;
            } else {
                parent[y_rank] = x_rank;
                rank[x_rank] = rank[x_rank] + 1;
            }
        } else {
            console.log('skiped the edge. forming cycle (', source, '->', destination, ')');
        }
        console.log('parent ', parent);
        console.log('rank ', rank);

    }

    var currentdate = new Date();
    var endtime = currentdate.getTime();
    var TimeDiff = endtime - starttime;

    var minimumCost = 0;
    document.write("The minimum cost spanning tree of the connected input graph is - ", "<br>");
    for (var a = 0; a < result_array.length; a++) {
        document.write("(", result_array[a][0], "-", result_array[a][1], ") edge cost=", result_array[a][2]);
        document.write("<br>");
        minimumCost = minimumCost + result_array[a][2];
    }
    document.write("The minimum cost spanning tree of the connected input graph is - ", minimumCost, "<br>");
    document.write('Execution time for Kruskal Algorithm in milliseconds: ', TimeDiff);
    document.write("<br>");
}

function find_parent(parent, vertex) {
    if (vertex == parent[vertex]) {
        return vertex;
    }
    return find_parent(parent, parent[vertex]);
}