function solve(namesArray)
{
    namesArray.sort((a,b) => {
        return a.localeCompare(b);
    });
    
    for(let i = 0; i < namesArray.length; i++){
        console.log(`${i + 1}.${namesArray[i]}`)
    }
}

solve(["John", "Bob", "Christina", "Ema"]);