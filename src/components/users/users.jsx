import React from "react";
import styles from "./users.module.css";
import * as axios from "axios";
import userPhoto from "../../assets/images/userImg.jpg";

class Users extends React.Component {


  componentDidMount() {
    if (this.props.users.length === 0) {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        // debugger;
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
        
      });
    }
  }
  

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
      });
    }
  
  

  render() {
    let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

    let pages = [];

    for (let i = 1; i <= pageCount; i++) {
      pages.push(i);
    }
    return (
      <div>
        
        {pages.map(p => (
          <span className={`${this.props.currentPage === p && styles.selectedPage} ${styles.cursor} `}
                 onClick={ (e) => {this.onPageChanged(p)} }
                 >{p}</span>
        ))}
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
