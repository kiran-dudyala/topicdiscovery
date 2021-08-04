import Skeleton from "@material-ui/lab/Skeleton";
import { Col } from "reactstrap";

export const SkeletonGrid = () => {
    let skeletonList = [];
    [...Array(3)].map((e, i) => {
      skeletonList.push(
        <Col key={i} className="mb-5 mb-xl-0" xl="4">
          <Skeleton
            animation="wave"
            variant="rect"
            height={300}
            style={{ borderRadius: 8 }}
          />
        </Col>
      );
    });
    return skeletonList;
  };