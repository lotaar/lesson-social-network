import React from "react";
import './Profile.css'

const Profile = () => {
    return (
      <div className="content">
        <div>
          <img
            alt=""
            src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
          />
        </div>
        <div>ava+desc</div>
        <div>
          My posts
          <div>New Post</div>
          <div className='posts'>
            <div className='item'>post1</div>
            <div className='item'>post2</div>
          </div>
        </div>
      </div>
    )
}

export default Profile;