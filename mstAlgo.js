function select_algorithm(){
  var Algorithm=document.forms["Mstalgo"]["Algorithm"].value
  var nodes=document.forms["Mstalgo"]["nodes"].value;
  switch(Algorithm){
    case "prims":
        prims(nodes);
        break;
    case "kruskal":
        kruskal(nodes);
        break;
    case "both":
        compare(nodes);
   
   
  }
}


function prims(nodes){
document.write("The no of nodes are ",nodes);
document.write("<br>");
var currentdate = new Date();
var starttime= currentdate.getTime();
var nodes=nodes;
var matrix=[];
 for (var i = 0 ; i <nodes ; i++) {
    matrix[i] = []; // Initialize inner array
    for (var j = 0; j < nodes; j++) { // i++ needs to be j++
        matrix[i][j] =  Math.floor(Math.random() * 101);
    }
  }
console.log(matrix) 

var current=[];

for (var i=0;i<nodes;i++){
  current.push(Infinity);

} 
current[0]=0;
console.log('current',current);


var parent=[];
for (var i=0;i<nodes;i++){
  parent.push(undefined);

} 
parent[0]=-1;
console.log('parent',parent);
var visited=[];
for (var i=0;i<nodes;i++){
  visited.push(false);

} 
console.log('visited',visited);

for(var j=0;j<nodes;j++){
  i=minimumkey(current,visited)
 visited[current_node] = true;
    for(var vertices=0;vertices<nodes;vertices++){
      if(matrix[i][vertices]>0 && visited[vertices]==false && current[vertices]>matrix[i][vertices]){
        current[vertices] = matrix[i][vertices];
        parent[vertices] = current_node;
      }
    } 
}

for(var i=1;i<nodes;i++){
  document.write("v1 :-   ",parent[i],"  v2:-   ",i," weights   ",matrix[i] [parent[i]]);
  document.write("<br>");
   console.log("v1 :-   ",parent[i],"  v2:-   ",i," weights   ",matrix[i][parent[i]]);
} 
var currentdate = new Date();
var endtime = currentdate.getTime();
var TimeDiff=endtime-starttime 
document.write('Execution time for Prims Algorithm in milliseconds:',TimeDiff);
 document.write("<br>"); 
}


function kruskal(nodes){
document.write("The no of nodes are",nodes);
document.write("<br>");
var currentdate = new Date();
var starttime = currentdate.getTime();
  result_array=[];
  var nodes=nodes;
  var matrix=[];
  var obj={}
 for (var i = 0 ; i <nodes ; i++) {
    //matrix[i] = []; // Initialize inner array
    for (var j = 0; j < nodes; j++) { // i++ needs to be j++
      temp=Math.floor(Math.random() * 101);
        matrix.push ([i,j,temp]);
        obj[[i,j]]= temp ;

    }
   
  }
var sortedarray=[];
for(var key in obj){
 sortedarray.push([key,obj[key]]); 
}
sortedarray.sort(function(a, b) {
    return a[1] - b[1];
});
console.log('sortedarray',sortedarray)
//var i=0;
var j=0;
var parent=[];
var rank=[];
for(var k=0;k<nodes;k++){
  parent.push(k);
  rank.push(0)
}
  while (j< nodes-1){
     var a=sortedarray[i];
     var b=a[0].split(',');
     var source=parseInt(b[0]);
     var destination=parseInt(b[1]);
     var weight=a[1];
    i=i+1;
    var x=find_parent(parent,source) ;
     var y=find_parent(parent,destination); 
    if(x !=y){
        j=j+1;
        result_array.push([source,destination,weight])
        var x_rank=find_parent(parent,x) ;
        var y_rank=find_parent(parent,y); 
        if(rank[x_rank]<rank[y_rank]){
          parent[x_rank]=y_rank;
        }
        else if(rank[x_rank]>rank[y_rank]){
          parent[y_rank]=x_rank;
        }
        else{
          parent[y_rank]=x_rank;
          rank[x_rank]=rank[x_rank]+1;
        }
      }
  }
  for(var a =0 ;a<result_array.length;a++){
  document.write("v1 :-   ",result_array[a][0],"  v2:-   ",result_array[a][1],"weights   ",result_array[a][2]);
  document.write("<br>");
  }
var currentdate = new Date();
var endtime = currentdate.getTime();
var TimeDiff=endtime-starttime 
document.write('Execution time for Kruskal Algorithm in milliseconds: ',TimeDiff);
 document.write("<br>");
}


 function find_parent(parent,vertex){
  if(vertex==parent[vertex]){
    return vertex
  }
  return find_parent(parent,parent[vertex])
   }

function minimumkey(current,visited){
   var minimum = Infinity;
  for(var i=0; i<5; i++) {
   
    if(current[i]< minimum && visited[i]==false){
      minimum = current[i];
      current_node = i
    }

}
return current_node
}

function compare(nodes){
  prims(nodes)
  kruskal(nodes)
}