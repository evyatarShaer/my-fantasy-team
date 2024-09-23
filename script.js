var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var PLAYERS_URL = "https://nbaserver-q21u.onrender.com/api/filter/";
var selectPosition = document.querySelector('#selector');
var towPercent = document.querySelector('#twoPercent');
var threePercent = document.querySelector('#threePercent');
var points = document.querySelector('#points');
var playersTable = document.querySelector('#playersTable');
var tbody = document.querySelector('#tbody');
var getSelectedPlayers = function () { return __awaiter(_this, void 0, void 0, function () {
    var filter, response, players;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                filter = {
                    position: selectPosition === null || selectPosition === void 0 ? void 0 : selectPosition.value,
                    twoPercent: towPercent === null || towPercent === void 0 ? void 0 : towPercent.value,
                    threePercent: threePercent === null || threePercent === void 0 ? void 0 : threePercent.value,
                    points: points === null || points === void 0 ? void 0 : points.value
                };
                console.log('Fetching players with filter:', filter);
                return [4 /*yield*/, fetch(PLAYERS_URL, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(filter)
                    })];
            case 1:
                response = _a.sent();
                if (!response.ok) {
                    throw new Error('Failed to fetch players');
                }
                return [4 /*yield*/, response.json()];
            case 2:
                players = _a.sent();
                console.log('Fetched players:', players);
                return [2 /*return*/, players];
        }
    });
}); };
var runder = function () { return __awaiter(_this, void 0, void 0, function () {
    var players, addToCard;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, getSelectedPlayers()];
            case 1:
                players = (_a.sent()) || [];
                tbody.innerHTML = '';
                addToCard = function (index) {
                    var player = players[index];
                    if (player.position === 'C') {
                        var cName = document.querySelector('#cName');
                        cName.textContent = player.playerName;
                        var cThree = document.querySelector('#cThree');
                        cThree.textContent = "".concat(player.threePercent);
                        var cTwo = document.querySelector('#cTwo');
                        cTwo.textContent = "".concat(player.twoPercent);
                        var cPoints = document.querySelector('#cPoints');
                        cPoints.textContent = "".concat(player.points);
                    }
                    if (player.position === 'PG') {
                        var pgName = document.querySelector('#pgName');
                        pgName.textContent = player.playerName;
                        var pgThree = document.querySelector('#pgThree');
                        pgThree.textContent = "".concat(player.threePercent);
                        var pgTwo = document.querySelector('#pgTwo');
                        pgTwo.textContent = "".concat(player.twoPercent);
                        var pgPoints = document.querySelector('#pgPoints');
                        pgPoints.textContent = "".concat(player.points);
                    }
                    if (player.position === 'SG') {
                        var sgName = document.querySelector('#sgName');
                        sgName.textContent = player.playerName;
                        var sgThree = document.querySelector('#sgThree');
                        sgThree.textContent = "".concat(player.threePercent);
                        var sgTwo = document.querySelector('#sgTwo');
                        sgTwo.textContent = "".concat(player.twoPercent);
                        var sgPoints = document.querySelector('#sgPoints');
                        sgPoints.textContent = "".concat(player.points);
                    }
                    if (player.position === 'SF') {
                        var sfName = document.querySelector('#sfName');
                        sfName.textContent = player.playerName;
                        var sfThree = document.querySelector('#sfThree');
                        sfThree.textContent = "".concat(player.threePercent);
                        var sfTwo = document.querySelector('#sfTwo');
                        sfTwo.textContent = "".concat(player.twoPercent);
                        var sfPoints = document.querySelector('#sfPoints');
                        sfPoints.textContent = "".concat(player.points);
                    }
                    if (player.position === 'PF') {
                        var pfName = document.querySelector('#pfName');
                        pfName.textContent = player.playerName;
                        var pfThree = document.querySelector('#pfThree');
                        pfThree.textContent = "".concat(player.threePercent);
                        var pfTwo = document.querySelector('#pfTwo');
                        pfTwo.textContent = "".concat(player.twoPercent);
                        var pfPoints = document.querySelector('#pfPoints');
                        pfPoints.textContent = "".concat(player.points);
                    }
                };
                players.forEach(function (player, index) {
                    var row = document.createElement('tr');
                    var tdPlayer = document.createElement('td');
                    tdPlayer.textContent = player.playerName;
                    row.appendChild(tdPlayer);
                    var tdPosition = document.createElement('td');
                    tdPosition.textContent = player.position;
                    row.appendChild(tdPosition);
                    var tdPoints = document.createElement('td');
                    tdPoints.textContent = "".concat(player.points);
                    row.appendChild(tdPoints);
                    var tdFg = document.createElement('td');
                    tdFg.textContent = "".concat(player.twoPercent);
                    row.appendChild(tdFg);
                    var td3p = document.createElement('td');
                    td3p.textContent = "".concat(player.threePercent);
                    row.appendChild(td3p);
                    var tdActions = document.createElement('td');
                    var addBtn = document.createElement('button');
                    addBtn.textContent = "Add ".concat(player.playerName, " to Current Team");
                    addBtn.id = 'addBtn';
                    addBtn.addEventListener('click', function () { return addToCard(index); });
                    tdActions.appendChild(addBtn);
                    row.appendChild(tdActions);
                    playersTable.appendChild(row);
                });
                return [2 /*return*/];
        }
    });
}); };
var searchButton = document.querySelector('#searcher');
searchButton.addEventListener('click', runder);
