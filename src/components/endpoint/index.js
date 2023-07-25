import React from 'react';
import styles from './index.module.scss';
import { METHOD_COLORS } from './constants';
import EMethod from './EMethod';
import EParams from './EParams';
import ELine from './ELine';
import EResponse from './EResponse';

export default function Endpoint({
  method,
  endpoint,
  description,
  servers,
  authorization,
  scope,
  params,
  query,
  contentType,
  body,
  responses,
}) {
  const primaryServer = servers?.[0];

  return (
    <div
      className={styles.container}
      style={{ borderColor: METHOD_COLORS[method][0] }}
    >
      <EMethod method={method} endpoint={endpoint} servers={servers} />

      {description && <p className={styles.description}>{description}</p>}

      <div className={styles.eline}>
        {primaryServer && <ELine name="HOST" value={primaryServer} />}
        {authorization && (
          <ELine name="AUTHORIZATION" value={authorization} fade />
        )}
        {scope && <ELine name="REQUIRED SCOPE" value={scope} fade />}
      </div>

      {params && (
        <EParams
          method={method}
          endpoint={endpoint}
          type="PATH PARAMS"
          params={params}
        />
      )}
      {query && (
        <EParams
          method={method}
          endpoint={endpoint}
          type="QUERY PARAMS"
          params={query}
        />
      )}
      {body && (
        <EParams
          method={method}
          endpoint={endpoint}
          type="BODY"
          params={body}
          contentType={contentType}
        />
      )}
      {responses &&
        responses.map((response) => (
          <EResponse
            key={`ep-${method}-${endpoint}-r-${response.status}`}
            method={method}
            endpoint={endpoint}
            {...response}
          />
        ))}
    </div>
  );
}
