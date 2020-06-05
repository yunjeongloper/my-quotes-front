import React, {useEffect, useState, useRef} from 'react';
import './index.scss';

const DetailModal = ({isShow, object, closeFn}) => {
  const [text, setText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const typingInterval = useRef(false);
  const typeIndex = useRef(false);
  const SPEED = 50;

  useEffect(() => {
    if (isShow && object && object.content) {
      let i = 0;
      setIsLoading(true);

      typingInterval.current = setInterval(() => {
        if (i > object.content.length) {
          setIsLoading(false);
          clearInterval(typingInterval.current);
        }
        setText((ls) => ls + object.content.charAt(i));
        typeIndex.current = i;
        i++;
      }, SPEED);

      return () => {
        clearInterval(typingInterval.current);
        setIsLoading(false);
        setText('');
      };
    }
  }, [isShow]);

  const handleClickModal = () => {
    if (isLoading) {
      const full = object.content;
      clearInterval(typingInterval.current);
      setIsLoading(false);
      setText((ls) => ls + full.substring(typeIndex.current + 1));
    }
  };

  return (
    <div
      className={`detail-modal ${isShow ? 'show' : ''} ${
        isLoading ? 'loading' : ''
      }`}
      onClick={handleClickModal}>
      <button className="close" onClick={() => closeFn()}>
        X
      </button>
      <div className="text">
        <span>{text}</span>
      </div>
    </div>
  );
};

export default DetailModal;
