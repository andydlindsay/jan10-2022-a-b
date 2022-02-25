import {useState} from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';

const Title = () => {
  const [title, setTitle] = useState('does this work??');

  useDocumentTitle(title);

  return (
    <div>
      <h2>This is the Title component</h2>
    </div>
  );
};

export default Title;
