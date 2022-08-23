function setPlayerName(player, playerBtn) {
    const playerNameField = document.getElementById(player);
    const playerName = playerNameField.innerText;
    const playerList = document.getElementById('player-list');
    const li = document.createElement('li');
    li.innerText = playerName;
    const list = playerList.querySelectorAll("li");
    let j=0;
  for (let i = 0; i < list.length; i++) {
    j= i;
  }
    if (j < 4) {
        document.getElementById('player-list').appendChild(li);
        document.getElementById(playerBtn).setAttribute('disabled','');
    }
    else{
        alert('You Have Permission to Add Maximum 5 Player');
    }
    i++;
}

document.getElementById('btn-messi').addEventListener('click', function () {
    setPlayerName('player-messi','btn-messi');
})
document.getElementById('btn-anso').addEventListener('click', function () {
    setPlayerName('player-anso', 'btn-anso');
})
document.getElementById('btn-neymar').addEventListener('click', function () {
    setPlayerName('player-neymar', 'btn-neymar');
})
document.getElementById('btn-aguero').addEventListener('click', function () {
    setPlayerName('player-aguero', 'btn-aguero');
})
document.getElementById('btn-ramos').addEventListener('click', function () {
    setPlayerName('player-ramos', 'btn-ramos');
})
document.getElementById('btn-rovert').addEventListener('click', function () {
    setPlayerName('player-rovert', 'btn-rovert');
})
document.getElementById('btn-ronaldo').addEventListener('click', function () {
    setPlayerName('player-ronaldo', 'btn-ronaldo');
})
document.getElementById('btn-haaland').addEventListener('click', function () {
    setPlayerName('player-haaland', 'btn-haaland');
})
document.getElementById('btn-mbappe').addEventListener('click', function () {
    setPlayerName('player-mbappe', 'btn-mbappe');
})