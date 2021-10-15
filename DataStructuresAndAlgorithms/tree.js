/*
 * @Author: GZH
 * @Date: 2021-10-15 15:18:16
 * @LastEditors: GZH
 * @LastEditTime: 2021-10-15 15:30:21
 * @FilePath: \rewrite\DataStructuresAndAlgorithms\tree.js
 * @Description: 二叉树的前中后序遍历
 */
const root = {
  val: 'A',
  left: {
    val: 'B',
    left: {
      val: 'D',
    },
    right: {
      val: 'E',
    },
  },
  right: {
    val: 'C',
    right: {
      val: 'F',
    },
  },
};

// 二叉树的前序遍历
function preOrder(root) {
  if (!root) return;

  console.log(root.val);
  preOrder(root.left);
  preOrder(root.right);
}

// 二叉树的中序遍历
function inOrder(root) {
  if (!root) return;

  inOrder(root.left);
  console.log(root.val);
  inOrder(root.right);
}

// 二叉树的后序遍历
function postOrder(root) {
  if (!root) return;

  postOrder(root.left);
  postOrder(root.right);
  console.log(root.val);
}

// preOrder(root);
inOrder(root);
// postOrder(root);
