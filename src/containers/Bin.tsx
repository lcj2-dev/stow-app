import { ChangeEvent, useState, useEffect } from 'react';
import { Button, Content, Input, TextGrid, Wrapper } from '../components';

export const Bin = (): JSX.Element => {
  const [location, setLocation] = useState<string | null>(null);
  const [inScanMode, setInScanMode] = useState<boolean>(false);

  const scanBinHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
    setInScanMode(false);
  };

  useEffect(() => {
    console.log(inScanMode);
  }, [inScanMode]);

  return (
    <Wrapper headerText='BinInfo'>
      <Content>
        <Input
          placeholder='Scan bin'
          autoFocus
          onChange={scanBinHandler}
          maxLength={15}
        />
      </Content>

      {location && (
        <Content>
          <TextGrid
            content={[
              ['Location', location],
              ['ASIN count', 4],
              ['Unit count', 36]
            ]}
          />

          {inScanMode ? (
            <Input placeholder='Scan product' autoFocus />
          ) : (
            <Button
              onClick={() => {
                setInScanMode(true);
              }}
            >
              Scan product
            </Button>
          )}
        </Content>
      )}
    </Wrapper>
  );
};
