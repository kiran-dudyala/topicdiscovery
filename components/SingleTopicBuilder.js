import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import LineStrap from "./LineChart";
import Chip from "@material-ui/core/Chip";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import TrendingDownIcon from "@material-ui/icons/TrendingDown";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import { useRouter } from "next/router";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import IconButton from "@material-ui/core/IconButton";
import InfoBox from "../common/InfoBox";

export const SingleTopicBuilder = (item) => {
  const router = useRouter();

  return (
    <>
      <Col lg="2" xl="2" />
      <Col lg="8" xl="8">
        <Card style={{ border: "none" }}>
          <CardHeader style={{ background: "#444954", fontSize: 18 }}>
            <Row className="align-items-center">
              <Col>
                {item.topic.length > 30 ? (
                  <h2 className="text-white mb-0">
                    {item.topic.substring(0, 28) + "..."}
                  </h2>
                ) : (
                  <>
                    <h2 style={{ fontSize: 16, color: "#fff" }}>
                      {item.topic.toUpperCase()}
                    </h2>
                  </>
                )}
                <ul className="nav nav-pills justify-content-end">
                  <li className="nav-item mr-2 mr-md-0">
                    <IconButton
                      aria-label="back"
                      onClick={() => router.push(`/`)}
                    >
                      <HighlightOffIcon
                        style={{ marginTop: -70, color: "#fff" }}
                      />
                    </IconButton>
                  </li>
                </ul>
              </Col>
            </Row>
            {/* Chip Icon and Text */}
            <Chip
              style={{
                color: "#fff",
                borderColor: "#fff",
                borderRadius: 4,
                marginRight: 6,
              }}
              icon={
                <WhatshotIcon
                  style={{
                    color:
                      item.trendStatus === "Trending"
                        ? "#f87872"
                        : item.trendStatus === "Drifting"
                        ? "#86bff8"
                        : "#c4c7cb",
                  }}
                />
              }
              label={item.trendStatus.toUpperCase()}
              variant="outlined"
            />
            {/* Chip Percentage */}
            <Chip
              style={{
                color: "#fff",
                borderColor: "#fff",
                borderRadius: 4,
              }}
              icon={
                item.topicPercentage > 0 ? (
                  <TrendingUpIcon style={{ color: "#fff" }} />
                ) : item.topicPercentage <= 0 ? (
                  <TrendingDownIcon style={{ color: "#fff" }} />
                ) : (
                  <></>
                )
              }
              label={item.topicPercentage + " %"}
              variant="outlined"
            />
            <InfoBox />
          </CardHeader>
          <CardBody>
            {/* Chart */}
            <div className="">
              <LineStrap payload={item} />
            </div>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};
