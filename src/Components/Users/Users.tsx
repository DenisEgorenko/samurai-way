import React from 'react'
import {userType} from "../../redux/usersPageReducer";
import User from "./User";

type usersPropsType = {
    users: Array<userType>,
    follow: (userID: string) => void,
    unfollow: (userID: string) => void,
    setUsers: (users: Array<userType>) => void
}

function Users(props: usersPropsType) {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: '1',
                photoUrl: 'https://i0.wp.com/mustoi.ru/wp-content/uploads/2015/10/%D0%9F%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8C.png?fit=2252%2C2084&ssl=1',
                fullName: 'Denis',
                followed: true,
                status: 'Last Message',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: '2',
                photoUrl: 'https://i0.wp.com/mustoi.ru/wp-content/uploads/2015/10/%D0%9F%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8C.png?fit=2252%2C2084&ssl=1',
                fullName: 'Sasha',
                followed: false,
                status: 'Last Message',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: '3',
                photoUrl: 'https://i0.wp.com/mustoi.ru/wp-content/uploads/2015/10/%D0%9F%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8C.png?fit=2252%2C2084&ssl=1',
                fullName: 'Dima',
                followed: false,
                status: 'Last Message',
                location: {city: 'Kiev', country: 'Russia'}
            },
        ])
    }

    return (
        <div>

            {props.users.map(u => <User follow={props.follow}
                                        unfollow={props.unfollow}
                                        id={u.id}
                                        photoUrl={u.photoUrl}
                                        fullName={u.fullName}
                                        followed={u.followed}
                                        status={u.status}
                                        location={u.location}/>
            )
            }

        </div>
    )
}

export default Users