//~ Import from Flowbite
import { Button } from 'flowbite-react';

import { Link } from 'react-router-dom';

// ~ Import All Posts
import allPosts from '../../AllPost';
import { useState } from 'react';

// # Home Main Component
const HomeComponent = () => {
  // & Pagination Or Visiblity with limits
  const [visiblePost, setVisiblePost] = useState(4);

  // + Load More Post Function
  const visibleMorePost = () => {
    setVisiblePost((prevValue) => prevValue + 4);
  };
  // - Load Less Post Function
  const visibleLessPost = () => {
    setVisiblePost((prevValue) => prevValue - 4);
  };
  // * Display Post with Limits
  const displayPost = allPosts.slice(0, visiblePost);

  // ? Content Expanded
  const [contentExpaneded, setContentExpanded] = useState(false);

  // # Render With Return
  return (
    <div className='flex flex-col items-center justify-center w-full'>
      <div className='flex flex-wrap gap-3 justify-center my-3'>
        {displayPost.map((post) => (
          <div className='' key={post.id}>
            <div className='group relative w-full border h-[500px] overflow-hidden rounded-lg sm:w-[350px] border-teal-500 hover:border-2 transition-all duration-300'>
              <Link to={`/posts/${post.slug}`}>
                <img
                  alt='recentpost'
                  src={post.postImage}
                  className='h-[260px] w-full object-cover group-hover:h-[200px] transition-all duration-300 z-20'
                />
              </Link>
              <div className='p-3 flex flex-col gap-2'>
                <p className='text-xl font-bold tracking-tight text-gray-900 dark:text-white'>
                  {post.postTitle.slice(0, 30) +
                    (post.postTitle.length > 30 ? '...' : '')}
                </p>
                <p className='text-lg font-bold tracking-tight text-gray-900 dark:text-white'>
                  Tag : -{' '}
                  {post.postTag.slice(0, 30) +
                    (post.postTag.length > 30 ? '...' : '')}
                </p>
                <p className='text-sm font-semibold text-gray-700 dark:text-gray-300'>
                  Category : -{' '}
                  <span className='text-sky-400 text-md font-semibold'>
                    {' '}
                    {post.postCategory}
                  </span>
                </p>
                <p className='text-sm font-semibold text-gray-700 dark:text-gray-300'>
                  Location : -{' '}
                  <span className='text-sky-400 text-md font-semibold'>
                    {' '}
                    {post.postLocation}
                  </span>
                </p>
                <p className='font-normal text-gray-700 dark:text-gray-400 '>
                  {contentExpaneded
                    ? post.postContent
                    : post.postContent.slice(0, 130) +
                      (post.postContent.length > 130 ? '...' : '')}
                </p>
                {post.postContent.length > 130 && (
                  <Link
                    to={`/posts/${post.slug}`}
                    className='z-10 absolute group-hover:bottom-0 bottom-[-200px] left-0 right-0 border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2'
                  >
                    {contentExpaneded ? 'Read Less' : 'Read More'}
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='my-5'>
        {visiblePost < allPosts.length ? (
          <Button
            onClick={visibleMorePost}
            className='self-center whitespace-nowrap text-xl text-white font-semibold bg-gradient-to-r from-blue-600 to-blue-900 py-1 px-3 rounded'
          >
            Load More Post
          </Button>
        ) : (
          <Button
            onClick={visibleLessPost}
            className='self-center whitespace-nowrap text-xl text-white font-semibold bg-gradient-to-r from-blue-600 to-blue-900 py-1 px-3 rounded'
          >
            Load Less Post
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeComponent;
