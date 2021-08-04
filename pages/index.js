import "../polyfills";
import React, { useState } from "react";
import AdminNavbar from "../components/AdminNavbar";
import AdminFooter from "../components/AdminFooter";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { TopicBuilder } from "../components/TopicBuilder";
import { ArrayChunk } from "../common/ArrayChunk";
import { Container, Row, Col } from "reactstrap";
import { SkeletonGrid } from "../common/SkeletonGrid";
import Head from "next/head";

const returnTopics = (topics) => {
  return topics.map((item, i) => (
    <>
      <Row key={i}>{TopicBuilder(item)}</Row>
      <br />
    </>
  ));
};

export default function Home({ data }) {
  const [searchItem, setSearchItem] = useState(false);

  const onSearchChange = (value) => {
    setSearchItem(value);
  };

  return (
    <>
      <Head>
        <title>Topic Discovery | Discover Trending Topics</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Sidebar />
      <div className="main-content">
        <AdminNavbar />
        <Header onSearchChange={onSearchChange} />
        <Container className="mt--7" fluid>
          {data && !searchItem ? (
            returnTopics(data)
          ) : (
            <>
              <Row>{SkeletonGrid()}</Row>
              <br />
              <Row>{SkeletonGrid()}</Row>
              <br />
              <Row>{SkeletonGrid()}</Row>
            </>
          )}
        </Container>
        <Container fluid style={{ backgroundColor: "#f3f5fa" }}>
          <AdminFooter />
        </Container>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    `https://topicdiscovery-api.azure-api.net/TopicDiscovery/Topics`,
    {
      headers: {
        "Ocp-Apim-Subscription-Key": "dc65a273321945f0b88671d34518e68a",
      },
    }
  );
  const response = await res.json();
  var data = ArrayChunk(response, 3);
  return {
    props: { data },
    revalidate: 70000,
  };
}
