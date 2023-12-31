'use client'

import { AllUserDataResponseDTO, UserDTO } from "app/_dto/user.dto"
import api from "app/_api/"
import { useEffect, useState } from "react"
import Image from 'next/image'
import { Dropdown } from "flowbite-react"

export default function UserList(props: {data: AllUserDataResponseDTO}){
    const [usersState, setUsersState] = useState<UserDTO[]>(props.data.users)
    const [pageState, setPageState] = useState<number>(props.data.page)
    let startPage = (pageState - 1) * props.data.pageCount + 1
    let endPage = Number(startPage) + Number(props.data.pageCount) - 1

    useEffect(() => {
        console.log('refresh')
    }, [usersState])

    const deactivateUser = async (id: number) => {
        const res = await api.user.deleteUser(id.toString())
        const newUsersState:UserDTO[] = [...usersState]
    
        for (let i = 0; i < newUsersState.length; i++) {
            if (newUsersState[i].id == id) {
                newUsersState[i].deletedAt = res.data.deletedAt
            }
        }

        setUsersState(newUsersState)
    }

    const activateUser = async (id: number) => {
        const res = await api.user.restoreUser(id.toString())
        const newUsersState:UserDTO[] = [...usersState]

        for (let i = 0; i < newUsersState.length; i++) {
            if (newUsersState[i].id == id) {
                newUsersState[i].deletedAt = null as unknown as Date
            }
        }

        setUsersState(newUsersState)
    }

    return (
        <div className="relative overflow-visible shadow-md sm:rounded-lg m-4 p-2">
            <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
                <div>
                    <Dropdown label="Action" dismissOnClick={false}>
                        <Dropdown.Item>Item 1</Dropdown.Item>
                        <Dropdown.Item>Item 2</Dropdown.Item>
                        <Dropdown.Item>Item 3</Dropdown.Item>
                    </Dropdown>
                </div>
                <label htmlFor="table-search" className="sr-only">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="text" id="table-search-users" className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for users" />
                </div>
            </div>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="p-4">
                            <div className="flex items-center">
                                <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                            </div>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            CreatedAt
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Role
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Status
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {usersState.map((user) => 
                        <tr key={user.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                    <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                {user.id}
                            </td>
                            <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                <Image width="10" height="10" className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image" />
                                <div className="ps-3">
                                    <div className="text-base font-semibold">{user.firstname} {user.lastname}</div>
                                    <div className="font-normal text-gray-500">{user.email}</div>
                                </div>  
                            </th>
                            <td className="px-6 py-4">
                                <div className="flex items-center">
                                    {user.createdAt.toLocaleString()}
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <span className="text-sm font-medium inline-block py-1 px-2 rounded-full text-blue-600 bg-blue-50 dark:text-blue-600 dark:bg-blue-50">
                                    {user.role}
                                </span>
                            </td>
                            <td className="px-6 py-4">
                                {user.deletedAt == null ? 
                                <div className="flex items-center">
                                    <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Enabled
                                </div> :
                                <div className="flex items-center">
                                    <div className="h-2.5 w-2.5 rounded-full bg-red-500 me-2"></div> Disabled
                                </div>
                                }
                            </td>
                            <td className="px-6 py-4">
                                <Dropdown label="Edit user" dismissOnClick={true}>
                                    <Dropdown.Item>비밀번호 초기화</Dropdown.Item>
                                    <Dropdown.Item>Change role</Dropdown.Item>
                                    {user.deletedAt == null ?
                                        <Dropdown.Item onClick={() => deactivateUser(user.id)}>탈퇴</Dropdown.Item> :
                                        <Dropdown.Item onClick={() => activateUser(user.id)}>복구</Dropdown.Item>
                                    }
                                </Dropdown>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            <nav className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span className="font-semibold text-gray-900 dark:text-white">{startPage}-{endPage}</span> of <span className="font-semibold text-gray-900 dark:text-white">{props.data.total}</span></span>
                <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                    <li>
                        <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                    </li>
                    <li>
                        <a href="#" aria-current="page" className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                    </li>
                    <li>
                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}