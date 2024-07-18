import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  img: React.ComponentType<React.ComponentProps<'img'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Splitmo API',
    img: require('@site/static/img/api.png').default,
    description: (
      <>
        Integrate payments into your site or app for full control over the user experience.
      </>
    ),
  },
  {
    title: 'Checkout Links',
    img: require('@site/static/img/links.png').default,
    description: (
      <>
        One-time payment links to send via SMS or email for instant payment collection.
      </>
    ),
  },
  {
    title: 'Third Party Plugins',
    img: require('@site/static/img/plugins.png').default,
    description: (
      <>
        Seamlessly integrate with e-commerce platforms like Shopify and WooCommerce for quick, no-code payment acceptance.
      </>
    ),
  },
];

function Feature({title, img, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={img}/>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
