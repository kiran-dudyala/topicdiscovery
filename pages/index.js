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
  // const res = await fetch(process.env.PROD_TOPICS, {
  //   headers: {
  //     "Ocp-Apim-Subscription-Key": process.env.SUB_KEY,
  //   },
  // });
  // const response = await res.json();
  var data = ArrayChunk(payload, 3);
  return {
    props: { data },
    //revalidate: 70000,
  };
}

let payload = [{
  "topic": "biontech",
  "data": [{
      "data": 1.0,
      "date": "Feb 04, 2021"
  }, {
      "data": 1.0,
      "date": "Mar 20, 2021"
  }, {
      "data": 1.0,
      "date": "Mar 23, 2021"
  }, {
      "data": 2.0,
      "date": "Mar 31, 2021"
  }, {
      "data": 1.0,
      "date": "Apr 01, 2021"
  }, {
      "data": 1.0,
      "date": "Apr 02, 2021"
  }, {
      "data": 1.0,
      "date": "Apr 19, 2021"
  }, {
      "data": 1.0,
      "date": "Apr 28, 2021"
  }, {
      "data": 1.0,
      "date": "Apr 29, 2021"
  }, {
      "data": 1.0,
      "date": "May 04, 2021"
  }, {
      "data": 1.0,
      "date": "May 09, 2021"
  }, {
      "data": 1.0,
      "date": "May 10, 2021"
  }, {
      "data": 1.0,
      "date": "May 18, 2021"
  }, {
      "data": 1.0,
      "date": "May 20, 2021"
  }, {
      "data": 1.0,
      "date": "May 26, 2021"
  }, {
      "data": 1.0,
      "date": "Jun 01, 2021"
  }, {
      "data": 1.0,
      "date": "Jun 09, 2021"
  }, {
      "data": 1.0,
      "date": "Jun 21, 2021"
  }, {
      "data": 1.0,
      "date": "Jul 11, 2021"
  }, {
      "data": 1.0,
      "date": "Jul 14, 2021"
  }, {
      "data": 2.0,
      "date": "Jul 15, 2021"
  }, {
      "data": 1.0,
      "date": "Jul 21, 2021"
  }, {
      "data": 1.0,
      "date": "Jul 22, 2021"
  }, {
      "data": 1.0,
      "date": "Jul 26, 2021"
  }, {
      "data": 1.0,
      "date": "Aug 02, 2021"
  }, {
      "data": 1.0,
      "date": "Aug 16, 2021"
  }, {
      "data": 1.0,
      "date": "Aug 23, 2021"
  }, {
      "data": 1.0,
      "date": "Aug 26, 2021"
  }, {
      "data": 2.0,
      "date": "Aug 27, 2021"
  }, {
      "data": 1.0,
      "date": "Aug 31, 2021"
  }, {
      "data": 1.0,
      "date": "Sep 01, 2021"
  }, {
      "data": 1.0,
      "date": "Sep 02, 2021"
  }, {
      "data": 1.0,
      "date": "Sep 08, 2021"
  }, {
      "data": 1.0,
      "date": "Sep 13, 2021"
  }, {
      "data": 1.0,
      "date": "Sep 16, 2021"
  }, {
      "data": 1.0,
      "date": "Sep 20, 2021"
  }, {
      "data": 1.0,
      "date": "Sep 21, 2021"
  }, {
      "data": 1.0,
      "date": "Sep 22, 2021"
  }, {
      "data": 1.0,
      "date": "Sep 28, 2021"
  }, {
      "data": 1.0,
      "date": "Sep 30, 2021"
  }, {
      "data": 1.0,
      "date": "Oct 05, 2021"
  }, {
      "data": 1.0,
      "date": "Oct 15, 2021"
  }, {
      "data": 1.0,
      "date": "Oct 20, 2021"
  }, {
      "data": 1.0,
      "date": "Oct 21, 2021"
  }, {
      "data": 1.0,
      "date": "Oct 23, 2021"
  }, {
      "data": 1.0,
      "date": "Oct 26, 2021"
  }, {
      "data": 1.0,
      "date": "Oct 29, 2021"
  }, {
      "data": 1.0,
      "date": "Nov 02, 2021"
  }, {
      "data": 1.0,
      "date": "Nov 04, 2021"
  }, {
      "data": 2.0,
      "date": "Nov 10, 2021"
  }, {
      "data": 1.0,
      "date": "Nov 12, 2021"
  }, {
      "data": 1.0,
      "date": "Nov 15, 2021"
  }, {
      "data": 1.0,
      "date": "Nov 16, 2021"
  }, {
      "data": 1.0,
      "date": "Nov 17, 2021"
  }, {
      "data": 5.0,
      "date": "Nov 19, 2021"
  }, {
      "data": 1.0,
      "date": "Nov 22, 2021"
  }, {
      "data": 2.0,
      "date": "Nov 23, 2021"
  }, {
      "data": 2.0,
      "date": "Nov 25, 2021"
  }, {
      "data": 3.0,
      "date": "Nov 30, 2021"
  }, {
      "data": 1.0,
      "date": "Dec 06, 2021"
  }, {
      "data": 2.0,
      "date": "Dec 08, 2021"
  }, {
      "data": 1.0,
      "date": "Dec 09, 2021"
  }, {
      "data": 2.0,
      "date": "Dec 10, 2021"
  }, {
      "data": 1.0,
      "date": "Dec 12, 2021"
  }, {
      "data": 1.0,
      "date": "Dec 13, 2021"
  }, {
      "data": 11.0,
      "date": "Dec 14, 2021"
  }, {
      "data": 4.0,
      "date": "Dec 15, 2021"
  }, {
      "data": 7.0,
      "date": "Dec 16, 2021"
  }],
  "topicPercentage": 600,
  "trendStatus": "Drifting",
  "startLabel": "Feb 2021",
  "endLabel": "Dec 2021"
}, {
  "topic": "joe biden",
  "data": [{
      "data": 1.0,
      "date": "Nov 15, 2021"
  }, {
      "data": 1.0,
      "date": "Nov 16, 2021"
  }, {
      "data": 4.0,
      "date": "Nov 17, 2021"
  }, {
      "data": 4.0,
      "date": "Nov 18, 2021"
  }, {
      "data": 2.0,
      "date": "Nov 19, 2021"
  }, {
      "data": 1.0,
      "date": "Nov 20, 2021"
  }, {
      "data": 3.0,
      "date": "Nov 21, 2021"
  }, {
      "data": 5.0,
      "date": "Nov 22, 2021"
  }, {
      "data": 2.0,
      "date": "Nov 23, 2021"
  }, {
      "data": 3.0,
      "date": "Nov 24, 2021"
  }, {
      "data": 2.0,
      "date": "Nov 28, 2021"
  }, {
      "data": 6.0,
      "date": "Nov 29, 2021"
  }, {
      "data": 8.0,
      "date": "Nov 30, 2021"
  }, {
      "data": 2.0,
      "date": "Dec 01, 2021"
  }, {
      "data": 3.0,
      "date": "Dec 02, 2021"
  }, {
      "data": 2.0,
      "date": "Dec 03, 2021"
  }, {
      "data": 1.0,
      "date": "Dec 04, 2021"
  }, {
      "data": 1.0,
      "date": "Dec 05, 2021"
  }, {
      "data": 1.0,
      "date": "Dec 06, 2021"
  }, {
      "data": 2.0,
      "date": "Dec 07, 2021"
  }, {
      "data": 2.0,
      "date": "Dec 10, 2021"
  }, {
      "data": 2.0,
      "date": "Dec 11, 2021"
  }, {
      "data": 3.0,
      "date": "Dec 14, 2021"
  }, {
      "data": 14.0,
      "date": "Dec 15, 2021"
  }, {
      "data": 34.0,
      "date": "Dec 16, 2021"
  }],
  "topicPercentage": 3300,
  "trendStatus": "Trending",
  "startLabel": "Nov 2021",
  "endLabel": "Dec 2021"
}, {
  "topic": "fertiliser ",
  "data": [{
      "data": 1.0,
      "date": "Dec 31, 2020"
  }, {
      "data": 1.0,
      "date": "Jan 22, 2021"
  }, {
      "data": 1.0,
      "date": "Mar 29, 2021"
  }, {
      "data": 1.0,
      "date": "Apr 05, 2021"
  }, {
      "data": 1.0,
      "date": "Apr 11, 2021"
  }, {
      "data": 1.0,
      "date": "May 10, 2021"
  }, {
      "data": 1.0,
      "date": "Jun 07, 2021"
  }, {
      "data": 1.0,
      "date": "Jun 14, 2021"
  }, {
      "data": 1.0,
      "date": "Jun 16, 2021"
  }, {
      "data": 1.0,
      "date": "Jul 10, 2021"
  }, {
      "data": 1.0,
      "date": "Jul 27, 2021"
  }, {
      "data": 1.0,
      "date": "Aug 05, 2021"
  }, {
      "data": 1.0,
      "date": "Aug 06, 2021"
  }, {
      "data": 3.0,
      "date": "Aug 11, 2021"
  }, {
      "data": 1.0,
      "date": "Aug 12, 2021"
  }, {
      "data": 1.0,
      "date": "Aug 19, 2021"
  }, {
      "data": 1.0,
      "date": "Aug 20, 2021"
  }, {
      "data": 1.0,
      "date": "Aug 25, 2021"
  }, {
      "data": 1.0,
      "date": "Aug 27, 2021"
  }, {
      "data": 1.0,
      "date": "Sep 07, 2021"
  }, {
      "data": 1.0,
      "date": "Sep 08, 2021"
  }, {
      "data": 1.0,
      "date": "Sep 16, 2021"
  }, {
      "data": 1.0,
      "date": "Sep 21, 2021"
  }, {
      "data": 2.0,
      "date": "Sep 30, 2021"
  }, {
      "data": 2.0,
      "date": "Oct 01, 2021"
  }, {
      "data": 1.0,
      "date": "Oct 22, 2021"
  }, {
      "data": 1.0,
      "date": "Oct 24, 2021"
  }, {
      "data": 1.0,
      "date": "Oct 25, 2021"
  }, {
      "data": 1.0,
      "date": "Oct 29, 2021"
  }, {
      "data": 1.0,
      "date": "Nov 02, 2021"
  }, {
      "data": 1.0,
      "date": "Nov 03, 2021"
  }, {
      "data": 2.0,
      "date": "Nov 05, 2021"
  }, {
      "data": 2.0,
      "date": "Nov 09, 2021"
  }, {
      "data": 1.0,
      "date": "Nov 16, 2021"
  }, {
      "data": 1.0,
      "date": "Nov 17, 2021"
  }, {
      "data": 1.0,
      "date": "Nov 18, 2021"
  }, {
      "data": 2.0,
      "date": "Nov 19, 2021"
  }, {
      "data": 2.0,
      "date": "Nov 20, 2021"
  }, {
      "data": 2.0,
      "date": "Nov 21, 2021"
  }, {
      "data": 2.0,
      "date": "Nov 22, 2021"
  }, {
      "data": 3.0,
      "date": "Nov 24, 2021"
  }, {
      "data": 3.0,
      "date": "Nov 26, 2021"
  }, {
      "data": 1.0,
      "date": "Nov 27, 2021"
  }, {
      "data": 2.0,
      "date": "Nov 29, 2021"
  }, {
      "data": 1.0,
      "date": "Nov 30, 2021"
  }, {
      "data": 2.0,
      "date": "Dec 01, 2021"
  }, {
      "data": 2.0,
      "date": "Dec 02, 2021"
  }, {
      "data": 2.0,
      "date": "Dec 03, 2021"
  }, {
      "data": 1.0,
      "date": "Dec 04, 2021"
  }, {
      "data": 4.0,
      "date": "Dec 07, 2021"
  }, {
      "data": 2.0,
      "date": "Dec 08, 2021"
  }, {
      "data": 2.0,
      "date": "Dec 09, 2021"
  }, {
      "data": 5.0,
      "date": "Dec 10, 2021"
  }, {
      "data": 3.0,
      "date": "Dec 13, 2021"
  }, {
      "data": 3.0,
      "date": "Dec 14, 2021"
  }, {
      "data": 6.0,
      "date": "Dec 15, 2021"
  }, {
      "data": 13.0,
      "date": "Dec 16, 2021"
  }],
  "topicPercentage": 1200,
  "trendStatus": "Trending",
  "startLabel": "Dec 2020",
  "endLabel": "Dec 2021"
}, {
  "topic": "electric vehicle",
  "data": [{
      "data": 2.0,
      "date": "Nov 16, 2021"
  }, {
      "data": 1.0,
      "date": "Nov 17, 2021"
  }, {
      "data": 2.0,
      "date": "Nov 18, 2021"
  }, {
      "data": 1.0,
      "date": "Nov 19, 2021"
  }, {
      "data": 2.0,
      "date": "Nov 21, 2021"
  }, {
      "data": 1.0,
      "date": "Nov 22, 2021"
  }, {
      "data": 1.0,
      "date": "Nov 24, 2021"
  }, {
      "data": 2.0,
      "date": "Nov 25, 2021"
  }, {
      "data": 6.0,
      "date": "Nov 26, 2021"
  }, {
      "data": 2.0,
      "date": "Nov 27, 2021"
  }, {
      "data": 1.0,
      "date": "Nov 28, 2021"
  }, {
      "data": 2.0,
      "date": "Nov 29, 2021"
  }, {
      "data": 2.0,
      "date": "Nov 30, 2021"
  }, {
      "data": 2.0,
      "date": "Dec 01, 2021"
  }, {
      "data": 1.0,
      "date": "Dec 02, 2021"
  }, {
      "data": 2.0,
      "date": "Dec 03, 2021"
  }, {
      "data": 3.0,
      "date": "Dec 06, 2021"
  }, {
      "data": 1.0,
      "date": "Dec 07, 2021"
  }, {
      "data": 1.0,
      "date": "Dec 08, 2021"
  }, {
      "data": 1.0,
      "date": "Dec 09, 2021"
  }, {
      "data": 1.0,
      "date": "Dec 10, 2021"
  }, {
      "data": 1.0,
      "date": "Dec 12, 2021"
  }, {
      "data": 4.0,
      "date": "Dec 13, 2021"
  }, {
      "data": 8.0,
      "date": "Dec 14, 2021"
  }, {
      "data": 13.0,
      "date": "Dec 15, 2021"
  }, {
      "data": 42.0,
      "date": "Dec 16, 2021"
  }],
  "topicPercentage": 2000,
  "trendStatus": "Trending",
  "startLabel": "Nov 2021",
  "endLabel": "Dec 2021"
}, {
  "topic": "melbourne lockdown",
  "data": [{
      "data": 1.0,
      "date": "Feb 12, 2021"
  }, {
      "data": 1.0,
      "date": "May 08, 2021"
  }, {
      "data": 1.0,
      "date": "May 25, 2021"
  }, {
      "data": 1.0,
      "date": "May 26, 2021"
  }, {
      "data": 4.0,
      "date": "May 27, 2021"
  }, {
      "data": 2.0,
      "date": "Jun 01, 2021"
  }, {
      "data": 2.0,
      "date": "Jun 02, 2021"
  }, {
      "data": 1.0,
      "date": "Jun 03, 2021"
  }, {
      "data": 2.0,
      "date": "Jun 08, 2021"
  }, {
      "data": 1.0,
      "date": "Jun 09, 2021"
  }, {
      "data": 1.0,
      "date": "Jul 07, 2021"
  }, {
      "data": 2.0,
      "date": "Jul 15, 2021"
  }, {
      "data": 1.0,
      "date": "Jul 17, 2021"
  }, {
      "data": 1.0,
      "date": "Jul 29, 2021"
  }, {
      "data": 1.0,
      "date": "Aug 01, 2021"
  }, {
      "data": 2.0,
      "date": "Aug 05, 2021"
  }, {
      "data": 1.0,
      "date": "Aug 06, 2021"
  }, {
      "data": 1.0,
      "date": "Aug 09, 2021"
  }, {
      "data": 1.0,
      "date": "Aug 12, 2021"
  }, {
      "data": 1.0,
      "date": "Aug 13, 2021"
  }, {
      "data": 2.0,
      "date": "Aug 16, 2021"
  }, {
      "data": 1.0,
      "date": "Aug 18, 2021"
  }, {
      "data": 1.0,
      "date": "Aug 19, 2021"
  }, {
      "data": 1.0,
      "date": "Aug 20, 2021"
  }, {
      "data": 1.0,
      "date": "Aug 23, 2021"
  }, {
      "data": 1.0,
      "date": "Aug 29, 2021"
  }, {
      "data": 1.0,
      "date": "Sep 01, 2021"
  }, {
      "data": 1.0,
      "date": "Sep 02, 2021"
  }, {
      "data": 1.0,
      "date": "Sep 08, 2021"
  }, {
      "data": 1.0,
      "date": "Sep 09, 2021"
  }, {
      "data": 1.0,
      "date": "Sep 17, 2021"
  }, {
      "data": 2.0,
      "date": "Sep 18, 2021"
  }, {
      "data": 1.0,
      "date": "Sep 21, 2021"
  }, {
      "data": 1.0,
      "date": "Sep 23, 2021"
  }, {
      "data": 1.0,
      "date": "Sep 24, 2021"
  }, {
      "data": 1.0,
      "date": "Sep 29, 2021"
  }, {
      "data": 1.0,
      "date": "Sep 30, 2021"
  }, {
      "data": 1.0,
      "date": "Oct 04, 2021"
  }, {
      "data": 2.0,
      "date": "Oct 17, 2021"
  }, {
      "data": 1.0,
      "date": "Oct 18, 2021"
  }, {
      "data": 3.0,
      "date": "Oct 21, 2021"
  }, {
      "data": 3.0,
      "date": "Oct 22, 2021"
  }, {
      "data": 2.0,
      "date": "Oct 23, 2021"
  }, {
      "data": 2.0,
      "date": "Oct 24, 2021"
  }, {
      "data": 1.0,
      "date": "Nov 07, 2021"
  }, {
      "data": 1.0,
      "date": "Nov 18, 2021"
  }, {
      "data": 1.0,
      "date": "Nov 19, 2021"
  }, {
      "data": 3.0,
      "date": "Nov 22, 2021"
  }, {
      "data": 1.0,
      "date": "Nov 25, 2021"
  }, {
      "data": 1.0,
      "date": "Nov 30, 2021"
  }, {
      "data": 4.0,
      "date": "Dec 07, 2021"
  }, {
      "data": 2.0,
      "date": "Dec 08, 2021"
  }, {
      "data": 3.0,
      "date": "Dec 10, 2021"
  }, {
      "data": 2.0,
      "date": "Dec 12, 2021"
  }, {
      "data": 2.0,
      "date": "Dec 13, 2021"
  }, {
      "data": 4.0,
      "date": "Dec 14, 2021"
  }, {
      "data": 1.0,
      "date": "Dec 15, 2021"
  }, {
      "data": 12.0,
      "date": "Dec 16, 2021"
  }],
  "topicPercentage": 1100,
  "trendStatus": "Trending",
  "startLabel": "Feb 2021",
  "endLabel": "Dec 2021"
}, {
  "topic": "pfizer",
  "data": [{
      "data": 1.0,
      "date": "Feb 22, 2021"
  }, {
      "data": 1.0,
      "date": "Apr 08, 2021"
  }, {
      "data": 1.0,
      "date": "Apr 15, 2021"
  }, {
      "data": 1.0,
      "date": "May 11, 2021"
  }, {
      "data": 1.0,
      "date": "Jun 08, 2021"
  }, {
      "data": 2.0,
      "date": "Jun 17, 2021"
  }, {
      "data": 1.0,
      "date": "Jun 24, 2021"
  }, {
      "data": 1.0,
      "date": "Jul 05, 2021"
  }, {
      "data": 1.0,
      "date": "Jul 07, 2021"
  }, {
      "data": 1.0,
      "date": "Jul 09, 2021"
  }, {
      "data": 1.0,
      "date": "Jul 10, 2021"
  }, {
      "data": 1.0,
      "date": "Jul 12, 2021"
  }, {
      "data": 1.0,
      "date": "Jul 13, 2021"
  }, {
      "data": 1.0,
      "date": "Jul 19, 2021"
  }, {
      "data": 1.0,
      "date": "Jul 25, 2021"
  }, {
      "data": 1.0,
      "date": "Jul 29, 2021"
  }, {
      "data": 1.0,
      "date": "Jul 30, 2021"
  }, {
      "data": 1.0,
      "date": "Aug 02, 2021"
  }, {
      "data": 1.0,
      "date": "Aug 03, 2021"
  }, {
      "data": 1.0,
      "date": "Aug 05, 2021"
  }, {
      "data": 1.0,
      "date": "Aug 14, 2021"
  }, {
      "data": 1.0,
      "date": "Aug 17, 2021"
  }, {
      "data": 1.0,
      "date": "Aug 19, 2021"
  }, {
      "data": 1.0,
      "date": "Aug 21, 2021"
  }, {
      "data": 1.0,
      "date": "Aug 23, 2021"
  }, {
      "data": 2.0,
      "date": "Sep 06, 2021"
  }, {
      "data": 3.0,
      "date": "Sep 08, 2021"
  }, {
      "data": 1.0,
      "date": "Sep 10, 2021"
  }, {
      "data": 2.0,
      "date": "Sep 20, 2021"
  }, {
      "data": 1.0,
      "date": "Sep 22, 2021"
  }, {
      "data": 1.0,
      "date": "Sep 25, 2021"
  }, {
      "data": 1.0,
      "date": "Sep 28, 2021"
  }, {
      "data": 1.0,
      "date": "Sep 30, 2021"
  }, {
      "data": 1.0,
      "date": "Oct 01, 2021"
  }, {
      "data": 1.0,
      "date": "Oct 14, 2021"
  }, {
      "data": 1.0,
      "date": "Oct 27, 2021"
  }, {
      "data": 1.0,
      "date": "Oct 29, 2021"
  }, {
      "data": 1.0,
      "date": "Oct 30, 2021"
  }, {
      "data": 1.0,
      "date": "Nov 02, 2021"
  }, {
      "data": 1.0,
      "date": "Nov 16, 2021"
  }, {
      "data": 3.0,
      "date": "Nov 19, 2021"
  }, {
      "data": 1.0,
      "date": "Nov 22, 2021"
  }, {
      "data": 2.0,
      "date": "Nov 24, 2021"
  }, {
      "data": 2.0,
      "date": "Nov 25, 2021"
  }, {
      "data": 1.0,
      "date": "Nov 28, 2021"
  }, {
      "data": 2.0,
      "date": "Nov 29, 2021"
  }, {
      "data": 1.0,
      "date": "Nov 30, 2021"
  }, {
      "data": 1.0,
      "date": "Dec 04, 2021"
  }, {
      "data": 1.0,
      "date": "Dec 05, 2021"
  }, {
      "data": 1.0,
      "date": "Dec 07, 2021"
  }, {
      "data": 3.0,
      "date": "Dec 08, 2021"
  }, {
      "data": 3.0,
      "date": "Dec 09, 2021"
  }, {
      "data": 1.0,
      "date": "Dec 11, 2021"
  }, {
      "data": 1.0,
      "date": "Dec 12, 2021"
  }, {
      "data": 2.0,
      "date": "Dec 13, 2021"
  }, {
      "data": 5.0,
      "date": "Dec 14, 2021"
  }, {
      "data": 8.0,
      "date": "Dec 15, 2021"
  }, {
      "data": 9.0,
      "date": "Dec 16, 2021"
  }],
  "topicPercentage": 800,
  "trendStatus": "Trending",
  "startLabel": "Feb 2021",
  "endLabel": "Dec 2021"
}, {
  "topic": "bitcoin",
  "data": [{
      "data": 2.0,
      "date": "Nov 17, 2021"
  }, {
      "data": 3.0,
      "date": "Nov 18, 2021"
  }, {
      "data": 1.0,
      "date": "Nov 19, 2021"
  }, {
      "data": 1.0,
      "date": "Nov 20, 2021"
  }, {
      "data": 1.0,
      "date": "Nov 21, 2021"
  }, {
      "data": 2.0,
      "date": "Nov 22, 2021"
  }, {
      "data": 2.0,
      "date": "Nov 23, 2021"
  }, {
      "data": 4.0,
      "date": "Nov 24, 2021"
  }, {
      "data": 1.0,
      "date": "Nov 25, 2021"
  }, {
      "data": 1.0,
      "date": "Nov 26, 2021"
  }, {
      "data": 1.0,
      "date": "Nov 28, 2021"
  }, {
      "data": 3.0,
      "date": "Nov 29, 2021"
  }, {
      "data": 2.0,
      "date": "Nov 30, 2021"
  }, {
      "data": 1.0,
      "date": "Dec 01, 2021"
  }, {
      "data": 1.0,
      "date": "Dec 02, 2021"
  }, {
      "data": 1.0,
      "date": "Dec 04, 2021"
  }, {
      "data": 1.0,
      "date": "Dec 05, 2021"
  }, {
      "data": 2.0,
      "date": "Dec 06, 2021"
  }, {
      "data": 2.0,
      "date": "Dec 07, 2021"
  }, {
      "data": 4.0,
      "date": "Dec 09, 2021"
  }, {
      "data": 7.0,
      "date": "Dec 10, 2021"
  }, {
      "data": 2.0,
      "date": "Dec 11, 2021"
  }, {
      "data": 7.0,
      "date": "Dec 12, 2021"
  }, {
      "data": 5.0,
      "date": "Dec 13, 2021"
  }, {
      "data": 12.0,
      "date": "Dec 14, 2021"
  }, {
      "data": 13.0,
      "date": "Dec 15, 2021"
  }, {
      "data": 27.0,
      "date": "Dec 16, 2021"
  }],
  "topicPercentage": 1250,
  "trendStatus": "Trending",
  "startLabel": "Nov 2021",
  "endLabel": "Dec 2021"
}, {
  "topic": "wall street",
  "data": [{
      "data": 1.0,
      "date": "Nov 16, 2021"
  }, {
      "data": 3.0,
      "date": "Nov 17, 2021"
  }, {
      "data": 3.0,
      "date": "Nov 18, 2021"
  }, {
      "data": 5.0,
      "date": "Nov 22, 2021"
  }, {
      "data": 1.0,
      "date": "Nov 23, 2021"
  }, {
      "data": 3.0,
      "date": "Nov 24, 2021"
  }, {
      "data": 1.0,
      "date": "Nov 25, 2021"
  }, {
      "data": 2.0,
      "date": "Nov 26, 2021"
  }, {
      "data": 2.0,
      "date": "Nov 28, 2021"
  }, {
      "data": 1.0,
      "date": "Nov 29, 2021"
  }, {
      "data": 3.0,
      "date": "Nov 30, 2021"
  }, {
      "data": 2.0,
      "date": "Dec 01, 2021"
  }, {
      "data": 1.0,
      "date": "Dec 02, 2021"
  }, {
      "data": 1.0,
      "date": "Dec 03, 2021"
  }, {
      "data": 1.0,
      "date": "Dec 05, 2021"
  }, {
      "data": 1.0,
      "date": "Dec 06, 2021"
  }, {
      "data": 4.0,
      "date": "Dec 07, 2021"
  }, {
      "data": 1.0,
      "date": "Dec 08, 2021"
  }, {
      "data": 3.0,
      "date": "Dec 09, 2021"
  }, {
      "data": 2.0,
      "date": "Dec 10, 2021"
  }, {
      "data": 5.0,
      "date": "Dec 11, 2021"
  }, {
      "data": 4.0,
      "date": "Dec 12, 2021"
  }, {
      "data": 5.0,
      "date": "Dec 13, 2021"
  }, {
      "data": 8.0,
      "date": "Dec 14, 2021"
  }, {
      "data": 16.0,
      "date": "Dec 15, 2021"
  }, {
      "data": 26.0,
      "date": "Dec 16, 2021"
  }],
  "topicPercentage": 2500,
  "trendStatus": "Trending",
  "startLabel": "Nov 2021",
  "endLabel": "Dec 2021"
}, {
  "topic": "covid-19",
  "data": [{
      "data": 1.0,
      "date": "Aug 09, 2021"
  }, {
      "data": 1.0,
      "date": "Nov 18, 2021"
  }, {
      "data": 1.0,
      "date": "Nov 20, 2021"
  }, {
      "data": 1.0,
      "date": "Nov 30, 2021"
  }, {
      "data": 1.0,
      "date": "Dec 01, 2021"
  }, {
      "data": 1.0,
      "date": "Dec 06, 2021"
  }, {
      "data": 1.0,
      "date": "Dec 08, 2021"
  }, {
      "data": 1.0,
      "date": "Dec 09, 2021"
  }, {
      "data": 1.0,
      "date": "Dec 10, 2021"
  }, {
      "data": 5.0,
      "date": "Dec 12, 2021"
  }, {
      "data": 3.0,
      "date": "Dec 13, 2021"
  }, {
      "data": 5.0,
      "date": "Dec 14, 2021"
  }, {
      "data": 16.0,
      "date": "Dec 15, 2021"
  }, {
      "data": 49.0,
      "date": "Dec 16, 2021"
  }],
  "topicPercentage": 4800,
  "trendStatus": "Trending",
  "startLabel": "Aug 2021",
  "endLabel": "Dec 2021"
}, {
  "topic": "international travel",
  "data": [{
      "data": 1.0,
      "date": "Sep 12, 2021"
  }, {
      "data": 1.0,
      "date": "Sep 22, 2021"
  }, {
      "data": 1.0,
      "date": "Sep 27, 2021"
  }, {
      "data": 1.0,
      "date": "Oct 01, 2021"
  }, {
      "data": 1.0,
      "date": "Oct 11, 2021"
  }, {
      "data": 1.0,
      "date": "Oct 17, 2021"
  }, {
      "data": 1.0,
      "date": "Oct 19, 2021"
  }, {
      "data": 1.0,
      "date": "Oct 22, 2021"
  }, {
      "data": 1.0,
      "date": "Oct 24, 2021"
  }, {
      "data": 1.0,
      "date": "Oct 25, 2021"
  }, {
      "data": 1.0,
      "date": "Oct 26, 2021"
  }, {
      "data": 1.0,
      "date": "Oct 29, 2021"
  }, {
      "data": 1.0,
      "date": "Nov 08, 2021"
  }, {
      "data": 1.0,
      "date": "Nov 14, 2021"
  }, {
      "data": 1.0,
      "date": "Nov 17, 2021"
  }, {
      "data": 2.0,
      "date": "Nov 18, 2021"
  }, {
      "data": 2.0,
      "date": "Nov 19, 2021"
  }, {
      "data": 1.0,
      "date": "Nov 20, 2021"
  }, {
      "data": 4.0,
      "date": "Nov 21, 2021"
  }, {
      "data": 1.0,
      "date": "Nov 22, 2021"
  }, {
      "data": 1.0,
      "date": "Nov 23, 2021"
  }, {
      "data": 2.0,
      "date": "Nov 24, 2021"
  }, {
      "data": 1.0,
      "date": "Nov 25, 2021"
  }, {
      "data": 1.0,
      "date": "Nov 26, 2021"
  }, {
      "data": 2.0,
      "date": "Nov 27, 2021"
  }, {
      "data": 4.0,
      "date": "Nov 28, 2021"
  }, {
      "data": 8.0,
      "date": "Nov 29, 2021"
  }, {
      "data": 6.0,
      "date": "Nov 30, 2021"
  }, {
      "data": 3.0,
      "date": "Dec 01, 2021"
  }, {
      "data": 2.0,
      "date": "Dec 02, 2021"
  }, {
      "data": 1.0,
      "date": "Dec 03, 2021"
  }, {
      "data": 1.0,
      "date": "Dec 04, 2021"
  }, {
      "data": 1.0,
      "date": "Dec 05, 2021"
  }, {
      "data": 2.0,
      "date": "Dec 06, 2021"
  }, {
      "data": 1.0,
      "date": "Dec 07, 2021"
  }, {
      "data": 1.0,
      "date": "Dec 08, 2021"
  }, {
      "data": 3.0,
      "date": "Dec 09, 2021"
  }, {
      "data": 1.0,
      "date": "Dec 10, 2021"
  }, {
      "data": 1.0,
      "date": "Dec 12, 2021"
  }, {
      "data": 4.0,
      "date": "Dec 13, 2021"
  }, {
      "data": 4.0,
      "date": "Dec 14, 2021"
  }, {
      "data": 9.0,
      "date": "Dec 15, 2021"
  }, {
      "data": 14.0,
      "date": "Dec 16, 2021"
  }],
  "topicPercentage": 1300,
  "trendStatus": "Trending",
  "startLabel": "Sep 2021",
  "endLabel": "Dec 2021"
}, {
  "topic": "afganistan",
  "data": [{
      "data": 1.0,
      "date": "Feb 16, 2021"
  }, {
      "data": 1.0,
      "date": "Mar 14, 2021"
  }, {
      "data": 1.0,
      "date": "Mar 27, 2021"
  }, {
      "data": 1.0,
      "date": "Jun 24, 2021"
  }, {
      "data": 1.0,
      "date": "Jun 30, 2021"
  }, {
      "data": 1.0,
      "date": "Jul 23, 2021"
  }, {
      "data": 1.0,
      "date": "Aug 03, 2021"
  }, {
      "data": 2.0,
      "date": "Aug 15, 2021"
  }, {
      "data": 2.0,
      "date": "Aug 16, 2021"
  }, {
      "data": 2.0,
      "date": "Aug 17, 2021"
  }, {
      "data": 1.0,
      "date": "Aug 19, 2021"
  }, {
      "data": 2.0,
      "date": "Aug 20, 2021"
  }, {
      "data": 1.0,
      "date": "Aug 21, 2021"
  }, {
      "data": 1.0,
      "date": "Aug 23, 2021"
  }, {
      "data": 1.0,
      "date": "Aug 24, 2021"
  }, {
      "data": 1.0,
      "date": "Aug 25, 2021"
  }, {
      "data": 1.0,
      "date": "Aug 26, 2021"
  }, {
      "data": 1.0,
      "date": "Aug 27, 2021"
  }, {
      "data": 1.0,
      "date": "Aug 30, 2021"
  }, {
      "data": 1.0,
      "date": "Sep 04, 2021"
  }, {
      "data": 1.0,
      "date": "Sep 05, 2021"
  }, {
      "data": 1.0,
      "date": "Sep 29, 2021"
  }, {
      "data": 1.0,
      "date": "Oct 26, 2021"
  }, {
      "data": 1.0,
      "date": "Nov 03, 2021"
  }, {
      "data": 1.0,
      "date": "Nov 05, 2021"
  }, {
      "data": 1.0,
      "date": "Nov 09, 2021"
  }, {
      "data": 1.0,
      "date": "Nov 26, 2021"
  }],
  "topicPercentage": 0,
  "trendStatus": "Exhausted",
  "startLabel": "Feb 2021",
  "endLabel": "Nov 2021"
}, {
  "topic": "zomato",
  "data": [{
      "data": 1.0,
      "date": "Feb 22, 2021"
  }, {
      "data": 2.0,
      "date": "Mar 16, 2021"
  }, {
      "data": 1.0,
      "date": "Mar 19, 2021"
  }, {
      "data": 1.0,
      "date": "Mar 24, 2021"
  }, {
      "data": 1.0,
      "date": "Apr 11, 2021"
  }, {
      "data": 1.0,
      "date": "Apr 22, 2021"
  }, {
      "data": 2.0,
      "date": "Apr 28, 2021"
  }, {
      "data": 1.0,
      "date": "May 14, 2021"
  }, {
      "data": 1.0,
      "date": "May 27, 2021"
  }, {
      "data": 1.0,
      "date": "Jun 08, 2021"
  }, {
      "data": 1.0,
      "date": "Jun 11, 2021"
  }, {
      "data": 1.0,
      "date": "Jun 23, 2021"
  }, {
      "data": 1.0,
      "date": "Jun 25, 2021"
  }, {
      "data": 1.0,
      "date": "Jul 06, 2021"
  }, {
      "data": 1.0,
      "date": "Jul 09, 2021"
  }, {
      "data": 1.0,
      "date": "Jul 12, 2021"
  }, {
      "data": 1.0,
      "date": "Jul 14, 2021"
  }, {
      "data": 1.0,
      "date": "Jul 21, 2021"
  }, {
      "data": 1.0,
      "date": "Jul 22, 2021"
  }, {
      "data": 1.0,
      "date": "Jul 23, 2021"
  }, {
      "data": 1.0,
      "date": "Jul 26, 2021"
  }, {
      "data": 1.0,
      "date": "Jul 27, 2021"
  }, {
      "data": 2.0,
      "date": "Aug 02, 2021"
  }, {
      "data": 1.0,
      "date": "Aug 03, 2021"
  }, {
      "data": 1.0,
      "date": "Aug 06, 2021"
  }, {
      "data": 1.0,
      "date": "Aug 10, 2021"
  }, {
      "data": 2.0,
      "date": "Aug 14, 2021"
  }, {
      "data": 1.0,
      "date": "Aug 18, 2021"
  }, {
      "data": 1.0,
      "date": "Aug 20, 2021"
  }, {
      "data": 1.0,
      "date": "Aug 28, 2021"
  }, {
      "data": 1.0,
      "date": "Aug 30, 2021"
  }, {
      "data": 1.0,
      "date": "Aug 31, 2021"
  }, {
      "data": 1.0,
      "date": "Sep 03, 2021"
  }, {
      "data": 1.0,
      "date": "Sep 09, 2021"
  }, {
      "data": 1.0,
      "date": "Sep 13, 2021"
  }, {
      "data": 1.0,
      "date": "Sep 14, 2021"
  }, {
      "data": 1.0,
      "date": "Sep 16, 2021"
  }, {
      "data": 2.0,
      "date": "Sep 17, 2021"
  }, {
      "data": 1.0,
      "date": "Sep 18, 2021"
  }, {
      "data": 1.0,
      "date": "Sep 23, 2021"
  }, {
      "data": 1.0,
      "date": "Sep 26, 2021"
  }, {
      "data": 1.0,
      "date": "Sep 27, 2021"
  }, {
      "data": 1.0,
      "date": "Sep 29, 2021"
  }, {
      "data": 1.0,
      "date": "Oct 12, 2021"
  }, {
      "data": 1.0,
      "date": "Oct 19, 2021"
  }, {
      "data": 1.0,
      "date": "Oct 21, 2021"
  }, {
      "data": 1.0,
      "date": "Oct 27, 2021"
  }, {
      "data": 2.0,
      "date": "Oct 29, 2021"
  }, {
      "data": 1.0,
      "date": "Oct 30, 2021"
  }, {
      "data": 1.0,
      "date": "Nov 10, 2021"
  }, {
      "data": 1.0,
      "date": "Nov 11, 2021"
  }, {
      "data": 2.0,
      "date": "Nov 12, 2021"
  }, {
      "data": 4.0,
      "date": "Nov 18, 2021"
  }, {
      "data": 1.0,
      "date": "Nov 19, 2021"
  }, {
      "data": 1.0,
      "date": "Nov 20, 2021"
  }, {
      "data": 1.0,
      "date": "Nov 21, 2021"
  }, {
      "data": 1.0,
      "date": "Nov 22, 2021"
  }, {
      "data": 2.0,
      "date": "Nov 24, 2021"
  }, {
      "data": 1.0,
      "date": "Nov 25, 2021"
  }, {
      "data": 3.0,
      "date": "Dec 01, 2021"
  }, {
      "data": 1.0,
      "date": "Dec 03, 2021"
  }, {
      "data": 1.0,
      "date": "Dec 04, 2021"
  }, {
      "data": 1.0,
      "date": "Dec 06, 2021"
  }, {
      "data": 1.0,
      "date": "Dec 07, 2021"
  }, {
      "data": 3.0,
      "date": "Dec 10, 2021"
  }, {
      "data": 1.0,
      "date": "Dec 11, 2021"
  }, {
      "data": 4.0,
      "date": "Dec 13, 2021"
  }, {
      "data": 5.0,
      "date": "Dec 14, 2021"
  }, {
      "data": 5.0,
      "date": "Dec 15, 2021"
  }, {
      "data": 5.0,
      "date": "Dec 16, 2021"
  }],
  "topicPercentage": 400,
  "trendStatus": "Trending",
  "startLabel": "Feb 2021",
  "endLabel": "Dec 2021"
}, {
  "topic": "oil",
  "data": [{
      "data": 1.0,
      "date": "Nov 11, 2021"
  }, {
      "data": 1.0,
      "date": "Nov 17, 2021"
  }, {
      "data": 2.0,
      "date": "Nov 18, 2021"
  }, {
      "data": 2.0,
      "date": "Nov 19, 2021"
  }, {
      "data": 1.0,
      "date": "Nov 23, 2021"
  }, {
      "data": 2.0,
      "date": "Nov 24, 2021"
  }, {
      "data": 1.0,
      "date": "Nov 25, 2021"
  }, {
      "data": 1.0,
      "date": "Nov 26, 2021"
  }, {
      "data": 4.0,
      "date": "Nov 29, 2021"
  }, {
      "data": 3.0,
      "date": "Nov 30, 2021"
  }, {
      "data": 1.0,
      "date": "Dec 01, 2021"
  }, {
      "data": 1.0,
      "date": "Dec 02, 2021"
  }, {
      "data": 1.0,
      "date": "Dec 04, 2021"
  }, {
      "data": 3.0,
      "date": "Dec 06, 2021"
  }, {
      "data": 2.0,
      "date": "Dec 08, 2021"
  }, {
      "data": 1.0,
      "date": "Dec 09, 2021"
  }, {
      "data": 11.0,
      "date": "Dec 10, 2021"
  }, {
      "data": 1.0,
      "date": "Dec 11, 2021"
  }, {
      "data": 1.0,
      "date": "Dec 12, 2021"
  }, {
      "data": 6.0,
      "date": "Dec 13, 2021"
  }, {
      "data": 3.0,
      "date": "Dec 14, 2021"
  }, {
      "data": 8.0,
      "date": "Dec 15, 2021"
  }, {
      "data": 51.0,
      "date": "Dec 16, 2021"
  }],
  "topicPercentage": 5000,
  "trendStatus": "Trending",
  "startLabel": "Nov 2021",
  "endLabel": "Dec 2021"
}];
