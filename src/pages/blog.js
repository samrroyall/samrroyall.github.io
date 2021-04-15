import React from "react";
import nightOwlLight from "prism-react-renderer/themes/nightOwlLight";
// components
import Article from "../components/Article";
import CodeBlock from "../components/CodeBlock";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import SEO from "../components/SEO";
// iamges
import boardString from "../../static/images/board-string.png";
import defaultKlotskiBoard from "../../static/images/default-klotski.png";
import dijkstraTree from "../../static/images/dijkstra-tree.png";
import klotskiTree from "../../static/images/klotski-tree-1.png";

const dfsCode = (
`function DFS(root: Node): void {
    if (root.isSolved === true) {
        // if root is solved, we're done!
        console.log("Solved!");
        return;
    }
    // if not, call DFS() on each of root's
    // children
    for (let child of root.children) {
        DFS(child);
    }
}`
);
const bfsCode = (
`function BFS(root: Node): void {
    // initialize our queue with root as
    // the only element
    let queue: Array<Node> = [root];
    while (queue.length > 0) {
        // while the queue is not empty,
        // take the next element
        let next: Node = queue.shift(); 
        if (next.isSolved === true) {
            // if it's solved, we're done!
            console.log("Solved!");
            return;
        }
        // if not, add its children to the
        // back of the queue
        for (let child of next.children) {
            queue.push(child);
        }
    }
}`
);
const dijkstraCode = (
`function Dijkstra(root: Node): Array<Node> {
    let solution: Array<Node> = [];
    // initialize our queue with root as
    // the only element
    let queue: Array<Node> = [root];
    while (queue.length > 0) {
        // while the queue is not empty,
        // take the next element
        let next: Node = queue.shift(); 
        if (next.isSolved === true) {
            // if it's solved, then
            while (next !== null) {
                // while our node exists, 
                // add it to the front of 
                // the solution array...
                solution.unshift(next);
                // and look at its parent
                next = next.parent;
            }
            return solution;
        }
        // if not, add its children to the
        // back of the queue
        for (let child of next.children) {
            queue.push(child);
        }
    }
    return solution;
}`
);

