import React from 'react';

const APIAccess = function APIAccess() {
  return (
    <div className="w-full flex items-center justify-center p-12 text-gray-700">
      <div className="w-1/2 tracking-wide">
        <h1 className="font-bold text-5xl text-blue-500">Avatar Generator API</h1>
        <p className="mt-8">
          {/* eslint-disable-next-line max-len */}
          Avatar Gen has a REST API. The API allows you to access all the features that you see on Avatar Gen.
          <br />
          <br />
          {/* eslint-disable-next-line max-len */}
          The API is free for personal and non-commercial use. If you&#39;re looking to use it in a commercial application, get in touch by email: support@thecodeblog.net
        </p>
        <h2 className="w-full font-semibold text-3xl mt-8 mb-4">API Entrypoint</h2>
        <p className="my-4">
          {/* eslint-disable-next-line max-len */}
          A API endpoint is a base URL that specifies the network address of an API. One API might have multiple API endpoints. Here is the one and only API endpoint of Avatar Gen:
        </p>
        <div className="flex p-4 items-center justify-between w-full shadow-md rounded-md overflow-hidden bg-gray-100 text-gray-700 =">
          <code>
            <span className="font-semibold text-gray-400">GET</span>
            {' '}
            https://avatar-gen.thecodeblog.net/api
          </code>
          <button type="button">
            <svg className="text-gray-400" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1.6em" height="1.6em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z" fill="currentColor" /></svg>
          </button>
        </div>
        <h2 className="w-full font-semibold text-2xl mt-8 mb-4">Request Parameters</h2>
        <table className="w-full rounded-md overflow-hidden border border-gray-300">
          <tr className="font-semibold bg-gray-100 border-b border-gray-300">
            <td className="p-4" colSpan="2">Required parameters</td>
          </tr>
          <tr>
            <td className="p-4 bg-gray-100 font-code font-medium w-1/3">seed</td>
            <td className="p-4 w-2/3">
              <span className="font-bold font-code mb-2 block">string</span>
              {/* eslint-disable-next-line max-len */}
              This parameters specifies the seed of the random number generator that ensures the uniqueness of generated avatars.
            </td>
          </tr>
          <tr className="font-semibold bg-gray-100 border-b border-t border-gray-300">
            <td className="p-4" colSpan="2">Optional parameters</td>
          </tr>
          <tr>
            <td className="p-4 bg-gray-100 font-code font-medium w-1/3">border</td>
            <td className="p-4 w-2/3">
              <span className="font-bold font-code mb-2 block">string</span>
              {/* eslint-disable-next-line max-len */}
              This parameters specified the border radius of the generated avatar. Default set to
              {' '}
              <code>full</code>
              . Below are the list of valid values:
              <ul className="ml-4 mt-3 list-disc">
                <li><code>full</code></li>
                <li><code>edge</code></li>
                <li><code>none</code></li>
              </ul>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default APIAccess;
