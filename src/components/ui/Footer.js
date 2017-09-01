const Footer = () => {
    const codedWithArr = [
        {
            link: 'https://facebook.github.io/react/',
            display: 'React'
        },
        {
            link: 'http://getbootstrap.com/',
            display: 'Bootstrap'
        }
        ,
        {
            link: 'https://bootswatch.com/cosmo/',
            display: 'Cosmo - Bootswatch Theme'
        },
        {
            link: 'https://www.npmjs.com/package/uuid',
            display: 'uuid - Simple, Fast generation of UUIDS'
        },
        {
            link: 'https://webpack.github.io',
            display: 'Webpack 2'
        }
    ]
    const devInfo = {
            link: 'https://www.freecodecamp.com/jrstrayhorn',
            name: 'J.R. Strayhorn'
    };
    const renderCodedWith = codedWithArr.map((el, idx) => 
        <span key={idx}>
            <a href={el.link} target="_blank"> {el.display}</a>
            {(idx !== codedWithArr.length-1) ? ',' : ''}
        </span>
    );
    const renderDevInfo = <a href={devInfo.link} target="_blank">{devInfo.name}</a>;

    const footerStyle = {
        paddingVertical: 0,
        paddingHorizontal: 10
    };

    return (
        <div className="row footer side-pad-row" style={footerStyle}>
            <p>Coded with {renderCodedWith} by {renderDevInfo}</p>
        </div>
    );
}

export default Footer