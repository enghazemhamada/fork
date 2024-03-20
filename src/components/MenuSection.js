import SectionHeading from "./SectionHeading";

export default function MenuSection({title, data, img}) {

    const lis = data.map((ele, index) => <li key={index}>{ele.name} <span>{ele.price} $</span></li>);

    return(
        <div className="menuSection">
            <div className="container">
                <SectionHeading text={title} />
                <div className="cards">
                    <div>
                        <ul>{lis}</ul>
                    </div>
                    <div className="image">
                        <img src={require(`../assets/${img}`)} alt={title} loading="lazy" />
                    </div>
                    <div>
                        <ul>{lis}</ul>
                    </div>
                </div>
            </div>
        </div>
    );
}