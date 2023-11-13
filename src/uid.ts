class UIDOutput 
{
    usedIDs:number[][] = [];
    UID:string = "";
}

class asciiChar
{
    value:number;
    character:string;
    
    constructor(value:number, character:string)
    {
        this.value = value;
        this.character = character;
    }
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

function characterize(uid:number)
{

}

function numberToAscii(input:number)
{
    switch(input)
    {
        case 33:
            return "!";
            break;
        case 34:
            return "\"";
        case 35:
        return "#";
            break;
        case 36:
            return "$";
            break;
        case 37:
            return "%";
            break;
        case 38:
            return "&"; 
            break;
        case 39:
            return "'";
            break;
        case 40:
            return "(";
            break;
        case 41:
            return ")";
            break;
        case 42:
            return "*";
            break;
        case 43:
            return "+";
            break;
        case 44:
            return ",";
            break;
        case 45:
            return "-";
            break;
        case 46:
            return ".";
            break;
        case 47:
            return "/";
            break;
        case 48:
            return "0";
            break;
        case 49:
            return "1";
            break;
        case 50:
            return "2";
            break;
        case 51:
            return "3";
            break;
        case 52:
            return "4";
            break;
        case 53:
            return "5";
            break;
        case 54:
            return "6";
            break;
        case 55:
            return "7";
            break;
        case 56:
            return "8";
            break;
        case 57:
            return "9";
            break;
        case 58:
            return ":";
            break;
        case 59:
            return ";";
            break;
        case 60:
            return "<";
            break;
        case 61:
            return "=";
            break;
        case 62:
            return ">";
            break;
        case 63:
            return "?";
            break;
        case 64:
            return "@";
            break;
        case 65:
            return "A";
            break;
        case 66:
            return "B";
            break;
        case 67:
            return "C";
            break;
        case 68:
            return "D";
            break;
        case 69:
            return "E";
            break;
        case 70:
            return "F";
            break;
        case 71:
            return "G";
            break;
        case 72:
            return "H";
            break;
        case 73:
            return "J";
            break;
        case 74:
            return "H";
            break;
        case 75:
            return "I";
            break;
        case 76:
            return "J";
            break;
        case 77:
            return "K";
            break;
        case 78:
            return "L";
            break;
        case 79:
            return "M";
            break;
        case 80:
            return "P";
            break;
        case 81:
            return "Q";
            break;
        case 82:
            return "R";
            break;
        case 83:
            return "S";
            break;
        case 84:
            return "T";
            break;
        case 85:
            return "U";
            break;
        case 86:
            return "V";
            break;
        case 87:
            return "W";
            break;
        case 88:
            return "X";
            break;
        case 89:
            return "y";
            break;
        case 90:
            return "Z";
            break;
        case 91:
            return "[";
            break;
        case 92:
            return "\\";
            break;
        case 93:
            return "]";
            break;
        case 94:
            return "^";
            break;
        case 95:
            return "_";
            break;
        case 96:
            return "`";
            break;
        case 97:
            return "a";
            break;
        case 98:
            return "b";
            break;
        case 99:
            return "c";
            break;
        case 100:
            return "d";
            break;
        case 101:
            return "e";
            break;
        case 102:
            return "f";
            break;
        case 103:
            return "g";
            break;
        case 104:
            return "h";
            break;
        case 105:
            return "i";
            break;
        case 106:
            return "j";
            break;
        case 107:
            return "k";
            break;
        case 108:
            return "l";
            break;
        case 109:
            return "m";
            break;
        case 110:
            return "n";
            break;
        case 111:
            return "o";
            break;
        case 112:
            return "p";
            break;
        case 113:
            return "q";
            break;
        case 114:
            return "r";
            break;
        case 115:
            return "s";
            break;
        case 116:
            return "t";
            break;
        case 117:
            return "u";
            break;
        case 118:
            return "v";
            break;
        case 119:
            return "w";
            break;
        case 120:
            return "x";
            break;
        case 121:
            return "y";
            break;
        case 122:
            return "z";
            break;
        case 123:
            return "{";
            break;
        case 124:
            return "|";
            break;
        case 125:
            return "}";
            break;
        case 126:
            return "~";
            break;
    }
}