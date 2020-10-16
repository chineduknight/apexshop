import React from "react";

interface WithSuspenseProps {
  page: string;
  data?: Record<string, any>;
}

const withSuspense = (args: WithSuspenseProps): React.FC<any> => {
  const { page, data } = args;

  return function ComponentWrapper(
    props: Record<string, any>
  ): React.ReactElement<Record<string, any>> {
    const LazyComponent = React.lazy(() => import(`pages/${page}`));

    return <LazyComponent {...props} {...data} />;
  };
};

export default withSuspense;
