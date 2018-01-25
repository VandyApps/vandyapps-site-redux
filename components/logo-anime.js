import Anime from 'react-anime';

const setVisible = ({ animatables: [{ target }] }) =>
    target.setAttribute('visibility', 'visible');

const animSharedAttrs = {
    duration: 150,
    begin: setVisible,
    easing: 'easeOutSine'
};

export default function(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 10 456 326.5">
            <Anime width={200} delay={650} {...animSharedAttrs}>
                <rect
                    fill="#5d5b66"
                    visibility="hidden"
                    x="180"
                    y="175.715"
                    width="73"
                    height="73"
                    rx="36.5"
                    ry="36.5"
                />
            </Anime>
            <Anime width={349} delay={200} {...animSharedAttrs}>
                <rect
                    fill="#feb249"
                    visibility="hidden"
                    x="-66.431"
                    y="136.715"
                    width="73"
                    height="73"
                    rx="36.5"
                    ry="36.5"
                    transform="rotate(64.5 108.069 173.215)"
                />
            </Anime>
            <Anime width={347.5} delay={500} {...animSharedAttrs}>
                <rect
                    fill="#15c3c2"
                    visibility="hidden"
                    x="173"
                    y="136.5"
                    width="73"
                    height="73"
                    rx="36.5"
                    ry="36.5"
                    transform="rotate(64.5 345.869 173.215)"
                />
            </Anime>
            <Anime width={349} delay={350} {...animSharedAttrs} Z>
                <rect
                    fill="#f05854"
                    visibility="hidden"
                    x="52.569"
                    y="136.715"
                    width="73"
                    height="73"
                    rx="36.5"
                    ry="36.5"
                    transform="rotate(-64.5 227.069 173.215)"
                />
            </Anime>
        </svg>
    );
}
