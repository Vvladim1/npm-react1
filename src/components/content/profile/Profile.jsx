import React from "react";
import s from "./profile.module.css";
import Preloader from "../../common/preload/preload";
import { NavLink } from "react-router-dom";

const Profile = props => {
  if (!props.profile) {
    return <Preloader />;
  }

 let jobStatuse = () => {
  if (!props.profile.lookingForAJob){
    return <img width='10%'
                alt='looking for a job' 
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQP8jIb8sIwNHA6uG09glPPq8JClmfDkj3UpYl23sluT7EaRQzo'/>
  } else {
    return <img
    
    alt='all raight' 
    src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT4WPeTTr-SvJ5NJ6QIJVMLMAvP1xsPC8cKwGmR2x64wpf0Oqf3'/>
  }}

  
  return (
    <div>
      <img
        width="70%"
        src="https://img.tsn.ua/cached/1559557468/tsn-044a03ab1c6615c0753d2de60e24b711/thumbs/1340x530/3f/5b/719c96f86272e0c8dd279ea342325b3f.jpeg"
      />

      <div className={s.profile}>
        <div className={s.ava}>
          <img src={props.profile.photos.large} alt="user" />
  <p>Ищу работу: {jobStatuse()}</p>
          <p>{props.profile.lookingForAJobDescription}</p>
          <p>мои контакты:</p>
  <NavLink to='{props.profile.contacts.facebook}'>facebook</NavLink>
  {/* <NavLink >website: {props.profile.contacts.website}</NavLink>
  <NavLink >vk: {props.profile.contacts.vk}</NavLink>
  <NavLink >twitter: {props.profile.contacts.twitter}</NavLink>
  <NavLink >instagram: {props.profile.contacts.instagram}</NavLink>
  <NavLink >youtube: {props.profile.contacts.youtube}</NavLink>
  <NavLink >github: {props.profile.contacts.github}</NavLink>
  <NavLink >mainLink: {props.profile.contacts.mainLink}</NavLink> */}

        </div>
        <div className={s.nameBlock}>
          <h3>{props.profile.fullName}</h3>
          <p>{props.profile.aboutMe}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
