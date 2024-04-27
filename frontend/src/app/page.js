import AllProducts from "App/components/AllProducts";

export default function Home() {
  return (
    // Aquí se muestra la lista de productos con el componente AllProducts que cree
    <main className="flex min-h-screen flex-col items-center justify-between p-24 pt-10">
      <AllProducts />
    </main>
  );
}
