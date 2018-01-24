const animSharedAttrs = {
    dur: '0.15s',
    fill: 'freeze',
    calcMode: 'spline',
    keySplines: '0.39 0.575 0.565 1',
    keyTimes: '0;1'
}

export default function (props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 10 456 326.5">
            <rect fill="#5d5b66" x="180" y="175.715" height="73" rx="36.5" ry="36.5">
                <animate attributeName="width" from="73" to="200" begin="0.65s" {...animSharedAttrs} />
            </rect>
            <rect fill="#feb249" x="-66.431" y="136.715" height="73" rx="36.5" ry="36.5" transform="rotate(64.5 108.069 173.215)">
                <animate attributeName="width" from="73" to="349" begin="0.2s" {...animSharedAttrs} />
            </rect>
            <rect fill="#15c3c2" x="173" y="136.5" height="73" rx="36.5" ry="36.5" transform="rotate(64.5 345.869 173.215)">
                <animate attributeName="width" from="73" to="347.5" begin="0.5s" {...animSharedAttrs} />
            </rect>
            <rect fill="#f05854" x="52.569" y="136.715" height="73" rx="36.5" ry="36.5" transform="rotate(-64.5 227.069 173.215)">
                <animate attributeName="width" from="73" to="349" begin="0.35s" {...animSharedAttrs} />
            </rect>
        </svg>
    );
}