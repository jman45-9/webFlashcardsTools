class UIDOutput 
{
    usedIDs:number[][] = [];
    UID:string = "";
}

function generateUID(digits:number, used:number[][]|null)
{
    let newID:number[] = makeID(digits);
}

function makeID(digits:number):number[]
{
    let id:number[] = [];
    for(let iii = 0; digits>iii; iii++)
    {
        id.push(Math.floor(Math.random() * 93 + 33));
    }
    return id;
}

console.log(makeID(5));