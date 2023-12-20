import Link from "next/link";
import {
    UserGroupIcon,
    HomeIcon,
    DocumentDuplicateIcon,
    CurrencyDollarIcon,
    PlusIcon,
    PlusSmallIcon
  } from '@heroicons/react/24/outline';


export const people = [ 
    {
        name: 'Dad',
        relationship: 'Father',
        gifts: [],
    },
    {
        name: 'Mom',
        relationship: 'Mother',
        gifts: [],
    },
    {
        name: 'Alex',
        relationship: 'Friend',
        gifts: [],
    },
]

export default function PeopleTable() {
    return (
        <div className="mt-6 flow-root">
            <div className="inline-block min-w-full align-middle">
            <div className="rounded-lg min-w-500 bg-gray-50 p-2 md:pt-0">
            <table className="min-w-full text-gray-900 md:table">
                <thead className="rounded-lg text-left text-sm font-normal">
                    <tr>
                    <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                        Person
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                        Relationship
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                        Add Gift
                    </th>
                    
                    </tr>
                </thead>
                <tbody className="bg-white">
                    <tr className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
                        <td className="whitespace-nowrap py-3 pl-6 pr-3">
                            <div className="flex items-center gap-3">  
                                <p>{people[0].name}</p>                                    
                            </div>
                        </td>
                        <td className="whitespace-nowrap py-3 pl-4 pr-3">
                            <div className="flex items-center gap-3">  
                                <p>{people[0].relationship}</p>                                    
                            </div>
                        </td>
                        <td className="whitespace-nowrap py-3 pl-4 pr-3">
                            <div className="flex items-center gap-3">
                            <Link href="/dashboard/gifts">
                            <PlusIcon className="w-6 bg-green-100 text-green-500 hover:bg-green-300 hover:text-green-50"></PlusIcon>
                            </Link>                                   
                            </div>
                        </td>                                  
                    </tr>
                    <tr className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
                        <td className="whitespace-nowrap py-3 pl-6 pr-3">
                            <div className="flex items-center gap-3">  
                                <p>{people[1].name}</p>                                    
                            </div>
                        </td>
                        <td className="whitespace-nowrap py-3 pl-4 pr-3">
                            <div className="flex items-center gap-3">  
                                <p>{people[1].relationship}</p>                                    
                            </div>
                        </td>
                        <td className="whitespace-nowrap py-3 pl-4 pr-3">
                            <div className="flex items-center gap-3">
                            <Link href="/dashboard/gifts">
                            <PlusIcon className="w-6 bg-green-100 text-green-500 hover:bg-green-300 hover:text-green-50"></PlusIcon> 
                            </Link>                                 
                            </div>
                        </td>                                  
                    </tr>
                    <tr className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg ">
                        <td className="whitespace-nowrap py-3 pl-6 pr-3">
                            <div className="flex items-center gap-3">  
                                <p>{people[2].name}</p>                                    
                            </div>
                        </td>
                        <td className="whitespace-nowrap py-3 pl-4 pr-3">
                            <div className="flex items-center gap-3">  
                                <p>{people[2].relationship}</p>                                    
                            </div>
                        </td>
                        <td className="whitespace-nowrap py-3 pl-4 pr-3">
                            <div className="flex items-center gap-3">
                            <Link href="/dashboard/gifts">
                            <PlusIcon className="w-6 bg-green-100 text-green-500 hover:bg-green-300 hover:text-green-50"></PlusIcon>   
                            </Link>                                                         
                            </div>
                        </td>                                  
                    </tr>
                </tbody>
            </table>
            </div>
            </div>
        </div>
    );
}