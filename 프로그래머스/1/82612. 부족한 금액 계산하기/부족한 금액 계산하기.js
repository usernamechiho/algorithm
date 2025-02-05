function solution(price, money, count) {
    // 이용료는 price
    // N번째 이용하면 price * count 배를 받음
    let priceToPay = 0;
    
    for (let i=1; i <= count; i++) {
        priceToPay += price * i
    }
    
    // 놀이기구를 count번 타면 money에서 얼마나 모자라는지 반환
    // 금액이 부족하지 않으면 0을 반환
    const hasEnoughMoney = money - priceToPay > 0;
    
    // 돈이 부족한 경우 음수를 반환하니, 양수로 변경
    return hasEnoughMoney ? 0 : Math.abs(money - priceToPay)
}