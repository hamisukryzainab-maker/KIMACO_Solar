import { products } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import ProductCard from "./ProductCard";

export default function ProductsSection() {
  return (
    <section id="products" className="section products-section" aria-labelledby="products-title">
      <div className="container">
        <SectionHeading label="Our Products & Solutions" title="High-Quality Solar Solutions" id="products-title" />
        <div className="products-grid">{products.map((product) => <ProductCard product={product} key={product.title} />)}</div>
      </div>
    </section>
  );
}
