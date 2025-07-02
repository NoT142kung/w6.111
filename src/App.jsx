import React, { useEffect, useState } from "react";
import { Card, Image, Row, Col } from "antd";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((apiData) => setData(apiData.products));
  }, []);
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)",
        padding: "40px 0",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: 40,
          fontWeight: 700,
          color: "#2d3748",
          letterSpacing: 2,
        }}
      >
        API Data
      </h1>
      <Row gutter={[24, 24]} justify="center">
        {data.map((item, index) => (
          <Col
            key={index}
            xs={24}
            sm={12}
            md={8}
            lg={6}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              hoverable
              title={item.title}
              style={{
                width: 320,
                borderRadius: 16,
                boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
                overflow: "hidden",
                background: "#fff",
              }}
              headStyle={{
                background: "#6366f1",
                color: "#fff",
                fontWeight: 600,
                fontSize: 18,
                borderRadius: "16px 16px 0 0",
              }}
              bodyStyle={{ padding: 18 }}
            >
              <Image
                src={item.images[0]}
                alt={item.title}
                style={{
                  borderRadius: 12,
                  marginBottom: 16,
                  objectFit: "cover",
                  height: 180,
                  width: "100%",
                  background: "#f1f5f9",
                }}
                preview={false}
              />
              <p style={{ color: "#475569", minHeight: 48 }}>
                {item.description}
              </p>
              <p
                style={{
                  color: "#16a34a",
                  fontWeight: 600,
                  fontSize: 18,
                  marginTop: 12,
                }}
              >
                Price: ${item.price}
              </p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default App;
