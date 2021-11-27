import React from "react";
import styles from "./Post.module.css";

const Post = (props) => {
  return (

        <div className={styles.item}>
          <img src="https://2ch.hk/b/thumb/241936613/16153076786260s.jpg" alt="" />
          {props.message}
          <div>
            <span>
              {props.likeCount}
            </span>
          </div>
          </div>
        
  );
};

export default Post;
