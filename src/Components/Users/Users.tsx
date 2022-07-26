import React, {useEffect} from 'react'
import {
    setCurrentPageAC,
    setIsFetchingAC,
    setTotalUsersCountAC,
    setUsersAC,
    usersPageType
} from "../../redux/usersPageReducer";
import User from "./User";
import axios from "axios";
import styles from './Users.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../redux/redux-store";
import {Preloader} from "../Preloader/Preloader";
import {withRouter} from "react-router-dom";


export const Users = React.memo(function Users() {

    const dispatch: AppDispatch = useDispatch()
    const users = useSelector((state: RootState) => state.usersPage.users)
    const currentPage = useSelector((state: RootState) => state.usersPage.currentPage)
    const pageSize = useSelector((state: RootState) => state.usersPage.pageSize)
    const totalUsersCount = useSelector((state: RootState) => state.usersPage.totalUsersCount)
    const isFetching = useSelector((state: RootState) => state.usersPage.isFetching)


    useEffect(() => {
        dispatch(setIsFetchingAC(true))
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${pageSize}&page=${currentPage}`).then(res => {
            dispatch(setUsersAC(res.data.items))
            dispatch(setTotalUsersCountAC(res.data.totalCount))
            dispatch(setIsFetchingAC(false))
        })
    }, [])

    const pagesCount = Math.ceil(totalUsersCount / pageSize)

    let pages: number[] = []
    for (let i = currentPage >= 5 ? currentPage - 5 : 1; i <= currentPage + 5; i++) {
        pages.push(i)
    }

    const onChangePageNumberHandler = (p: number) => {
        dispatch(setIsFetchingAC(true))
        dispatch(setCurrentPageAC(p))
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${pageSize}&page=${p}`).then(res => {
            dispatch(setUsersAC(res.data.items))
            dispatch(setIsFetchingAC(false))
        })
    }

    return <>
        {isFetching ? <Preloader /> :
            <div className={styles.usersWrapper}>

                <div className={styles.paginator}>
                    {pages.map(p => <div onClick={() => onChangePageNumberHandler(p)}
                                         className={`${styles.paginatorItem} ${currentPage === p && styles.paginatorItemSelected}`}>
                            {p}
                        </div>
                    )}
                </div>

                {users.map(u => <User id={u.id}
                                      photos={u.photos}
                                      name={u.name}
                                      followed={u.followed}
                                      status={u.status}/>
                )}

            </div>
        }
    </>
})
