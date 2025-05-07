function createDayCounter(targetDate, displayText) {
    return function() {
        const today = new Date();
        const timeDiff = targetDate - today;
        const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        
        if(daysDiff > 0) {
            return `距离${displayText}还有 ${daysDiff} 天`;
        } else if(daysDiff === 0) {
            return `今天是${displayText}！`;
        } else {
            return `${displayText}已经过去 ${Math.abs(daysDiff)} 天`;
        }
    }
}

// 创建两个计数器函数
const counter1 = createDayCounter(new Date('2025-03-15'), '2025年3月15日');
const counter2 = createDayCounter(new Date('2025-01-23'), '2025年1月23日');

function updateCounters() {
    document.getElementById('days-counter-1').textContent = counter1();
    document.getElementById('days-counter-2').textContent = counter2();
}

// 页面加载时计算
updateCounters();
// 每天更新一次
setInterval(updateCounters, 86400000);