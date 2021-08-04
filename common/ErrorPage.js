import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import Lottie from "react-lottie";
import { useRouter } from "next/router";
import * as Error404 from "../assets/animations/page-not-found-404.json";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import IconButton from "@material-ui/core/IconButton";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: Error404,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export const ErrorPage = () => {
  const router = useRouter();
  return (
    <>
      <Col lg="2" xl="2" />
      <Col lg="8" xl="8">
        <Card style={{ border: "none" }}>
          <CardHeader style={{ background: "#444954", fontSize: 18 }}>
            <Row className="align-items-center">
              <Col>
                <h2 className="text-white mb-0">Error</h2>
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
          </CardHeader>
          <CardBody>
            <Lottie
              options={defaultOptions}
              height={400}
              width={500}
              isStopped={false}
              isPaused={false}
            />
          </CardBody>
        </Card>
      </Col>
    </>
  );
};
