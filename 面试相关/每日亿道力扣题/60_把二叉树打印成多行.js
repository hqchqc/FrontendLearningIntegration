/** 从上到下按层打印二叉树，同一层结点从左至右输出。每一层输出一行。 */
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Print(pRoot){
    if(!pRoot) return [];

    let res = [],
        temp = [];
    
    temp.push(pRoot);

    while(temp.length){
        res.push([]);
        // 这里注意一下不能将len直接放到循环中哦！
        let len = temp.length;
        for(let i = 0; i < len; i++){
            let root = temp.shift();
            res[res.length - 1].push(root.val)
            if(root.left){
                temp.push(root.left)
            }
            if(root.right){
                temp.push(root.right);
            }
        }
    }
    return res;    
}