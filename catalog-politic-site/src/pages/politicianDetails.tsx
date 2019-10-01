import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';

import genericStyles from '../css/generics.module.css';


interface PoliticiansDetailsProps {
  id: string
}

const PoliticiansDetailsProps: React.FC<PoliticiansDetailsProps> = ({ id }) => {

  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div style={{backgroundColor: '#FAFBFC'}}>
      <div className={genericStyles.catpolRow}>
        <div className={genericStyles.catpolCol12}>
          <h1>Pagina <i> detalii candidat</i></h1>
        </div>

        <div className={genericStyles.catpolCol4}>
          <div className={genericStyles.catpolFlexCenter}>
            <p>Left panel</p>
          </div>
        </div>


        <div className={genericStyles.catpolCol8}>
          <div className={genericStyles.catpolFlexCenter}>
            <p>Center info panel</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default PoliticiansDetailsProps;