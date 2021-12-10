import React, { useEffect, useState } from "react";

const Tableau = () => {
    const [clients, setClients] = useState([])

    useEffect(() => {
        fetchAll()
    }, [])

    const fetchAll = async () => {
        const res = await fetch(`http://localhost:8080/client/fetchAll`)
        const data = await res.json()
        setClients(data)
    }

    const fetchFemme = async () => {
        const res = await fetch(`http://localhost:8080/client/fetchFemme`)
        const data = await res.json()
        setClients(data)
    }

    const fetchHomme = async () => {
        const res = await fetch(`http://localhost:8080/client/fetchHomme`)
        const data = await res.json()
        setClients(data)
    }

    return (
        <div>
            <button onClick={e => { e.preventDefault(); fetchAll() }}>Fetch tous les clients</button>
            <button onClick={e => { e.preventDefault(); fetchHomme() }}>Fetch tous les hommes</button>
            <button onClick={e => { e.preventDefault(); fetchFemme() }}>Fetch toutes les femmes</button>

            <table className="table table-hover bg-light shadow-lg" id="no-more-tables">
                <thead>
                    <tr>
                        <th scope="col">Id </th>
                        <th scope="col">Prenom</th>
                        <th scope="col">Nom</th>
                        <th scope="col">Genre</th>
                        <th scope="col">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {clients
                        .map((client) => (
                            <tr key={client.id}>
                                <td>{client.id}</td>
                                <td>{client.firstName}</td>
                                <td>{client.lastName}</td>
                                <td>{client.gender}</td>
                                <td>{client.birthDate}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )
}

export default Tableau
