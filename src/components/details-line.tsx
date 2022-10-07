import React from 'react';
import styled from '@emotion/native';

import {Typography} from './typography';

//
//

export const DetailsLine: React.FC<{
  label?: React.ReactNode;
  children: React.ReactNode;
}> = ({label, children}) => {
  return (
    <DetailsLineContainer>
      <Typography fontSize={14} weight="medium">
        <LableText>{label}</LableText>
      </Typography>

      <DetailsLineContent>{children}</DetailsLineContent>
    </DetailsLineContainer>
  );
};

//
//

const LableText = styled.Text({
  marginRight: 16,
});

const DetailsLineContainer = styled.View({
  marginVertical: 5,
  flexDirection: 'row',
});

const DetailsLineContent = styled(Typography)({
  flex: 1,
  textAlign: 'right',
});

DetailsLineContent.defaultProps = {
  fontSize: 14,
};
