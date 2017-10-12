const paletteColors = ["#FC6E51", "#967ADC", "#434A54", "#37BC9B", "#DA4453", "#4A89DC", "#D770AD", "#8CC152", "#3BAFDA", "#FF903D"]

export default (id) => {
    return paletteColors[id % paletteColors.length]
}