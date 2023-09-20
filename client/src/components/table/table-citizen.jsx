import { useCallback, useRef, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import styles from './table.module.css'
import Loader from '../svg/loader';

import { useDispatch, useSelector } from 'react-redux';
import { addTableFamily } from "../../store/slices/tableFamilySlice"


export default function TableCitizen() {
    const dispatch = useDispatch()
    const [loader, setLoader] = useState(false)

    const gridRef = useRef();

    const citizen = useSelector(state => state.tablefamily.citizen)

    const [columnDefs] = useState([
        {
            headerName: 'Id',
            maxWidth: 100,
            valueGetter: 'node.id',
            cellRenderer: (props) => {
                if (props.value !== undefined) {
                    return props.value;
                } else {
                    return (
                        <img src="https://www.ag-grid.com/example-assets/loading.gif" />
                    );
                }
            },
        },
        { field: 'name' },
        { field: 'surname' },
        { field: 'patronymic' },
        { field: 'birthday' },
        { field: 'сitizenship' }
    ]);

    const onGridReady = useCallback((params) => {
        fetch('http://localhost:5000/api/tableCitizen', {
        }).then((resp) => resp.json())
            .then((data) => {
                const dataSource = {
                    rowCount: undefined,
                    getRows: (params) => {
                        setTimeout(function () {
                            const rowsThisPage = data.tablecitizen.slice(params.startRow, params.endRow);
                            let lastRow = -1;
                            if (data.tablecitizen.length <= params.endRow) {
                                lastRow = data.tablecitizen.length;
                            }
                            params.successCallback(rowsThisPage, lastRow);
                        }, 500);
                    },
                };
                params.api.setDatasource(dataSource);
            });
    }, []);


    const onSelectionChanged = useCallback(() => {
        const selectedRows = gridRef.current.api.getSelectedRows();

        fetch('http://localhost:5000/api/tableFamily', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                citizenId: selectedRows[0].id
            }),
        }).then((resp) => resp.json())
            .then((data) => {
                if (data.status === 400) {
                    dispatch(addTableFamily({
                        status: true,
                        citizen: selectedRows[0]
                    }))
                    return false
                }

                if (data.status === 200) {
                    dispatch(addTableFamily({
                        data: data.tablefamily,
                        citizen: selectedRows[0]
                    }))
                }
            });
    }, []);

    return (
        <div className={styles.table__card} >
            <div className={styles.header__table}>
                <b>Table Citizen</b>
            </div>
            {loader ? (
                <div className={styles.loader__block}>
                    <Loader />
                </div>
            ) : (
                <AgGridReact
                    ref={gridRef}
                    className="ag-theme-material"
                    columnDefs={columnDefs}
                    rowModelType={'infinite'}
                    onGridReady={onGridReady}
                    rowSelection={'single'}
                    onSelectionChanged={onSelectionChanged}
                >

                </AgGridReact>
            )
            }
        </div >
    )
}