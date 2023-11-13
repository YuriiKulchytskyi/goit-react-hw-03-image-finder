import {Oval} from 'react-loader-spinner';

const CustomLoader = () => {
  return (
    <div className="Loader-container">
      <Oval type="Oval" color="#00BFFF" height={80} width={80} />
    </div>
  );
};

export default CustomLoader;
