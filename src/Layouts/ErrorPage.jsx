import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex justify-center mt-72">
      <div>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <Link to="/">
          <button className="bg-green-400 p-4 rounded-lg text-white font-semibold">
            Go to HomePage
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
