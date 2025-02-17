//~ Import from Flowbite
import { Button, Card } from 'flowbite-react';

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
      <div className='flex  flex-worp gap-4'>
        {displayPost.map((post) => (
          <Card
            key={post.id}
            className='relative rounded-xl w-72 h-[550px] flex flex-col'
            renderImage={() => (
              <img
                src={post.postImage}
                alt='post'
                className='h-3/4 object-cover object-center w-full rounded-t-xl'
              />
            )}
          >
            <h5 className='text-xl font-bold tracking-tight text-gray-900 dark:text-white'>
              {post.postTitle.slice(0, 20) +
                (post.postTitle.length > 20 ? '...' : '')}
            </h5>
            <div className='flex flex-col justify-center border-t-2 py-3 border-b-2 border-t-sky-500 border-b-sky-500'>
              <p className='text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2'>
                Location : -{' '}
                <span className='text-sky-400 text-md font-semibold'>
                  {post.postLocation}
                </span>
              </p>
              <p className='text-sm font-semibold text-gray-700 dark:text-gray-300'>
                Category : -{' '}
                <span className='text-sky-400 text-md font-semibold'>
                  {' '}
                  {post.postCategory}
                </span>
              </p>
            </div>
            <p className='font-normal text-gray-700 dark:text-gray-400'>
              {contentExpaneded
                ? post.postContent
                : post.postContent.slice(0, 100) +
                  (post.postContent.length > 100 ? '...' : '')}
            </p>
            {post.postContent.length > 100 && (
              <button
                type='button'
                onClick={() => setContentExpanded(!contentExpaneded)}
                className=' absolute bottom-2 self-center whitespace-nowrap text-xl text-white font-semibold bg-gradient-to-r from-blue-600 to-blue-900 py-1 px-3 rounded my-2'
              >
                {contentExpaneded ? 'Read Less' : 'Read More'}
              </button>
            )}
          </Card>
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
