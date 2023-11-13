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
        isValid = UIDValidityCheck(newID, used as number[][])
    }while(!isValid);
    used?.push(newID);
    let output = new UIDOutput;
    output.UID = characterize(newID);
    output.usedIDs = used as number[][];
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

function characterize(uid:number[]):string
{
    let output:string = "";
    for(let iii = 0; uid.length > iii; iii++)
    {
        output += String.fromCharCode(uid[iii]);
    }
    return output;
}

