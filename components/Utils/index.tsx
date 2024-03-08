import React,{useEffect} from 'react';

import Typed from 'typed.js';

const BlogImg: React.FC = () => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['<p>In my articles, I delve into the intricacies of UI animations, exploring techniques to enhance user experiences and captivate audiences. I unravel the potential of JamStack architecture, highlighting its efficiency, scalability, and security benefits for modern web development. Additionally, I decode the world of Content Management Systems (CMS), offering insights into selecting the right CMS for specific project requirements. With Next.js. </p> ', '&amp; I have embraced the concept of being a life long learner. Learning to solve whatever problem i encountered.'],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
   <div className='bgImgContainer'>
    <svg width="25" height="25" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="white" />
          </svg>
          <div>
            <p>
Sharing experiments and knowledge with others not only fosters collaboration but also contributes to the growth of the developer community. It allows for the exchange of ideas, feedback, and insights, ultimately leading to collective learning and improvement.  <span ref={el} /></p>
          </div>
   </div>
  );
};


export default BlogImg;
