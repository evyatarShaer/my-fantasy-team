interface Player {
    position: string;
    twoPercent: number;
    threePercent: number;
    points: number;
    playerName: string;
}


const PLAYERS_URL = "https://nbaserver-q21u.onrender.com/api/filter/";

const selectPosition = document.querySelector('#selector') as HTMLSelectElement;
const towPercent = document.querySelector('#twoPercent') as HTMLSelectElement;
const threePercent = document.querySelector('#threePercent') as HTMLSelectElement;
const points = document.querySelector('#points') as HTMLSelectElement;

const playersTable = document.querySelector('#playersTable') as HTMLTableElement;

const tbody = document.querySelector('#tbody') as HTMLTableElement;


const getSelectedPlayers = async (): Promise<Player[]> => {
    const filter = {
        position: selectPosition?.value, 
        twoPercent: towPercent?.value,
        threePercent: threePercent?.value,
        points: points?.value
    };

    console.log('Fetching players with filter:', filter);
    
    const response = await fetch(PLAYERS_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(filter)
    });
    if (!response.ok) {
        throw new Error('Failed to fetch players');
    }

    const players = await response.json();
    console.log('Fetched players:', players);
    return players;   
}



const runder = async () => {
    const players = await getSelectedPlayers() || [];

    tbody.innerHTML = '';

    const addToCard = (index: number) => {
        const player = players[index];
        if (player.position === 'C')
        {
            const cName = document.querySelector('#cName') as HTMLInputElement;
            cName.textContent = player.playerName;
            const cThree = document.querySelector('#cThree') as HTMLInputElement;
            cThree.textContent = `${player.threePercent}`;
            const cTwo = document.querySelector('#cTwo') as HTMLInputElement;
            cTwo.textContent = `${player.twoPercent}`;
            const cPoints = document.querySelector('#cPoints') as HTMLInputElement;
            cPoints.textContent = `${player.points}`;
        }
        if (player.position === 'PG')
        {
            const pgName = document.querySelector('#pgName') as HTMLInputElement;
            pgName.textContent = player.playerName;
            const pgThree = document.querySelector('#pgThree') as HTMLInputElement;
            pgThree.textContent = `${player.threePercent}`;
            const pgTwo = document.querySelector('#pgTwo') as HTMLInputElement;
            pgTwo.textContent = `${player.twoPercent}`;
            const pgPoints = document.querySelector('#pgPoints') as HTMLInputElement;
            pgPoints.textContent = `${player.points}`;
        }
        if (player.position === 'SG')
        {
            const sgName = document.querySelector('#sgName') as HTMLInputElement;
            sgName.textContent = player.playerName;
            const sgThree = document.querySelector('#sgThree') as HTMLInputElement;
            sgThree.textContent = `${player.threePercent}`;
            const sgTwo = document.querySelector('#sgTwo') as HTMLInputElement;
            sgTwo.textContent = `${player.twoPercent}`;
            const sgPoints = document.querySelector('#sgPoints') as HTMLInputElement;
            sgPoints.textContent = `${player.points}`;
        }
        if (player.position === 'SF')
        {
            const sfName = document.querySelector('#sfName') as HTMLInputElement;
            sfName.textContent = player.playerName;
            const sfThree = document.querySelector('#sfThree') as HTMLInputElement;
            sfThree.textContent = `${player.threePercent}`;
            const sfTwo = document.querySelector('#sfTwo') as HTMLInputElement;
            sfTwo.textContent = `${player.twoPercent}`;
            const sfPoints = document.querySelector('#sfPoints') as HTMLInputElement;
            sfPoints.textContent = `${player.points}`;
        }
        if (player.position === 'PF')
        {
            const pfName = document.querySelector('#pfName') as HTMLInputElement;
            pfName.textContent = player.playerName;
            const pfThree = document.querySelector('#pfThree') as HTMLInputElement;
            pfThree.textContent = `${player.threePercent}`;
            const pfTwo = document.querySelector('#pfTwo') as HTMLInputElement;
            pfTwo.textContent = `${player.twoPercent}`;
            const pfPoints = document.querySelector('#pfPoints') as HTMLInputElement;
            pfPoints.textContent = `${player.points}`;
        }
    }
    

    players.forEach((player, index) => {
        const row = document.createElement('tr');

        const tdPlayer = document.createElement('td');
        tdPlayer.textContent = player.playerName;
        row.appendChild(tdPlayer);

        const tdPosition = document.createElement('td');
        tdPosition.textContent = player.position;
        row.appendChild(tdPosition);

        const tdPoints = document.createElement('td');
        tdPoints.textContent = `${player.points}`;
        row.appendChild(tdPoints);
        
        const tdFg = document.createElement('td');
        tdFg.textContent = `${player.twoPercent}`;
        row.appendChild(tdFg);
        
        const td3p = document.createElement('td');
        td3p.textContent = `${player.threePercent}`;
        row.appendChild(td3p);
        
        const tdActions = document.createElement('td');

        const aTag = document.createElement('a');
        aTag.href = '#playersContainer';

        const addBtn = document.createElement('button');
        addBtn.textContent = `Add ${player.playerName} to Current Team`;
        addBtn.id = 'addBtn';
        addBtn.addEventListener('click', () => addToCard(index));
        
        aTag.appendChild(addBtn);

        tdActions.appendChild(aTag);
        row.appendChild(tdActions);
        
        tbody.appendChild(row);
    });
}


const searchButton = document.querySelector('#searcher') as HTMLSelectElement;
searchButton.addEventListener('click', runder)
