import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/redux-store';
import {ThunkDispatch} from 'redux-thunk';
import {getUsersThunk} from '../../redux/usersPageReducer';
import styles from './Paginator.module.css';
import React from 'react';


type PaginatorProps = {}


function Paginator(props: PaginatorProps) {

    const usersPage = useSelector((state: RootState) => state.usersPage)
    const dispatch: ThunkDispatch<RootState, undefined, any> = useDispatch()

    const onChangePageNumberHandler = (p: number) => {
        dispatch(getUsersThunk(usersPage.pageSize, p))
    }

    let pages: number[] = []
    for (let i = usersPage.currentPage >= 5 ? usersPage.currentPage - 5 : 1; i <= usersPage.currentPage + 5; i++) {
        pages.push(i)
    }

    return (
        <div className={styles.paginator}>
            {pages.map(p => <div onClick={() => onChangePageNumberHandler(p)}
                                 className={`${styles.paginatorItem} ${usersPage.currentPage === p && styles.paginatorItemSelected}`}>
                    {p}
                </div>
            )}
        </div>
    )
}

export default Paginator;