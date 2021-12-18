//? Json.parse feels like cheating but... oh well 🙄
let input = require("./input").module.inputText.map(JSON.parse);

//node has {value, rightNode, leftNode, parent, type(leaf, branch, root)}
const inorder = (x) => {
  if (x.type == "leaf") {
    return [x];
  } else {
    return inorder(x.left).concat(inorder(x.right));
  }
};

const inorderExplode = (x, depth = 0) => {
  if (
    x.type == "node" &&
    x.left.type == "leaf" &&
    x.right.type == "leaf" &&
    depth >= 4
  ) {
    const zeroTree = constructTree(0, x.parent);

    if (x.parent.left == x) {
      x.parent.left = zeroTree;
    } else if (x.parent.right == x) {
      x.parent.right = zeroTree;
    }

    return [zeroTree, x.left.val, x.right.val];
  } else if (x.type == "node") {
    const left = inorderExplode(x.left, depth + 1);
    if (left != null) return left;

    const right = inorderExplode(x.right, depth + 1);
    if (right != null) return right;
  }

  return null;
};

const inorderSplit = (x) => {
  if (x.type == "leaf" && x.val >= 10) {
    const newTree = constructTree(
      [Math.floor(x.val / 2), Math.ceil(x.val / 2)],
      x.parent
    );
    if (x.parent.left == x) {
      x.parent.left = newTree;
    } else if (x.parent.right == x) {
      x.parent.right = newTree;
    }

    return true;
  } else if (x.type == "node") {
    if (inorderSplit(x.left)) return true;
    if (inorderSplit(x.right)) return true;
  }

  return false;
};

const constructTree = (x, parent = null) => {
  if (typeof x == "number") {
    return { type: "leaf", val: x, parent: parent };
  }

  const self = { type: "node", parent: parent };
  self["left"] = constructTree(x[0], self);
  self["right"] = constructTree(x[1], self);
  return self;
};

const addToTree = (x, y) => {
  const self = { type: "node", left: x, right: y };
  x.parent = self;
  y.parent = self;
  return self;
};
const reduce = (tree) => {
  let changed;
  do {
    changed = false;

    const res = inorderExplode(tree);
    if (res != null) {
      const [zeroTree, left, right] = res;
      const pieces = inorder(tree);
      const i = pieces.indexOf(zeroTree);
      if (i > 0) pieces[i - 1].val += left;
      if (i < pieces.length - 1) pieces[i + 1].val += right;
      changed = true;
    } else {
      changed = inorderSplit(tree);
    }
  } while (changed);
  return tree;
};

const getTreeMagnitude = (tree) => {
  if (tree.type == "leaf") {
    return tree.val;
  }
  return 3 * getTreeMagnitude(tree.left) + 2 * getTreeMagnitude(tree.right);
};

//? part1
// let tree = makeTree(input[0]);
// for (let i = 1; i < input.length; i++) {
//   tree = reduce(addToTree(tree, makeTree(input[i])));
// }
// console.log(magnitude(tree));
//? part2
let maxMagnitude = null;
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input.length; j++) {
    if (i == j) continue;
    const tree = reduce(
      addToTree(constructTree(input[i]), constructTree(input[j]))
    );
    const currMagnitude = getTreeMagnitude(tree);

    if (maxMagnitude < currMagnitude) {
      maxMagnitude = currMagnitude;
    }
  }
}

console.log(maxMagnitude);
