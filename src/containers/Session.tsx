import { Fragment, useEffect, useState } from 'react';
import {
  Loader,
  Wrapper,
  Alert,
  Content,
  TextGrid,
  TextList
} from '../components';
import { AlertType } from '../typescript/enums';

export const Session = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [sessionExists, setSessionExists] = useState<boolean>(false);

  const keyDownHandler = (e: KeyboardEvent) => {
    const loaderResult = parseInt(e.key) != 0;

    setIsLoading(false);
    setSessionExists(loaderResult);
  };

  useEffect(() => {
    document.addEventListener('keydown', keyDownHandler, true);

    return () => {
      document.removeEventListener('keydown', keyDownHandler, true);
    };
  }, []);

  return (
    <Wrapper headerText='SessionInfo'>
      {isLoading ? (
        <Loader />
      ) : (
        <Fragment>
          {sessionExists ? (
            <Fragment>
              <Content>
                <TextGrid
                  content={[
                    ['Total containers', 4],
                    ['Stowed units', 183],
                    ['Units left', 10]
                  ]}
                />
              </Content>

              <Content>
                <TextList
                  content={[
                    'csX0000001',
                    'csX0000002',
                    'csX0000003',
                    'csX0000004'
                  ]}
                />
              </Content>
            </Fragment>
          ) : (
            <Alert type={AlertType.warning}>
              User <span>pawemala</span> has no active sessions
            </Alert>
          )}
        </Fragment>
      )}
    </Wrapper>
  );
};
