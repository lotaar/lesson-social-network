import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import styles from "./ProfileInfo.module.css";
import ProfileStatus from './ProfileStatus.jsx'

const ProfileInfo = (props) => {
   if(!props.profile) {
     return <Preloader/>
   }
  return (
    <div>
      {/* <div>
        <img
          alt=""
          src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
        />
      </div> */}
      <div className={styles.descriptionBlock}>
        <img src={props.profile.photos.large} alt="" />
        <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        </div>
    </div>
  );
};

export default ProfileInfo;
