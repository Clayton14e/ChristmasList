import React from 'react'
import Link from 'next/link';
import { Button } from '../button';
import { people } from './peopletable';
import { lusitana } from '@/app/ui/fonts';

const addgift = () => {
  return (
    <div></div>
  )
}

export default function AddGift(){
    return(
        <form>
            <div className="rounded-md bg-gray-50 p-4 md:p-6">
                
            <div className="flex w-full items-center justify-between">
            <h1 className={`${lusitana.className} text-3xl py-1`}>Add Gift </h1>
      </div>
        {/* Customer Name */}
        <div className="mb-4">
          <label htmlFor="customer" className="mb-2 block text-sm font-medium">
            Choose Person
          </label>
          <div className="relative">
            {
                
            }
            <select
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue=""
            >
              <option value="" disabled>
                
                </option>
                
                <option value="option1">
                  Option 1
                </option>
                <option value="option2">
                  Option 2
                </option>
                <option value="option3">
                  Option 3
                </option>
                </select>
            
          </div>
        </div>

        {/* Invoice Amount */}
        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Gift Price
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="amount"
                name="amount"
                type="number"
                step="0.01"
                placeholder="Enter USD amount"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              
            </div>
          </div>
        </div>

        {/* Invoice Status */}
        <fieldset>
          <legend className="mb-2 block text-sm font-medium">
            Gift Status
          </legend>
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  id="pending"
                  name="status"
                  type="radio"
                  value="pending"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="pending"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  Not Purchased
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="paid"
                  name="status"
                  type="radio"
                  value="paid"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="paid"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-400 px-3 py-1.5 text-xs font-medium text-white"
                >
                  Purchased
                </label>
              </div>
            </div>
          </div>
        </fieldset>
        </div>
        <div className="mt-6 flex justify-end gap-4">
            <Link
            href="/dashboard"
            className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
            >
            Cancel
            </Link>
            <Button type="submit">Add Gift</Button>
        </div>
        </form>
    );
}