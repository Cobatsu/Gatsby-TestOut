import React from "react";

const Post = ({ pageContext }) => { 
  const { node } = pageContext;
  return (
    <div style={{display:'flex',alignItems:'center',flexDirection:'column'}}>
      <h3 style={{textAlign:'center'}}>{node.frontmatter.title}</h3>
      <p style={{width:600}}>{node.html}</p>
    </div>
  );
};

export default Post;