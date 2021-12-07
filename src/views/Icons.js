import React from "react";

// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

function Icons() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <h5 className="title">Icons</h5>
                <p className="category">
                  All icon used on this dashboard are from{" "}
                  <a href="https://heroicons.com/">@HeroIcons</a>
                </p>
              </CardHeader>
              <CardBody className="all-icons">
                <iframe src="https://heroicons.com/" title="Icons" className="max" width="100%" height="725wh"/>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Icons;
