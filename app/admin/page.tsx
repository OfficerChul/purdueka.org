import UserList from "../_components/admin/userlist"
import { AllUserDataResponseDTO, UserDTO } from "app/_dto/user.dto"
import api from "app/_api/"

export default async function Page() {
    const users: AllUserDataResponseDTO = await api.user.getAllUsers()
    console.log(users)

    return (
        <div className="mt-20">
            <div className="p-10">
                <h1>User list</h1>
                <UserList data={users} />
            </div>
        </div>
    )
}