import { ChangeEvent, Fragment, useState, useRef } from 'react';
import { Button, Content, Input, TextGrid, Wrapper } from '../components';

export const Container = (): JSX.Element => {
  const [container, setContainer] = useState<string | null>(null);

  const inputEl = useRef<HTMLInputElement>(null);

  const scanContainerHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setContainer(e.target.value);
  };

  const clearScanResults = () => {
    setContainer(null);

    if (inputEl.current) {
      inputEl.current.focus();
      inputEl.current.value = '';
    }
  };

  return (
    <Wrapper headerText='ContainerInfo'>
      <Content>
        <Input
          placeholder='Scan container'
          autoFocus
          onChange={scanContainerHandler}
          maxLength={15}
          ref={inputEl}
        />
      </Content>

      {container && (
        <Fragment>
          <Content>
            <TextGrid
              content={[
                ['Container', container],
                ['ASIN count', 1],
                ['Unit count', 156]
              ]}
            />
          </Content>

          <Button onClick={clearScanResults}>Scan another container</Button>
        </Fragment>
      )}
    </Wrapper>
  );
};
