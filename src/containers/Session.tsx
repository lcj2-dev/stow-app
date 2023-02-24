import { Fragment, useEffect, useState } from 'react';
import { Loader, Wrapper, Alert, Content, TextGrid } from '../components';

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
                    ['Total containers', '9'],
                    ['Stowed units', '183'],
                    ['Units left', '10']
                  ]}
                />
              </Content>

              <Content>container list</Content>
            </Fragment>
          ) : (
            <Alert>
              User <span>pawemala</span> has no active sessions
            </Alert>
          )}
        </Fragment>
      )}
    </Wrapper>
  );
};
