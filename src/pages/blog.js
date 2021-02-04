import React from "react"
import Nav from "../components/nav"
import Article from "../components/article"
import Footer from "../components/footer"
import defaultKlotski from "../../static/default-klotski.png"
import klotskiTreeOne from "../../static/klotski-tree-1.png"
import boardString from "../../static/board-string.png"
import dijkstra from "../../static/dijkstra-tree.png"

export default function Blog() {
    return (
        <div>
            <Nav currPage="blog"/>
            <main>
                <Article 
                    title={<span>Using Dijkstra's Algorithm to Solve Klotski Puzzles</span>}
                    content={
                        //<img className="horizontal"
                        //    src="https://getcodify.com/wp-content/uploads/2016/10/Python_logo.jpg" 
                        //    alt="large python logo">
                        //</img>
                        <div>
                            <p>In Summer 2020, my roommate and I watched a Computerphile <a href="https://www.youtube.com/watch?v=G_UYXzGuqvM">video</a> in which Computer Science professor Thorsten Altenkirch created a Sudoku solver in Python. The video was informative and entertaining, and Altenkirch’s program was interesting and elegant. Toward the end of the video, however, Altenkirch introduced a “tricky” puzzle called <span className="em">Klotski</span>.
                            This puzzle consisted of a 5x4 board and a group of wooden blocks covering its surface. These blocks came in three sizes: 2x2, 2x1, and 1x1. There was one 2x2 block on the board by design and two uncovered spaces. The goal - to move the 2x2 block to a predefined area of the board (the bottom of the board in this case) by sliding the blocks one by one.</p>
                            <figure>
                                <img className="vertical" src={defaultKlotski} caption="testing" alt="Altenkirch’s Klotski Puzzle"/>
                                <figcaption>Altenkirch’s Klotski Puzzle</figcaption>
                            </figure>
                            <p>We were both immediately intrigued and downloaded a mobile version of Klotski to begin solving. The game listed the optimal solution to Altenkirch’s puzzle as 81 moves. However, after about a week of trying, my roommate and I were not able to solve the puzzle in the optimal number of steps.
                            I began toying with the idea of writing a solver for these puzzles. I started by imagining a brute-force solution. It seemed to me that a board could be seen as the root node of a tree, where its children are defined as the boards resulting from each possible move on the root board. Each of these children would be a root node to its own subtree and so on and so forth.
                            One could implement this vision by using a tree traversal algorithm like Breadth-First Search (BFS) or Depth-First Search (DFS). Eventually, a solved board node would be reached.</p>
                            <figure>
                                <img className="horizontal" src={klotskiTreeOne} alt="Klotski Tree Visualization"/>
                                <figcaption>Klotski Tree Visualization</figcaption>
                            </figure>
                            <p>I decided to go with BFS over DFS. Why? Well, DFS would take our board, find its children, and then set its first child as the new root node. It would then find the new root node’s children and set its first child as the new root node. This process would continue until the new root node was a leaf: a solved or unsolvable board. Seeing each possible solution path to its completion one-by-one did not seem very efficient to me.
                            Alternatively, in BFS, we take our board, find its children, and put them in a queue. We start with the first node in the queue: our board's first child. We set it as the new root node, find its children, and add them to the end of the queue. We then move onto the next board in the queue: the original board’s second child. In BFS we are not seeing any one path to its completion, rather we are looking at all possible board configurations a given number of moves away from the original board. 
                            Therefore, once we encounter our first solved board, we will know that the path of moves leading to this board must be an optimal solution. Why? Because, say this board is <span className="em">x</span> moves away from the original board. We know that we have already checked all boards fewer than <span className="em">x</span> moves away from the original board because of the nature of our queue. Therefore, any solution that comes later will contain greater than or equal to <span className="em">x</span> moves.</p>
                            <code>
                                // DFS def DFS() code here 
                            </code>
                            <code>
                                // BFS def BFS() code here
                            </code>
                            <p>I implemented this approach in a C++ program, but I ran into an issue very quickly: the program would not return. I figured there must be either an infinite loop in this implementation or at the very least a lot of room for optimization. Eventually, I figured it out. I realized that if our first move was, say, to move the 1x1 block in the bottom-left-most corner
                            of the board to the right, then the subtree beginning at the resultant board would also have our initial board as one of its children. If sliding a block to the right is a valid move, then sliding it back is a valid second move, and sliding it to the right again is a valid third move. Thus, an infinite loop had been found.</p>
                            <p>How to deal with this? Well, instead of defining a board’s children as the boards resulting from all <span className="em">possible</span> moves, I began defining children as those boards resulting from all <span className="em">valid</span> moves. For each board, the <span className="em">invalid</span> move is the one that returns the board to its parent’s block configuration.
                            This change solved the immediate issue. My command-line output displayed “Solved!” for the first time. I had solved the problem! However, the program was taking minutes to run, and I figured there must be more room for optimization.</p>
                            <p>I had a few ideas about what could be behind my slow runtime, but I eventually settled on the following question. Could there be an infinite loop more complex than merely moving a block and undoing this move over and over again? I imagined three 1x1 blocks positioned in an “L” shape. If my algorithm moved the top block to the right, the bottom-left block up, the bottom-right block to the left,
                            and so on, this solution could go on forever without ever doubling-back on itself. This was troubling. It seemed a difficult task to find some check that would prevent such loops from occurring. But I ended up settling on a very simple fix.</p>
                            <p>The idea of a loop is that you end up reaching a place you have already been, going from whence you came. What if we prevented this; what if we prevented moves resulting in block configurations we have already seen? This is what I set my sights on. I decided to hash the board in some way. A hash function is a mapping from some complex object to a simple, pseudo-unique identifier.
                            Most languages have some sort of an unordered hash map. I decided to set up my BFS algorithm to convert every board it encountered to a string of text, place this string in a hashmap, and update the meaning of a <span className="em">valid move</span>. Now a valid move would be one that results in a block configuration that has not been seen in the current path.
                            To do this, I created a function that turns any board into a string. Each board would be split up into its 20 cells. If a cell contained the 2x2 block, it was represented by the string “4”. A 2x1 vertical block was represented by the string “2V”; a 2x1 horizontal block was represented by the string “2H”; a 1x1 block was represented by the string “1”; and an uncovered cell was represented by the string “ ”.
                            The final board string was the result of concatenating these smaller strings from left to right and top to bottom.</p>
                            <figure>
                                <img className="horizontal" src={boardString} alt="Board-to-string Conversion Visualization" />
                                <figcaption>Board-to-string Conversion Visualization</figcaption>
                            </figure>
                            <p>Using a hash map, one can look up one of its members in constant time. This means that regardless of how many boards i have seen - 100, 1000, 10000, etc. - the approximate time needed to check if my board configuration has been seen already will not change. This is incredibly powerful, and using this fix, I was able to run my program and see that beautiful “Solved” show up on the screen instantly. 
                            But this was my final issue: I needed the output of my function to be a list of moves, not the word “Solved”. This is where Dijkstra’s algorithm comes in - or at least a form of it. Without getting too into the minutiae, we can convert our BFS algorithm into a shortest path algorithm by adding an important feature to our nodes: a backwards pointer. While each board will have its children as of its properties; each board will also have a reference to its parent board as an attribute. 
                            Therefore, upon finding a solved board, all the algorithm must do is ride the chain of backwards pointers to the original board, keeping track of the boards along the way, and <span className="em">voila</span>: the final solution!
                            With this new output, an array of boards beginning with the original board and ending with the solved board, I realized a user interface was not too far off. I began porting my code to Typescript and created the web application that is linked in the “Projects” tab. Go check it out and solve some puzzles!</p>
                            <figure>
                                <img className="horizontal" src={dijkstra} alt="Forward and Backward Pointer Visualization"/>
                                <figcaption>Forward and Backward Pointer Visualization</figcaption>
                            </figure>
                        </div>
                    }
                />
                <Article 
                    title="A Trie-based Search Algorithm for Soccer"
                    content={
                        // <img className="square" 
                        //     src="https://olimex.files.wordpress.com/2013/08/python-logo.png" 
                        //     alt="small python logo">
                        // </img>
                        <div>
                            <p></p>
                        </div>
                    }               
                />
                <Article 
                    title="Article 3"
                    content={
                        // </div><img className="vertical" 
                        // </div>    src="https://4.bp.blogspot.com/-mdS0RuDpEjA/UWlnLbROA1I/AAAAAAAADKE/-PUSo0HoP_M/s1600/Screen+Shot+2013-04-13+at+7.08.51+AM.png" 
                        // </div>    alt="python code">
                        // </div></img>
                        <div>
                            <p></p>                    
                        </div>
                    }
                />
            </main>
            <Footer />
        </div>
    );
}
//<img class="horizontal" src="https://getcodify.com/wp-content/uploads/2016/10/Python_logo.jpg" alt="large python logo"></img>