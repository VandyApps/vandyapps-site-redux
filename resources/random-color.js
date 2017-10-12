import hash from 'string-hash'

// Red, Pink, Purple, Deep Purple, Indigo, Blue, Light Blue, Cyan, Teal, Green, Light Green, Lime, Yellow, Amber, Orange, Deep Orange, Brown, Grey, Blue Grey

const paletteColors = Object.values({
    '600': ['#E53935', '#D81B60', '#8E24AA', '#5E35B1', '#3949AB', '#1E88E5', /*'#039BE5',*/ '#00ACC1', '#00897B', '#43A047', '#7CB342', /*'#C0CA33',*/ '#FDD835', '#FFB300', '#FB8C00', '#F4511E', '#6D4C41', /*'#757575',*/ '#546E7A'],
    '700': ['#D32F2F', '#C2185B', '#7B1FA2', '#512DA8', '#303F9F', '#1976D2', /*'#0288D1',*/ '#0097A7', '#00796B', '#388E3C', '#689F38', /*'#AFB42B',*/ '#FBC02D', '#FFA000', '#F57C00', '#E64A19', '#5D4037', /*'#616161',*/ '#455A64'],
    '800': ['#C62828', '#AD1457', '#6A1B9A', '#4527A0', '#283593', '#1565C0', /*'#0277BD',*/ '#00838F', '#00695C', '#2E7D32', '#558B2F', /*'#9E9D24',*/ '#F9A825', '#FF8F00', '#EF6C00', '#D84315', '#4E342E', /*'#424242',*/ '#37474F'],
    '900': ['#B71C1C', '#880E4F', '#4A148C', '#311B92', '#1A237E', '#0D47A1', /*'#01579B',*/ '#006064', '#004D40', '#1B5E20', '#33691E', /*'#827717',*/ '#F57F17', '#FF6F00', '#E65100', '#BF360C', '#3E2723', /*'#212121',*/ '#263238'],
}).reduce((acc, val) => acc.concat(val));

export default (id) => {
    return paletteColors[hash(id) % paletteColors.length]
}