import ReactDOM from "react-dom"
import styles from './popup.module.css'
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addTableFamily } from "../store/slices/tableFamilySlice";

export default function TableAdd({ onToggle }) {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [patronymic, setPatronymic] = useState("");
    const [birthday, setBirthday] = useState("");
    const [parent, setParent] = useState("");
    const [сitizenship, setCitizenship] = useState("");

    const dispatch = useDispatch()

    const citizen = useSelector(state => state.tablefamily.citizen)

    async function addFamily() {
        console.log(citizen);
        if (name === "" || surname === "" || patronymic === "" || birthday === "" || parent === "" || сitizenship === "") return false
        const response = await fetch("http://localhost:5000/api/tableFamily/tableFamilyAdd", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name, surname, patronymic, birthday, parent, сitizenship, tablecitizenId: citizen.id
            }),
        })
        const data = await response.json()
        console.log(data);
        if (data.status === 200) {
            dispatch(addTableFamily({
                data: data.tablefamily,
                citizen
            }))
            onToggle(false)
        }

    }
    return ReactDOM.createPortal(
        <div className={styles.table}>
            <div className={styles.header}>
                <b>Add in table</b>
            </div>
            <div className={styles.table__input}>
                <input type="text" placeholder="name" value={name} onChange={e => setName(e.target.value)} />
                <input type="text" placeholder="surname" value={surname} onChange={e => setSurname(e.target.value)} />
                <input type="text" placeholder="patronymic" value={patronymic} onChange={e => setPatronymic(e.target.value)} />
                <input type="date" placeholder="birthday" value={birthday} onChange={e => setBirthday(e.target.value)} />
                <input type="text" placeholder="parent" value={parent} onChange={e => setParent(e.target.value)} />
                <input type="text" placeholder="сitizenship" value={сitizenship} onChange={e => setCitizenship(e.target.value)} />
            </div>
            <button onClick={addFamily}>Add</button>
        </div>, document.getElementById("model")
    )
}