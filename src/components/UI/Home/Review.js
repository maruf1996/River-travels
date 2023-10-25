/* eslint-disable @next/next/no-img-element */

const Review = ({ data }) => {
  // console.log(data);
  const reviews = data?.data;
  return (
    <section className="my-12 lg:my-20 dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex flex-col items-center mx-auto md:px-4">
        <h1 className="px-4 text-3xl lg:text-4xl font-semibold leadi text-center">
          What our customers are saying about us
        </h1>
      </div>
      <div className="container flex flex-col items-center justify-center mx-auto md:flex-row md:flex-wrap md:justify-evenly px-2 lg:px-10">
        {reviews?.slice(0, 6).map((review) => (
          <div key={review?.id}>
            <div className="flex flex-col lg:max-w-sm mx-4 my-6 shadow-lg">
              <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-900">
                <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="w-8 h-8 dark:text-violet-400"
                  >
                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                  </svg>
                  {review.description}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="absolute right-0 w-8 h-8 dark:text-violet-400"
                  >
                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                  </svg>
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-400 dark:text-gray-900">
                <img
                  src="https://source.unsplash.com/50x50/?portrait?4"
                  alt=""
                  className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full"
                />
                <p className="text-xl font-semibold leadi">{review.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Review;
