import React, { useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import AnalyticsCard from './AnalyticsCard.jsx';
import axios from 'axios';

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/data');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Row gutter={[16, 16]}>
      {data.map((item) => (
        <Col key={item._id} xs={24} sm={12} lg={8}>
          <AnalyticsCard
            title={item.title}
            sector={item.sector}
            topic={item.topic}
            insight={item.insight}
            country={item.country}
            region={item.region}
            intensity={item.intensity}
            relevance={item.relevance}
            likelihood={item.likelihood}
          />
        </Col>
      ))}
    </Row>
  );
};

export default Dashboard;
