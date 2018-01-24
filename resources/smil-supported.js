export default () => !!document.createElementNS && /SVGAnimate/.test((({}).toString).call(document.createElementNS('http://www.w3.org/2000/svg', 'animate')));
