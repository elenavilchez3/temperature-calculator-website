const calculator = (temperature, time) => {
    const labels = []
    const data = []
    
    for(let i = 0;i < 10;i++) {
        labels.push(temperature + i)
        data.push(time + i)
    }

    return { data: { labels, data } }
}

module.exports = calculator
