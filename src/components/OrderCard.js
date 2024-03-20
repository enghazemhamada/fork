export default function OrderCard({title, img}) {
    return(
        <div className="card">
            <img src={require(`../assets/${img}`)} alt={title} loading="lazy" />
            <h4>{title}</h4>
        </div>
    );
}