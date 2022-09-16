/**
 * This function
 *         - takes user input for number of nodes
 *         - prints the vertices of the input graph
 *         - generates and prints of the weights of the edges of the graph
 */
function inputNodes() {
    var nodes = document.forms["mst"]["nodes"].value;
    document.write("Vertices of the graph - ");
    for (var vertex = 0; vertex < nodes; vertex++) {
        document.write(vertex, "    ");
    }
    document.write("<br>");

    var matrix = [];

    // Initialize input matrix with -1
    for (var i = 0; i < nodes; i++) {
        matrix[i] = [];
        for (var j = 0; j < nodes; j++) {
            matrix[i][j] = -1;
        }
    }

    // Generate random weights
    for (var i = 0; i < nodes; i++) {
        for (var j = 0; j < nodes; j++) {
            if (i !== j && matrix[j][i] === -1) {
                matrix[i][j] = Math.floor(Math.random() * 90 + 10);
            }
        }
    }

    // make weight of undirected edge same
    for (var i = 0; i < nodes; i++) {
        for (var j = 0; j < nodes; j++) {
            if (i !== j && matrix[j][i] === -1) {
                matrix[j][i] = matrix[i][j];
            }
        }
    }

    // print the input matrix
    document.write("The input graph is - ");
    for (var i = 0; i < nodes; i++) {
        document.write("<br>");
        for (var j = 0; j < nodes; j++) {
            document.write(matrix[i][j], "  ");
        }
    }
    document.write("<br>");
    document.write("------------------------------------------------------------- <br>");

    // call Prim`s
    getPrimsMst(nodes, matrix);

    // call Kruskal`s
    getKruskalsMst(nodes, matrix);
}