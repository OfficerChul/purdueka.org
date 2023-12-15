'use client'

import UserList from "../_components/admin/userlist"
import { AllUserDataResponseDTO, UserDTO } from "app/_dto/user.dto"
import api from "app/_api/"
import { useEffect, useState } from "react"

export default function Page() {
    const [users, setUsers] = useState({} as AllUserDataResponseDTO)
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        api.user.getAllUsers()
          .then(e => setUsers(e))
          .finally(() => setLoading(false))
      }, [])

    if (isLoading) return <p>Loading...</p>
    if (!users) return <p>No data</p>

    return (
        <div className="mt-20">
            <div className="p-10">
                <h1>User list</h1>
                <UserList data={users} />
            </div>
        </div>
    )
}