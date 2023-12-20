import { lusitana } from '@/app/ui/fonts';
// import { people } from './peopletable';
import { promises as fs } from 'fs';
import Example from './doughnut.js';



export default async function BudgetPage(){
    let totalPrice = 0;
    const file = await fs.readFile(process.cwd() + '/app/lib/placeholder-data.json', 'utf8')
    const data = JSON.parse(file)
    for( let i = 0; i < data.people.length; i++){
    
        for( let a = 0; a < data.people[i].gifts.length; a++){ 
            totalPrice += data.people[i].gifts[a].price;
        }     
        console.log(totalPrice);
    }
    // const peopleAmount = people.length;
    // const pageData = CollectData();
    // console.log(pageData);
    return(
        <div>
            <div className="flex w-[100%] items-center justify-between">
            <h1 className={`${lusitana.className} text-3xl`}>Budget</h1>
            </div>
                <div className="grid gap-4 grid-cols-3 mt-5 text-white">
                <div className="mb-2 h-26 items-center justify-left rounded-md bg-green-300 p-1 md:h-40 drop-shadow-md">
                <div className="flex justify-center pt-2">
                    <h1 className={`${lusitana.className} text-2xl`}>People</h1>
                </div>
                <div className="flex justify-center pb-2">
                <div className="items-center text-4xl">{data.people.length}</div> 
                </div>
                </div>
                <div className="mb-2 col-auto h-26 items-center justify-left rounded-md bg-green-300 p-1 md:h-40 drop-shadow-md">
                <div className="flex justify-center pb-2">
                    <div className={`${lusitana.className} text-2xl `}>Total Cost</div>
                </div>
                <div className="flex justify-center pb-2">
                    <div className="items-center text-4xl pt-1">${totalPrice}</div>
                </div>
                </div>
                <div>
                <div className="mb-2 h-26 items-center justify-left rounded-md bg-green-300 p-1 md:h-40 drop-shadow-md">
                <div className="flex justify-center pb-2">
                    <h1 className={`${lusitana.className} text-2xl`}>Total Budget</h1>
                </div>
                <div className="flex justify-center pb-2">
                    <div className="items-center text-4xl">$750</div> 
                </div>
                </div>
                </div>
            </div>
            <div>
            <Example></Example>
            </div>
        </div>
        

    );
}
