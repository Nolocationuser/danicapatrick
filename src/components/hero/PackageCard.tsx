import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


type PackageCardProps = {
  title: string;
  price: string;
  features: string[];
  onSelect: (packageName: string) => void;
};

const PackageCard: React.FC<PackageCardProps> = ({ title, price, features, onSelect }) => {
  return (
    <Card className="m-3">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <strong>Price:</strong> {price}
        </Card.Text>
        <ul>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <Button variant="primary" onClick={() => onSelect(title)}>
          Select Package
        </Button>
      </Card.Body>
    </Card>
  );
};

export default PackageCard;
