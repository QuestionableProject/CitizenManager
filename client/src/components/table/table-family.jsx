import { useRef, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import styles from './table.module.css'
import { useDispatch, useSelector } from 'react-redux';

import { addTableFamily } from '../../store/slices/tableFamilySlice';
import TableAdd from '../table-add';
import TableUpdate from '../table-update';
import Background from '../background';


export default function TableFamily() {
    const [addTable, setAddTable] = useState(false)
    const [updateTable, setUpdateTable] = useState(false)

    const gridRef = useRef()
    const dispatch = useDispatch()

    const tableFamily = useSelector(state => state.tablefamily.tableFamily)
    const citizen = useSelector(state => state.tablefamily.citizen)
    const statusText = useSelector(state => state.tablefamily.statusText)

    const [columnDefs] = useState([
        { field: 'id' },
        { field: 'name' },
        { field: 'surname' },
        { field: 'patronymic' },
        { field: 'birthday' },
        { field: 'parent' },
        { field: 'сitizenship' }
    ]);

    const closeModal = () => {
        if (addTable) return setAddTable(false)
        if (updateTable) return setUpdateTable(false)
    }

    async function deleteTable() {
        console.log(citizen);
        const selectedRows = gridRef.current.api.getSelectedRows();

        if (selectedRows < 1) return false

        const response = await fetch("http://localhost:5000/api/tableFamily/tableFamilyRemove", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                familyId: selectedRows[0].id
            }),
        })

        const data = await response.json();

        if (data.status === 200) {
            const updateTableFamily = tableFamily.filter(row => {
                return row !== selectedRows[0];
            });
            if (!updateTableFamily.length === 0) {
                return dispatch(addTableFamily({
                    data: null,
                    citizen
                }))
            }
            dispatch(addTableFamily({
                data: updateTableFamily,
                citizen
            }))
        }
    }


    return (
        <div className={styles.table__card} >
            {addTable && (
                <>
                    <TableAdd onToggle={setAddTable} />
                    <Background toggleModal={closeModal} />
                </>
            )}

            {updateTable  &&(
                <>
                    <TableUpdate onToggle={setUpdateTable}  family={gridRef.current}/>
                    <Background toggleModal={closeModal} />
                </>
            )}

            <div className={styles.header__table}>
                <b>Family member</b>
                {tableFamily && (
                    <ul className={styles.menu}>
                        <li onClick={() => {
                            setAddTable(true)
                        }}>Add</li>
                        <li onClick={() => {
                            if (!gridRef.current.api.getSelectedRows()[0]) return false
                            setUpdateTable(true)
                        }}>Update</li>
                        <li onClick={deleteTable}>Delete</li>
                    </ul>
                )}
                {!tableFamily && citizen && (
                    <ul className={styles.menu}>
                        <li onClick={() => {
                            setAddTable(true)
                        }}>Add</li>
                    </ul>
                )}

            </div>
            {!tableFamily ? (
                <div className={styles.table__text}>
                    {statusText ? (
                        <b>{statusText}</b>
                    ) : (
                        <b>Select a citizen to view his family</b>
                    )}
                </div>
            ) : (
                <AgGridReact
                    ref={gridRef}
                    className="ag-theme-material"
                    rowData={tableFamily}
                    columnDefs={columnDefs}
                    rowSelection={'single'}
                >

                </AgGridReact>
            )
            }
        </div >
    )
}