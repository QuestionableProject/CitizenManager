import ReactDOM from "react-dom"
import styles from './popup.module.css'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTableFamily } from "../store/slices/tableFamilySlice";


export default function TableUpdate({ family, onToggle }) {
    const dispatch = useDispatch()

    const citizen = useSelector(state => state.tablefamily.citizen)

    const citizenFamily = family.api.getSelectedRows()[0]

    const [name, setName] = useState(`${citizenFamily.name}`);
    const [surname, setSurname] = useState(`${citizenFamily.surname}`);
    const [patronymic, setPatronymic] = useState(`${citizenFamily.patronymic}`);
    const [birthday, setBirthday] = useState(`${citizenFamily.birthday}`);
    const [parent, setParent] = useState(`${citizenFamily.parent}`);
    const [сitizenship, setCitizenship] = useState(`${citizenFamily.сitizenship}`);

    async function updateFamily() {
        if (!family.api.getSelectedRows()[0]) {
            onToggle(false)
            return false
        }
        if (name === "" || surname === "" || patronymic === "" || birthday === "" || parent === "" || сitizenship === "") return false
        const response = await fetch("http://localhost:5000/api/tableFamily/tableFamilyUpdate", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: citizenFamily.id, name, surname, patronymic, birthday, parent, сitizenship, tablecitizenId: citizenFamily.tablecitizenId
            }),
        })
        const data = await response.json()
        if (data.status === 200) {
            dispatch(addTableFamily({
                data: data.tablefamily,
                citizen
            }))
            
        }
        onToggle(false)

    }

    return ReactDOM.createPortal(
        <div className={styles.table}>
            <div className={styles.header}>
                <b>Update in table</b>
            </div>
            <div className={styles.table__input}>
                <input type="text" placeholder="name" value={name} onChange={e => setName(e.target.value)} />
                <input type="text" placeholder="surname" value={surname} onChange={e => setSurname(e.target.value)} />
                <input type="text" placeholder="patronymic" value={patronymic} onChange={e => setPatronymic(e.target.value)} />
                <input type="date" placeholder="birthday" value={birthday} onChange={e => setBirthday(e.target.value)} />
                <input type="text" placeholder="parent" value={parent} onChange={e => setParent(e.target.value)} />
                <input type="text" placeholder="сitizenship" value={сitizenship} onChange={e => setCitizenship(e.target.value)} />
            </div>
            <button onClick={updateFamily}>Add</button>
        </div>, document.getElementById("model")
    )
}