var regex = /\d{1,3}(?=(\d{3})+$)/g;
function addCommas(money, reg) {
    return money.replace(reg, x => x + ",");
}