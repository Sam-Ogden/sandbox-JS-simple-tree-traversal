function Tree(value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;
}
Tree.prototype.insert = function(value) {
  value <= this.value &&
    (this.left ? this.left.insert(value) : (this.left = new Tree(value)));
  value > this.value &&
    (this.right ? this.right.insert(value) : (this.right = new Tree(value)));
};

/*
 *       5
 *    3    8
 *  2  4  7  9
 */
const root = new Tree(5);
[3, 8, 2, 4, 7, 9].forEach(i => root.insert(i));

function dfsTraversal(root, order = "pre") {
  const array = [];

  function traverse(node) {
    order === "pre" && array.push(node.value);
    node.left && traverse(node.left);
    order === "in" && array.push(node.value);
    node.right && traverse(node.right);
    order === "post" && array.push(node.value);
  }

  traverse(root, array);
  return array.join(" - ");
}

function bfsTraversal(root) {
  const array = [];
  const queue = [root];

  while (queue.length) {
    const current = queue.pop();
    array.push(current.value);
    current.left && queue.unshift(current.left);
    current.right && queue.unshift(current.right);
  }

  return array.join(" - ");
}

document.getElementById("app").innerHTML = `
<style>p { font-size: 20 }</style>
<h3>Depth First Traversal</h3>
<p>pre order traversal: ${dfsTraversal(root)}</p>
<p>in order traversal: ${dfsTraversal(root, "in")}</p>
<p>post order traversal: ${dfsTraversal(root, "post")}</p>

<h3>Breadth First Traversal</h3>
<p>BFS: ${bfsTraversal(root)}</p>
`;
