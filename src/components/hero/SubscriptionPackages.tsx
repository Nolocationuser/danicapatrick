import React, { useState } from 'react';
import PackageCard from './PackageCard';

const SubscriptionPackages: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const packages = [
    {
      title: 'Basic Plan',
      price: '$10/month',
      features: ['Feature 1', 'Feature 2', 'Feature 3'],
    },
    {
      title: 'Pro Plan',
      price: '$30/month',
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
    },
    {
      title: 'Enterprise Plan',
      price: '$50/month',
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    },
  ];

  const handlePackageSelect = (packageName: string) => {
    setSelectedPackage(packageName);
  };

  return (
    <div className="container">
      <h2>Select a Subscription Package</h2>
      <div className="row">
        {packages.map((pkg, index) => (
          <div key={index} className="col-md-4">
            <PackageCard
              title={pkg.title}
              price={pkg.price}
              features={pkg.features}
              onSelect={handlePackageSelect}
            />
          </div>
        ))}
      </div>
      {selectedPackage && (
        <div className="alert alert-success mt-4">
          You have selected the <strong>{selectedPackage}</strong> package.
        </div>
      )}
    </div>
  );
};

export default SubscriptionPackages;
