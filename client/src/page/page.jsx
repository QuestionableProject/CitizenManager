
import styles from './page.module.css'
import TableCitizen from '../components/table/table-citizen';
import TableFamily from '../components/table/table-family';
import { useState } from 'react';

export default function Page() {
    const [table, setTable] = useState(false)

    return (
        <div className={styles.page}>
            <aside>
                <h1>Dashboard</h1>
                <ul>
                    <li onClick={() => setTable(false)}>Home</li>
                    <li onClick={() => setTable(true)}>Table</li>
                </ul>
            </aside>
            <section>
                {table ? (
                    <div className={styles.table__block}>
                        <TableCitizen />
                        <TableFamily />
                    </div>
                ) : (
                    <div className={styles.home}>
                        <b>Welcome!</b>
                    </div>
                )}
            </section>
        </div>
    )
}