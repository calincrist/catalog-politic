import React, { useState } from "react";
import { Link } from 'gatsby';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import genericStyles from '../css/generics.module.css';

/**
 * Displays a list of parties
 */
export default () => {

  const [politicians, setPoliticians] = useState([{ id: 12, name: 'Santa Klaus' }]);

  const { t } = useTranslation();

  return (

    <div style={{backgroundColor: 'white'}}>
      <div className={genericStyles.catpolRow}>
        <div className={genericStyles.catpolCol12}>
          <h1>Pagina <i>Prezidențiale</i></h1>
          <p>
            Pagina asta ar trebuie să fie o pagină specială pentru alegerile
            prezidențiale din România, 2019.
          </p>

          <p>
          <Link
            to={`/politicianDetails/${politicians[0].id}`}
            title={`${politicians[0].name}`}
            className={cn(
              genericStyles.catpolButton,
              genericStyles.catpolButtonSecondary
            )}
          >
            <span>{t('See the candidate details')}</span>
          </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
