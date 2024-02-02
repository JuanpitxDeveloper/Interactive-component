import React from 'react';

interface Props {
  submittedSelection: number | null;
}

const SecondArticle: React.FC<Props> = ({ submittedSelection }) => {
  return (
    <article className={` flex items-center bg-[#252d37] rounded-xl w-[338px] h-[360px] justify-center flex-col pt-[32px] pb-[32px] ${submittedSelection !== null ? '' : 'hidden'}`}>
    <div className='w-[200px] h-[100px]'><img src="/illustration-thank-you.svg" alt="" /></div>
    <h1 className='font-bold text-white'>¡Felicidades!</h1>
    <p>Tu selección fue: {submittedSelection !== null ? submittedSelection : 'Ninguna'}</p>
    </article>
  );
}

export default SecondArticle;
