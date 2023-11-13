class UIDOutput 
{
    usedIDs:number[][] = [];
    UID:string = "";
}

function generateUID(digits:number, used:number[][]|null)
{
    let newID:number[];
    let isValid:boolean;
    do
    {
        newID = makeID(digits);
        if(used === null)
            break;
        console.log("should not be here");
        isValid = UIDValidityCheck(newID, used as number[][])
    }while(!isValid);
    console.log("here is good");
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

function UIDValidityCheck(uid:number[], used:number[][]):boolean
{
    for(let iii=0; used.length > iii; iii++)
    {
        for(let jjj=0; uid.length > jjj; jjj++)
        {
            if(used[iii][jjj] != uid[jjj])
            {
                break;
            }
            if(jjj === uid.length - 1)
            {
                return false;
            }
            
        }
    }
    return true;
}

generateUID(5, []);