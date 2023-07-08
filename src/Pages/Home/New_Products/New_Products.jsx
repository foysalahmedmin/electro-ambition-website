import Product_Card from "../../../Components/Product_Card/Product_Card";
import Section_Title from "../../../Components/Section_Title/Section_Title";
import useProducts from "../../../Hooks/useProducts";

const New_Products = () => {
    const [products] = useProducts('all', 'latest', 0, 8)
    return (
        <section className="py-10">
            <div className="container">
                <Section_Title firstWord={'Latest'} secondWord={'Products'} />
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 justify-around items-center">
                        {
                            products.slice(0, 8).map(product => <Product_Card key={product._id} product={product} />)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default New_Products;