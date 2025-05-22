export default function InfoChart({data}){
    const chartData = data
    .filter((b) => b.attributes.life.min && b.attributes.life.max)
    .slice(0, 10);
    return(
        <div className="d-flex align-items-end gap-2 border p-3">
            {chartData.map((breed) => {
            const avgLife = (breed.attributes.life.min + breed.attributes.life.max) / 2;
            return (
                <div key={breed.id} className="text-center">
                    <div
                    className="bg-primary w-100"
                    style={{
                        height: `${avgLife * 10}px`,
                        transition: 'height 0.3s ease',
                    }}
                    title={`${avgLife} years`}
                ></div>
                <small className="d-block mt-1 text-truncate" title={breed.attributes.name}>
                    {breed.attributes.name}
                </small>
                </div>
                );
            })}
        </div>
    )
}