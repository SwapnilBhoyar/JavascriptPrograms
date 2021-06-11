var gambler_money = 100
var is_bet = 1
var bet_times = 0
var bet_wons = 0
var bet_lose = 0

while ((gambler_money > 0) && (gambler_money < 200) && (is_bet == 1)) {
    var flip_coin = (Math.random() > 0.5) ? 1 : 0;

    if (flip_coin == 0) {
        bet_wons = bet_wons + 1
    } else {
        gambler_money = gambler_money - 1
        bet_lose = bet_lose + 1
    }
    bet_times = bet_times + 1
}

console.log(bet_wons + " games won")
console.log(bet_times + " bet made");