import React, {useEffect} from 'react'
import {userType} from "../../redux/usersPageReducer";
import User from "./User";
import axios from "axios";

type usersPropsType = {
    users: Array<userType>,
    follow: (userID: number) => void,
    unfollow: (userID: number) => void,
    setUsers: (users: Array<userType>) => void
}

class Users extends React.Component <usersPropsType> {

    // constructor(props: usersPropsType) {
    //     super(props);
    // }

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(res => {
            this.props.setUsers(res.data.items)
        })
    }


    render() {
        return <div>

            {this.props.users.map(u => <User follow={this.props.follow}
                                             unfollow={this.props.unfollow}
                                             id={u.id}
                                             photos={u.photos}
                                             name={u.name}
                                             followed={u.followed}
                                             status={u.status}/>
            )}

        </div>
    }
}

export default Users