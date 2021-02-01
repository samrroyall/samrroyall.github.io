import React from "react";
import Nav from "../components/nav";
import Article from "../components/article";
import Footer from "../components/footer";

export default function Blog() {
  return (
    <div>
        <Nav currPage="blog"/>
        <main>
            <Article 
                title="Article 1"
                content={
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Pariatur quis qui temporibus aliquam asperiores consectetur eaque, 
                        voluptate ut et, quaerat eius incidunt, officiis quisquam ad voluptatem. 
                        Voluptatum at reprehenderit magnam. 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Pariatur quis qui temporibus aliquam asperiores consectetur eaque, 
                        voluptate ut et, quaerat eius incidunt, officiis quisquam ad voluptatem. 
                        Voluptatum at reprehenderit magnam.</p>
                        <img className="horizontal"
                            src="https://getcodify.com/wp-content/uploads/2016/10/Python_logo.jpg" 
                            alt="large python logo">
                        </img>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Pariatur quis qui temporibus aliquam asperiores consectetur eaque, 
                        voluptate ut et, quaerat eius incidunt, officiis quisquam ad voluptatem. 
                        Voluptatum at reprehenderit magnam. 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Pariatur quis qui temporibus aliquam asperiores consectetur eaque, 
                        voluptate ut et, quaerat eius incidunt, officiis quisquam ad voluptatem. 
                        Voluptatum at reprehenderit magnam.</p>
                    </div>
                }
            />
            <Article 
                title="Article 2"
                content={
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Pariatur quis qui temporibus aliquam asperiores consectetur eaque, 
                        voluptate ut et, quaerat eius incidunt, officiis quisquam ad voluptatem. 
                        Voluptatum at reprehenderit magnam. 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Pariatur quis qui temporibus aliquam asperiores consectetur eaque, 
                        voluptate ut et, quaerat eius incidunt, officiis quisquam ad voluptatem. 
                        Voluptatum at reprehenderit magnam.</p>
                        <img className="square" 
                            src="https://olimex.files.wordpress.com/2013/08/python-logo.png" 
                            alt="small python logo">
                        </img>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Pariatur quis qui temporibus aliquam asperiores consectetur eaque, 
                        voluptate ut et, quaerat eius incidunt, officiis quisquam ad voluptatem. 
                        Voluptatum at reprehenderit magnam. 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Pariatur quis qui temporibus aliquam asperiores consectetur eaque, 
                        voluptate ut et, quaerat eius incidunt, officiis quisquam ad voluptatem. 
                        Voluptatum at reprehenderit magnam.</p>
                    </div>
                }               
            />
            <Article 
                title="Article 3"
                content={
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Pariatur quis qui temporibus aliquam asperiores consectetur eaque, 
                        voluptate ut et, quaerat eius incidunt, officiis quisquam ad voluptatem. 
                        Voluptatum at reprehenderit magnam.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Pariatur quis qui temporibus aliquam asperiores consectetur eaque, 
                        voluptate ut et, quaerat eius incidunt, officiis quisquam ad voluptatem. 
                        Voluptatum at reprehenderit magnam.</p>
                        <img className="vertical" 
                            src="https://4.bp.blogspot.com/-mdS0RuDpEjA/UWlnLbROA1I/AAAAAAAADKE/-PUSo0HoP_M/s1600/Screen+Shot+2013-04-13+at+7.08.51+AM.png" 
                            alt="python code">
                        </img>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Pariatur quis qui temporibus aliquam asperiores consectetur eaque, 
                        voluptate ut et, quaerat eius incidunt, officiis quisquam ad voluptatem. Voluptatum at reprehenderit magnam.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Pariatur quis qui temporibus aliquam asperiores consectetur eaque, 
                        voluptate ut et, quaerat eius incidunt, officiis quisquam ad voluptatem. 
                        Voluptatum at reprehenderit magnam.</p>                    
                    </div>
                }
            />
        </main>
        <Footer />
    </div>
  );
}
//<img class="horizontal" src="https://getcodify.com/wp-content/uploads/2016/10/Python_logo.jpg" alt="large python logo"></img>