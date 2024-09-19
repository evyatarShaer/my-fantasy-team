interface Player {
    position: string;
    twoPercent: number;
    threePercent: number;
    points: number;
    playerName: string;
}

const PLAYERS_URL = "https://nbaserver-q21u.onrender.com";

const selectPosition = document.querySelector('#selector');
const towPercent = document.querySelector('#two-percent');
const threePercent = document.querySelector('#three-percent');
const points = document.querySelector('#points');

const filter = {
    position: selectPosition,
    twoPercent: towPercent,
    threePercent: threePercent,
    points: points,
}

const query = new URLSearchParams(filter as any).toString();


const createPlayer = async (player: Player) : Promise<void> => {
    try{
    const response = await fetch(`${PLAYERS_URL}/?${query}`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(player)
    });
    if (!response.ok){
        throw new Error("is not ok");
    }
    console.log('player created');
    
    }
    catch(error){
        console.log(error)
    }
}


const playersTable = document.querySelector('#playersTable tbody') as HTMLTableSectionElement;

const runder = async () => {
    
}
