import React from 'react';
import LoadingSpinner from 'react-spinners-components';
import Marquee from 'react-fast-marquee';
import Link from 'next/link';

const HeadLines = ({ news }) => {
  const head = [
    { title: 'OnePlus 11r Solar Red with 512 GB internal storage announced' },
    { title: 'OnePlus 11r Solar Red with 512 GB internal storage announced' },
    { title: 'OnePlus 11r Solar Red with 512 GB internal storage announced' },
    { title: 'OnePlus 11r Solar Red with 512 GB internal storage announced' },
    { title: 'OnePlus 11r Solar Red with 512 GB internal storage announced' },
    { title: 'OnePlus 11r Solar Red with 512 GB internal storage announced' }
  ];

  return (
    <div className='bg-white shadow flex'>
      <div className='flex md:w-[170px] w-full bg-[#dddddd] relative pr-4'>
        <div className='md:pl-8 pl-4 w-full py-2 flex justify-start items-center gap-x-1'>
          <span><LoadingSpinner type='Ripple' colors={['#800000', '#c80000']} size={'30px'} /></span>
          <h2 className='text-[#333333] font-semibold text-lg'>শিরোনাম</h2>
        </div>
      </div>
      <div className='flex-1 pt-4'>
        <Marquee 
          speed={50} 
          gradient={false}
          className="text-l font-semibold"
        >
          {
            Object.keys(news).length > 0 &&
            Object.keys(news).map((category, i) => (
              <React.Fragment key={i}>
                {news[category].map((newsItem, j) => (
                  <Link
                    key={newsItem.slug}
                    href={`/news/${newsItem.slug}`}
                    className='px-4 hover:text-[#c80000]'
                  >
                    {newsItem.title}
                  </Link>
                ))}
              </React.Fragment>
            ))
          }
        </Marquee>
      </div>
    </div>
  );
};

export default HeadLines;
