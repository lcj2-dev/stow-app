import { ChangeEvent, Fragment, useRef, useState } from 'react';
import {
  Button,
  Content,
  Input,
  TextGrid,
  TextList,
  Wrapper
} from '../components';

export const Area = (): JSX.Element => {
  const [location, setLocation] = useState<string | null>(null);

  const inputEl = useRef<HTMLInputElement>(null);

  const scanBinHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  const clearScanResults = () => {
    setLocation(null);

    if (inputEl.current) {
      inputEl.current.focus();
      inputEl.current.value = '';
    }
  };

  return (
    <Wrapper headerText='AreaInfo'>
      <Content>
        <Input
          placeholder='Scan bin'
          autoFocus
          onChange={scanBinHandler}
          maxLength={15}
          ref={inputEl}
        />
      </Content>

      {location && (
        <Fragment>
          <Content>
            <TextGrid
              content={[
                ['Bin classification', 'pa1d_hardline'],
                ['Chunk utilization', '91%']
              ]}
            />
          </Content>

          <Content>
            <TextList
              content={[
                `${location} - A100`,
                `${location} - C151`,
                `${location} - E122`,
                `${location} - C152`,
                `${location} - B191`
              ]}
            />
          </Content>

          <Button onClick={clearScanResults}>Scan another bin</Button>
        </Fragment>
      )}
    </Wrapper>
  );
};
