import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Card from "../components/Card";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="row container">
        <h1 className="text-center">Desaparecidos.com</h1>
        <form className="col-12  form-inline my-4 mx-auto">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Escribe el nombre de la persona que buscas"
            aria-label="buscar"
          />
        </form>
      </section>
      <section className="row">
        <div className="col mt-5 mb-4">
          <h2>Últimos desaparecidos</h2>
        </div>

        <div className="cards">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </Layout>
  );
}
