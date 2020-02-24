import React from "react";
import styles from "./users.module.css";
import * as axios from "axios";
import userPhoto from "../../assets/images/userImg.jpg";

class Users extends React.Component {

  constructor(props){
    super(props);

      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then(response => {
          debugger;
          this.props.setUsers(response.data.items);
        });
    }
  



  render() {
    return (
      <div>
        {this.props.users.map(u => (
          <div key={u.id}>
            <div className={styles.wrapper}>
              <div>
                <img
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                  className={styles.userPhoto}
                />
              </div>
              <div>
                {u.followed ? (
                  <button
                    onClick={() => {
                      this.props.unfollow(u.id);
                    }}
                  >
                    unfollowe
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(u.id);
                    }}
                  >
                    followed
                  </button>
                )}
              </div>
              <div>{u.name}</div>
              <div>{u.status}</div>
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Users;
