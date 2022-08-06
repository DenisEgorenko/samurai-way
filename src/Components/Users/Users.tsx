import React, {useEffect} from 'react'
import {getUsersThunk} from '../../redux/usersPageReducer';
import User from './User';
import styles from './Users.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/redux-store';
import {Preloader} from '../Preloader/Preloader';
import {ThunkDispatch} from 'redux-thunk';


export const Users = React.memo(function Users() {

    const dispatch: ThunkDispatch<RootState, undefined, any> = useDispatch()
    
    const usersPage = useSelector((state: RootState) => state.usersPage)


    useEffect(() => {
        dispatch(getUsersThunk(usersPage.pageSize, usersPage.currentPage))
    }, [])

    const pagesCount = Math.ceil(usersPage.totalUsersCount / usersPage.pageSize)

    let pages: number[] = []
    for (let i = usersPage.currentPage >= 5 ? usersPage.currentPage - 5 : 1; i <= usersPage.currentPage + 5; i++) {
        pages.push(i)
    }

    const onChangePageNumberHandler = (p: number) => {
        dispatch(getUsersThunk(usersPage.pageSize, p))
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
