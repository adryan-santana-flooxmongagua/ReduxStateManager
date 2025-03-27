import React from 'react';

import Card from './Card';

export default props => {
  return (
    <Card title="sorteio dos Números" purple>
      <div>
        <span>
          <span>Resultado:</span>
          <strong>0</strong>
        </span>
      </div>
    </Card>
  );
};