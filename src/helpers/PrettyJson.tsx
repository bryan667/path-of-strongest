import { FC } from 'react';

type TProps = {
  json: any;
  title?: string;
};

const PrettyJson: FC<TProps> = ({ json, title = null }) => {
  return (
    <div>
    {title && <h4>{title}</h4>}
    <pre>{JSON.stringify(json, null, 2)}</pre>
    </div>
  );
};

export default PrettyJson;
