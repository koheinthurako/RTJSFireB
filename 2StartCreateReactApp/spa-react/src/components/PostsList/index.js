import React from 'react';
import './index.css';

export default function PostsList({posts}) {
    console.log(posts);
    // Array Destructuring နည်းနဲ့ props ကို လက်ခံပြီး Data ကို ပြန်ဆွဲထုတ်တာဖြစ်တယ်။
  return (
    <div className="postList">
        {/* <div className="single-post">Single Post</div>
        <div className="single-post">Single Post</div>
        <div className="single-post">Single Post</div> */}

        {posts.map((post) => 
            <div className="single-post" key={post.id}>{post.title}</div>
        )}

    </div>
  )
}
