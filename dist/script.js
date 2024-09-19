"use strict";
const PLAYERS_URL = "https://nbaserver-q21u.onrender.com/api/filter/";
const selectPosition = document.querySelector('#selector');
const towPercent = document.querySelector('#twoPercent');
const threePercent = document.querySelector('#threePercent');
const points = document.querySelector('#points');
const playersTable = document.querySelector('#playersTable');
const tbody = document.querySelector('#tbody');
const getSelectedPlayers = async () => {
    const filter = {
        position: selectPosition === null || selectPosition === void 0 ? void 0 : selectPosition.value,
        twoPercent: towPercent === null || towPercent === void 0 ? void 0 : towPercent.value,
        threePercent: threePercent === null || threePercent === void 0 ? void 0 : threePercent.value,
        points: points === null || points === void 0 ? void 0 : points.value
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
};
const runder = async () => {
    const players = await getSelectedPlayers() || [];
    const addToCard = (index) => {
        const player = players[index];
        if (player.position === 'C') {
            const cName = document.querySelector('#cName');
            cName.textContent = player.playerName;
            const cThree = document.querySelector('#cThree');
            cThree.textContent = `${player.threePercent}`;
            const cTwo = document.querySelector('#cTwo');
            cTwo.textContent = `${player.twoPercent}`;
            const cPoints = document.querySelector('#cPoints');
            cPoints.textContent = `${player.points}`;
        }
        if (player.position === 'PG') {
            const pgName = document.querySelector('#pgName');
            pgName.textContent = player.playerName;
            const pgThree = document.querySelector('#pgThree');
            pgThree.textContent = `${player.threePercent}`;
            const pgTwo = document.querySelector('#pgTwo');
            pgTwo.textContent = `${player.twoPercent}`;
            const pgPoints = document.querySelector('#pgPoints');
            pgPoints.textContent = `${player.points}`;
        }
        if (player.position === 'SG') {
            const sgName = document.querySelector('#sgName');
            sgName.textContent = player.playerName;
            const sgThree = document.querySelector('#sgThree');
            sgThree.textContent = `${player.threePercent}`;
            const sgTwo = document.querySelector('#sgTwo');
            sgTwo.textContent = `${player.twoPercent}`;
            const sgPoints = document.querySelector('#sgPoints');
            sgPoints.textContent = `${player.points}`;
        }
        if (player.position === 'SF') {
            const sfName = document.querySelector('#sfName');
            sfName.textContent = player.playerName;
            const sfThree = document.querySelector('#sfThree');
            sfThree.textContent = `${player.threePercent}`;
            const sfTwo = document.querySelector('#sfTwo');
            sfTwo.textContent = `${player.twoPercent}`;
            const sfPoints = document.querySelector('#sfPoints');
            sfPoints.textContent = `${player.points}`;
        }
        if (player.position === 'PF') {
            const pfName = document.querySelector('#pfName');
            pfName.textContent = player.playerName;
            const pfThree = document.querySelector('#pfThree');
            pfThree.textContent = `${player.threePercent}`;
            const pfTwo = document.querySelector('#pfTwo');
            pfTwo.textContent = `${player.twoPercent}`;
            const pfPoints = document.querySelector('#pfPoints');
            pfPoints.textContent = `${player.points}`;
        }
    };
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
        const addBtn = document.createElement('button');
        addBtn.textContent = `Add ${player.playerName} to Current Team`;
        addBtn.id = 'addBtn';
        addBtn.addEventListener('click', () => addToCard(index));
        tdActions.appendChild(addBtn);
        row.appendChild(tdActions);
        playersTable.appendChild(row);
    });
};
const searchButton = document.querySelector('#searcher');
searchButton.addEventListener('click', runder);
