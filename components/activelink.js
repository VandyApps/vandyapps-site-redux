import { withRouter } from 'next/router';

const ActiveLink = ({ children, router, href }) => {
    const handleClick = e => {
        e.preventDefault();
        router.push(href);
    };

    const className = router.pathname === href ? 'active' : '';

    return (
        <a href={href} onClick={handleClick} className={className}>
            <style jsx>{`
                a {
                    margin-right: 2em;
                    line-height: 2.5em;
                    text-decoration: none;
                    text-transform: uppercase;
                    color: #a3a0ab;
                }

                a.active {
                    color: #000;
                }

                a:last-child {
                    margin-right: 0;
                }
            `}</style>
            {children}
        </a>
    );
};

export default withRouter(ActiveLink);
