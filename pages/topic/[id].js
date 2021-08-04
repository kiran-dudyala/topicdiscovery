import React, { useState, useEffect } from "react";
import { SingleTopicBuilder } from "../../components/SingleTopicBuilder";
import { Container, Row } from "reactstrap";
import AdminNavbar from "../../components/AdminNavbar";
import AdminFooter from "../../components/AdminFooter";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import { SkeletonGrid } from "../../common/SkeletonGrid";
import { ErrorPage } from "../../common/ErrorPage";
import Head from "next/head";

export default function Topic({ data, topic, errCode }) {
  const [searchItem, setSearchItem] = useState(false);
  const onSearchChange = (value) => {
    setSearchItem(value);
  };

  useEffect(() => {
    if (data) {
      setSearchItem(false);
    }
  }, [data]);

  return (
    <>
      <Head>
        <title>Topic Discovery For {topic}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Sidebar />
      <div className="main-content">
        <AdminNavbar />
        <Header onSearchChange={onSearchChange} />
        <Container className="mt--7" fluid>
          {errCode ? (
            <Row>
              <ErrorPage />
            </Row>
          ) : (
            <></>
          )}

          {!searchItem && !errCode && data ? (
            <Row>{SingleTopicBuilder(data)}</Row>
          ) : !errCode ? (
            <Row>{SkeletonGrid()}</Row>
          ) : (
            <></>
          )}
        </Container>

        <Container fluid style={{ backgroundColor: "#f3f5fa" }}>
          <AdminFooter />
        </Container>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(
    `https://topicdiscovery-api.azure-api.net/TopicDiscovery/Topic?topic= ${context.params.id}`,
    {
      headers: {
        "Ocp-Apim-Subscription-Key": process.env.SUB_KEY,
      },
    }
  );

  let response = res.status != 200 ? null : await res?.json();
  let data = response != null ? response : {};
  return {
    props: {
      data,
      topic: context.params.id,
      errCode: res.status != 200,
      fallback: false,
    },
  };
}
