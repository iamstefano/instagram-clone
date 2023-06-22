import { useState } from "react";
import "./Post.css";

import { HearthIcon, CommentIcon, SendIcon, BookMarkIcon } from "../../icons";

const Post = ({ post }) => {
  const { isLike } = post;
  const [like, setLike] = useState(isLike);

  const toggleLike = () => {
    setLike(!like);
  };

  return (
    <article className="Post">
      <div className="PostTop">
        <div className="PostTop__User">
          <div className="User__Image">
            <img
              src={post?.userImage ? post?.userImage : ""}
              alt={post?.userName}
            />
          </div>
          <div className="User__Content">
            <p className="User__Username">{post?.userName}</p>
            <p className="User__Location">{post?.location}</p>
          </div>
        </div>
        <div className="PostTop__Actions"></div>
      </div>
      <div className="PostContent">
        {post?.media?.map((media) => (
          <img key={media?.id} src={media?.src} />
        ))}
      </div>
      <div className="PostActions">
        <div onClick={() => toggleLike()} className="PostActions__Like">
          <HearthIcon fill={like && like ? "#FD1D1D" : "#262626"} />
        </div>
        <div className="PostActions__Comment">
          <CommentIcon />
        </div>

        <div className="PostActions__Send">
          <SendIcon />
        </div>
        <div className="PostActions__Bookmark">
          <BookMarkIcon />
        </div>
      </div>
    </article>
  );
};

export default Post;
