import { ChangeEvent, useState, useRef, Fragment } from 'react';
import {
  Alert,
  Button,
  Content,
  Input,
  TextGrid,
  Wrapper
} from '../components';
import { AlertType } from '../typescript/enums';

export const Bin = (): JSX.Element => {
  const [location, setLocation] = useState<string | null>(null);
  const [inScanMode, setInScanMode] = useState<boolean>(false);
  const [product, setProduct] = useState<string | null>(null);
  const [productIsValid, setProductIsValid] = useState<boolean>(false);

  const binInputRef = useRef<HTMLInputElement>(null);

  const scanBinHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
    setInScanMode(false);
  };

  const scanProductHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setProduct(e.target.value);
    setProductIsValid(!/\d/.test(e.target.value));
  };

  const clearScanResults = () => {
    setLocation(null);
    setInScanMode(false);
    setProduct(null);
    setProductIsValid(false);

    if (binInputRef.current) {
      binInputRef.current.focus();
      binInputRef.current.value = '';
    }
  };

  return (
    <Wrapper headerText='BinInfo'>
      <Content>
        <Input
          placeholder='Scan bin'
          autoFocus
          onChange={scanBinHandler}
          maxLength={15}
          ref={binInputRef}
        />
      </Content>

      {location && (
        <Fragment>
          <Content>
            <TextGrid
              content={[
                ['Classification', 'pa1d_hardline'],
                ['ASIN count', 4],
                ['Unit count', 36]
              ]}
            />

            {inScanMode ? (
              <Input
                placeholder='Scan product'
                autoFocus
                onChange={scanProductHandler}
                maxLength={15}
              />
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

          {product && (
            <Alert
              type={productIsValid ? AlertType.success : AlertType.warning}
            >
              {productIsValid
                ? `10 units of ${product} were found at this location`
                : `ASIN ${product} was not found at this location`}
            </Alert>
          )}

          <Button onClick={clearScanResults}>Scan another bin</Button>
        </Fragment>
      )}
    </Wrapper>
  );
};
