import { useRouteError, isRouteErrorResponse, Link } from 'react-router-dom';

const Error: React.FC = () => {
  const error = useRouteError();
    
  if (isRouteErrorResponse(error) && error.status === 400) {
    return (
      <main className="">
        <div className="">
          <p className="">404</p>
          <h1 className="">
            page not found
          </h1>
          <p className="">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="">
            <Link to="/" className="">
              go back home
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="">
      <h4 className="">there was an error...</h4>
    </main>
  );
};
export default Error;
