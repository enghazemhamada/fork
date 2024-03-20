export default function FeatureCard({img, title, desc}) {
    return(
        <div className="card">
            <div className="image">
                <img src={require(`../assets/${img}`)} alt={title} loading="lazy" />
            </div>
            <div className="info">
                <h4>{title}</h4>
                <p>{desc}</p>
            </div>
        </div>
    );
}