export default function Blog() {

    return (
        <>
        <SEO title="Sam Royall - Blog" />
        <Nav />
        <main>
            <Article 
                id="dijkstraArticle"
                pos={0}
                title="Using Dijkstra's Algorithm to Solve Klotski Puzzles"
                content={
                    <>
                    <p>In Summer 2020, my roommate and I watched a Computerphile <a href="https://www.youtube.com/watch?v=G_UYXzGuqvM">video</a> in which Computer Science professor Thorsten Altenkirch created a Sudoku solver in Python. The video was informative and entertaining, and Altenkirch's program was interesting and elegant. Toward the end of the video, however, Altenkirch introduced a "tricky" puzzle called <span className="em">Klotski</span>.
                    This puzzle consisted of a 5x4 board and a group of wooden blocks covering its surface. These blocks came in three sizes: 2x2, 2x1, and 1x1. There was one 2x2 block on the board by design and two uncovered spaces. The goal - to move the 2x2 block to a predefined area of the board (the bottom of the board in this case) by sliding the blocks one by one.</p>
                    <figure>
                        <img className="vertical" src={defaultKlotskiBoard} caption="testing" alt="Altenkirch’s Klotski Puzzle"/>
                        <figcaption>Altenkirch's Klotski Puzzle</figcaption>
                    </figure>
                    <p>We were both immediately intrigued and downloaded a mobile version of Klotski to begin solving. The game listed the optimal solution to Altenkirch's puzzle as 81 moves. However, after about a week of trying, my roommate and I were not able to solve the puzzle in the optimal number of steps. He was, however, a few steps quicker than I was.
                    I began toying with the idea of writing a solver for these puzzles. Although I couldn't solve the puzzle in 81 steps, maybe I could build something that would. I started by imagining a brute-force solution. It seemed to me that a board could be seen as the root node of a tree, where its children are defined as the boards resulting from each possible move on the root board.
                    Each of these children would be a root node to its own subtree and so on and so forth. One could implement this vision by using a tree traversal algorithm like Breadth-First Search (BFS) or Depth-First Search (DFS). Eventually, a solved board node would be reached.</p>
                    <figure>
                        <img className="horizontal" src={klotskiTree} alt="Klotski Tree Visualization"/>
                        <figcaption>Klotski Tree Visualization</figcaption>
                    </figure>
                    <p>I decided to go with BFS over DFS. Why? Well, DFS would take our board, find its children, and then set its first child as the new root node. It would then find the new root node's children and set its first child as the new root node. This process would continue until the new root node was a leaf: a solved or unsolvable board. Seeing each possible solution path to its completion one-by-one did not seem very efficient to me.
                    Alternatively, in BFS, we take our board, find its children, and put them in a queue. We start with the first node in the queue: our board's first child. We set it as the new root node, find its children, and add them to the end of the queue. We then move onto the next board in the queue: the original board's second child. In BFS we are not seeing any one path to its completion, rather we are looking at all possible board configurations a given number of moves away from the original board. 
                    Therefore, once we encounter our first solved board, we will know that the path of moves leading to this board must be an optimal solution. Why? Because, say this board is <span className="em">x</span> moves away from the original board. We know that we have already checked all boards fewer than <span className="em">x</span> moves away from the original board because of the nature of our queue. Therefore, any solution that comes later will contain greater than or equal to <span className="em">x</span> moves.</p>
                    <div className="codeRow">
                        <CodeBlock 
                            code={dfsCode} 
                            language="typescript"
                            theme={nightOwlLight}
                        />
                        <CodeBlock 
                            code={bfsCode} 
                            language="typescript"
                            theme={nightOwlLight}
                        />
                    </div>
                    <p>I implemented this approach in a C++ program, but I ran into an issue very quickly: the program would not return. I figured there must be either an infinite loop in this implementation or at the very least a lot of room for optimization. Eventually, I figured it out. I realized that if our first move was, say, to move the 1x1 block in the bottom-left-most corner
                    of the board to the right, then the subtree beginning at the resultant board would also have our initial board as one of its children. If sliding a block to the right is a valid move, then sliding it back is a valid second move, and sliding it to the right again is a valid third move. Thus, an infinite loop had been found.</p>
                    <p>How to deal with this? Well, instead of defining a board’s children as the boards resulting from all <span className="em">possible</span> moves, I began defining children as those boards resulting from all <span className="em">valid</span> moves. For each board, the <span className="em">invalid</span> move is the one that returns the board to its parent's block configuration.
                    This change solved the immediate issue. My command-line output displayed "Solved!" for the first time. I had solved the problem! However, the program was taking minutes to run, and I figured there must be more room for optimization.</p>
                    <p>I had a few ideas about what could be behind my slow runtime, but I eventually settled on the following question. Could there be an infinite loop more complex than merely moving a block and undoing this move over and over again? I imagined three 1x1 blocks positioned in an "L" shape. If my algorithm moved the top block to the right, the bottom-left block up, the bottom-right block to the left,
                    and so on, this solution could go on forever without ever doubling-back on itself. This was troubling. It seemed a difficult task to find some check that would prevent such loops from occurring. But I ended up settling on a very simple fix.</p>
                    <p>The idea of a loop is that you end up reaching a place you have already been, going from whence you came. What if we prevented this; what if we prevented moves resulting in block configurations we have already seen? This is what I set my sights on. I decided to hash the board in some way. A hash function is a mapping from some complex object to a simple, pseudo-unique identifier.
                    I decided to set up my BFS algorithm to convert every board it encountered to a string of text, place this string in a <span className="em">hash map</span>, and update the meaning of a <span className="em">valid move</span>. Now a valid move would be one that results in a block configuration that has not been seen in the current path.
                    To do this, I created a hash function that turns any board into a string. Each board would be split up into its 20 cells. If a cell contained the 2x2 block, it was represented by the string "4". A 2x1 vertical block was represented by the string "2V"; a 2x1 horizontal block was represented by the string "2H"; a 1x1 block was represented by the string "1"; and an uncovered cell was represented by the string " ".
                    The final board string was the result of concatenating these smaller strings from left to right and top to bottom.</p>
                    <figure>
                        <img className="horizontal" src={boardString} alt="Board-to-string Conversion Visualization" />
                        <figcaption>Board-to-string Conversion Visualization</figcaption>
                    </figure>
                    <p>Using a hash map, one can look up any one of its members in constant time. This means that regardless of how many boards i have seen - 100, 1000, 10000, etc. - the approximate time needed to check if my board configuration has been seen already will not change. This is incredibly powerful, and using this fix, I was able to calculated my new valid moves with ease. Furthermore, these changes allowed me to run my program and see that beautiful "Solved" show up on the screen instantly. 
                    But this was my final issue: I needed the output of my function to be a list of moves, not the word "Solved". This is where Dijkstra’s algorithm comes in - or at least a form of it. Without getting too into the minutiae, we can convert our BFS algorithm into a shortest path algorithm by adding an important feature to our nodes: a backwards pointer. While each board will have its children as one of its properties, boards will also now contain references to their parent boards. 
                    Therefore, upon finding a solved board, all the algorithm must do is ride the chain of backwards pointers to the original board, keeping track of the boards along the way, and <span className="em">voila</span>: the final solution!
                    With this new output, an array of 82 boards beginning with the original board and ending with the solved board, I realized a user interface was not too far off. I began porting my code to Typescript and created the web application that is linked in the "Projects" tab. Go check it out and solve some puzzles!</p>
                    <figure>
                        <img className="horizontal" src={dijkstraTree} alt="Forward and Backward Pointer Visualization"/>
                        <figcaption>Forward and Backward Pointer Visualization</figcaption>
                    </figure>
                    <div className="codeRow">
                        <CodeBlock 
                            code={dijkstraCode} 
                            language="typescript"
                            theme={nightOwlLight}
                        />
                    </div>
                    </>
                }
            />
        </main>
        <Footer currPage="blog/"/>
        </>
    );
}