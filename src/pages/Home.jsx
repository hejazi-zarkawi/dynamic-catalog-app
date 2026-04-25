import data from "../data/data.json";
import CategorySection from "../components/CategorySection";
import "../styles/home.css";

function Home() {
    const groupedData = data.reduce((acc, item, index) => {
        const category = item.category;

        if (!acc[category]) {
            acc[category] = [];
        }

        acc[category].push({ ...item, id: index });

        return acc;
    }, {});

    if (!data || data.length === 0) {
        return <h2>No items available</h2>;
    }

    return (

        <div className="container">
            <div className="header">
                <h1>Product Catalog</h1>
                <p>Explore items across multiple categories</p>
            </div>
            <div className="home">
                {Object.keys(groupedData).map((category) => (
                    <CategorySection
                        key={category}
                        category={category}
                        items={groupedData[category]}
                    />
                ))}
            </div>
        </div>
    );
}

export default Home;