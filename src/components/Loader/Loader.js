import { Oval } from 'react-loader-spinner';
import s from './Loader.module.css';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

function Loader() {
  return (
    <div className={s.Loader}>
      <Oval color="#000000" height={80} width={80} />;
    </div>
  );
  // <TailSpin color="#000000" height={80} width={80} />;
}

export default Loader;
