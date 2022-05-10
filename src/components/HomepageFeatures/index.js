import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'About me',
      Svg: require('../../../static/img/element_1.svg').default,
    description: (
      <>
        Hello everyone! My name is Den Bekker and I am a Russian Java developer since 2017.
        Working on plugins for Minecraft servers on SpigotMC.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('../../../static/img/element_2.svg').default,
    description: (
      <>
      Here you can find a wiki pages for most of my popular plugins. <code>Select a plugin above</code>
      </>
    ),
  },
  {
    title: 'Community powered',
    Svg: require('../../../static/img/element_3.svg').default,
    description: (
      <>
        Feel free to suggest ideas for improvements or contribute to wiki.
          Suggestion could be done on my discord server. Wiki GitHub repo <code>ntd-wiki</code>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
