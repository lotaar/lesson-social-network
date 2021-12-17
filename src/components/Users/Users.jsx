import React from "react";
import styles from './users.module.css'

let Users = (props) => {

    if (props.users.length===0) {
        props.setUsers([
            {
                id: 1,
                imgUrl:'https://otvet.imgsmail.ru/download/100904352_076d51e2eb56a498107564fac8ed6846_800.jpg',
                followed: false,
                fullName: "Dmitriy",
                status: "I am a boss",
                location: { city: "Minsk", country: "Belarus" },
              },
              {
                id: 2,
                imgUrl:'https://otvet.imgsmail.ru/download/100904352_076d51e2eb56a498107564fac8ed6846_800.jpg',
                followed: true,
                fullName: "V1lat",
                status: "I am a boss too",
                location: { city: "Kiev", country: "Ukraine" },
              },
              {
                id: 3,
                imgUrl:'https://otvet.imgsmail.ru/download/100904352_076d51e2eb56a498107564fac8ed6846_800.jpg',
                followed: false,
                fullName: "Viktor",
                status: "I am a boss too",
                location: { city: "Moscow", country: "Russia" },
              },
        ])
    }
   
return (

    <div>
       {
           props.users.map(u => <div key={u.id}>
               <span></span>
               <div>
                   <img src={u.imgUrl} alt="" className={styles.photo}/>
               </div>
               <div>
                   {u.followed 
                   ? <button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button>: 
                   <button onClick={()=>{props.follow(u.id)}}>Follow</button>}
               </div>
               <span>
                   <span>
                       <div>{u.fullName}</div>
                       <div>{u.status}</div>
                   </span>
                   <span>
                       <div>{u.location.country}</div>
                       <div>{u.location.city}</div>
                   </span>
               </span>
           </div>)
       }

    </div>
)
}

export default Users