import React, {useEffect} from 'react'
import {setCurrentPageAC, setIsFetchingAC, setTotalUsersCountAC, setUsersAC} from '../../redux/usersPageReducer';
import User from './User';
import axios from 'axios';
import styles from './Users.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../redux/redux-store';
import {Preloader} from '../Preloader/Preloader';
import {usersAPI} from '../../api/api';


export const Users = React.memo(function Users() {

    const dispatch: AppDispatch = useDispatch()
    const usersPage = useSelector((state: RootState) => state.usersPage)


    useEffect(() => {
        dispatch(setIsFetchingAC(true))
        usersAPI.getUsers(usersPage.pageSize, usersPage.currentPage).then(res => {
            dispatch(setUsersAC(res.items))
            dispatch(setTotalUsersCountAC(res.totalCount))
            dispatch(setIsFetchingAC(false))
        })
    }, [])

    const pagesCount = Math.ceil(usersPage.totalUsersCount / usersPage.pageSize)

    let pages: number[] = []
    for (let i = usersPage.currentPage >= 5 ? usersPage.currentPage - 5 : 1; i <= usersPage.currentPage + 5; i++) {
        pages.push(i)
    }

    const onChangePageNumberHandler = (p: number) => {
        dispatch(setIsFetchingAC(true))
        dispatch(setCurrentPageAC(p))
        usersAPI.getUsers(usersPage.pageSize, p).then(res => {
            dispatch(setUsersAC(res.items))
            dispatch(setIsFetchingAC(false))
        })
    }

    return <>
        {usersPage.isFetching ? <Preloader/> :
            <div className={styles.usersWrapper}>

                <div className={styles.paginator}>
                    {pages.map(p => <div onClick={() => onChangePageNumberHandler(p)}
                                         className={`${styles.paginatorItem} ${usersPage.currentPage === p && styles.paginatorItemSelected}`}>
                            {p}
                        </div>
                    )}
                </div>

                {usersPage.users.map(u => <User id={u.id}
                                      photos={u.photos}
                                      name={u.name}
                                      followed={u.followed}
                                      status={u.status}
                                      followingInProgress={usersPage.followingInProgress}
                    />
                )}

            </div>
        }
    </>
})
