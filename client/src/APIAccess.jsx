import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ascetic } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const APIAccess = function APIAccess() {
  const [testerOpen, setTesterOpen] = useState(false);

  const bottomNav = [
    ['History', './history'],
    ['Changelog', './changelog'],
    ['API Access', './api-access'],
    ['FAQ', 'https://thecodeblog.net/faq'],
    ['Contact', 'mailto: melvinchia623600@gmail.com'],
  ];

  const JSONPayloadData = {
    seed: 'John Doe',
    type: 'bauhaus',
    size: 128,
    border: 'full',
    palette: ['#a31a2e', '#f99937', '#f0c663', '#6ea06b', '#26624e'],
  };

  const JSONResponseData = {
    status: 200,
    requestURL: 'https://avatar-gen.thecodeblog.net/api',
    data: {
      result: '<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" width="128" height="128"><g><rect width="80" height="80" fill="rgb(159,8,32)"></rect><rect x="34" y="0" width="80" height="10" fill="rgb(244,190,90)" transform="translate(4 -4) rotate(28 40 40)"></rect><rect x="27" y="39" width="80" height="10" fill="rgb(109,160,101)" transform="translate(4 -4) rotate(48 40 40)"></rect><circle cx="47" cy="25" fill="rgb(9,92,61)" r="16" transform="translate(6 6)"></circle><line x1="56" y1="36" x2="4" y2="136" stroke-width="2" stroke="rgb(252,242,157)" transform="translate(-4 4) rotate(19 40 40)"></line><line x1="63" y1="46" x2="26" y2="107" stroke-width="2" stroke="rgb(109,160,101)" transform="translate(-4 4) rotate(59 40 40)"></line></g></svg>',
    },
  };

  return (
    <div className="w-full flex items-center justify-center flex-col p-12 pb-0 text-gray-700">
      <div className="w-full sm:w-3/4 lg:w-1/2 tracking-wide">
        <h1 className="font-bold text-5xl text-blue-500">Avatar Generator API</h1>
        <p className="mt-8">
          {/* eslint-disable-next-line max-len */}
          Avatar Gen has a REST API. The API allows you to access all the features that you see on Avatar Gen.
          <br />
          <br />
          {/* eslint-disable-next-line max-len */}
          The API is free for personal and non-commercial use. If you&#39;re looking to use it in a commercial application, get in touch by email:
          {' '}
          <span className="font-medium text-blue-500">support@thecodeblog.net</span>
          .
        </p>
        <div className="w-full flex justify-center">
          <button className="text-white bg-blue-500 rounded-md py-3 mt-6 px-12 text-xl font-medium tracking-wider shadow-md hover:bg-blue-600 transition-all" type="button" onClick={() => setTesterOpen(true)}>Try it now</button>
        </div>
        <h2 className="w-full font-semibold text-3xl tracking-wide mt-8 mb-4">API Entrypoint</h2>
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
        <h2 className="w-full font-semibold text-2xl mt-8 mb-4">Request Payload</h2>
        <table className="w-full rounded-md overflow-hidden border border-gray-300">
          <tr className="font-semibold bg-gray-100 border-b border-gray-300">
            <td className="p-4" colSpan="2">Required parameters</td>
          </tr>
          <tr>
            <td className="p-4 bg-gray-100 font-code font-medium w-1/3">seed</td>
            <td className="p-4 w-2/3">
              <span className="font-bold font-code mb-2 block">string</span>
              {/* eslint-disable-next-line max-len */}
              This parameters specifies seed of the random number generator that ensures the uniqueness of generated avatars.
            </td>
          </tr>
          <tr className="border-t border-gray-300">
            <td className="p-4 bg-gray-100 font-code font-medium w-1/3">type</td>
            <td className="p-4 w-2/3">
              <span className="font-bold font-code mb-2 block">string</span>
              {/* eslint-disable-next-line max-len */}
              This parameters specifies the type of avatar to generate. Below is a list of possible values:
              <ul className="ml-4 mt-3 list-disc">
                <li><code>pixels</code></li>
                <li><code>rings</code></li>
                <li><code>bauhaus</code></li>
                <li><code>letter</code></li>
                <li><code>identicon</code></li>
              </ul>
            </td>
          </tr>
          <tr className="font-semibold bg-gray-100 border-b border-t border-gray-300">
            <td className="p-4" colSpan="2">Optional parameters</td>
          </tr>
          <tr className="border-t border-gray-300">
            <td className="p-4 bg-gray-100 font-code font-medium w-1/3">size</td>
            <td className="p-4 w-2/3">
              <span className="font-bold font-code mb-2 block">number</span>
              {/* eslint-disable-next-line max-len */}
              this parameters specifies the size of the generated avatar, in
              {' '}
              <code>px</code>
              . Default set to
              {' '}
              <code>128</code>
              .
            </td>
          </tr>
          <tr className="border-t border-gray-300">
            <td className="p-4 bg-gray-100 font-code font-medium w-1/3">palette</td>
            <td className="p-4 w-2/3">
              <span className="font-bold font-code mb-2 block">Array(5)</span>
              {/* eslint-disable-next-line max-len */}
              An array of color in form of hex value to specify the color palette to be used in avatar generation. A random color palette will be used by default.
            </td>
          </tr>
        </table>
        <h2 className="w-full font-semibold text-3xl mt-8 mb-4">Example</h2>
        <p className="my-4">
          {/* eslint-disable-next-line max-len */}
          Let&#39;s say you want to generate an avatar for
          {' '}
          <span className="font-medium text-blue-500">John Doe</span>
          {' '}
          and pass in the payload below:
        </p>
        <pre className="bg-gray-100 w-full p-4 rounded-md shadow-md">
          <SyntaxHighlighter language="javascript" style={ascetic} className="font-code font-normal" customStyle={{ backgroundColor: 'rgb(243, 244, 246)' }}>
            {JSON.stringify(JSONPayloadData, null, '\t')}
          </SyntaxHighlighter>
        </pre>
        <p className="my-4">
          {/* eslint-disable-next-line max-len */}
          The response for this request will look like:
        </p>
        <pre className="bg-gray-100 w-full p-4 rounded-md shadow-md">
          <SyntaxHighlighter language="javascript" style={ascetic} className="font-code font-normal" customStyle={{ backgroundColor: 'rgb(243, 244, 246)' }}>
            {JSON.stringify(JSONResponseData, null, '\t')}
          </SyntaxHighlighter>
        </pre>
        <h2 className="w-full font-semibold text-3xl mt-8 mb-4">Support</h2>
        <p className="my-4">
          <span className="font-medium text-blue-500">Contact us</span>
          {' '}
          if you have any questions regarding our API service. Before that, please check out our
          {' '}
          <a href="../faq" className="font-medium text-blue-500">FAQ</a>
          .
        </p>
      </div>
      <div className={`w-full ${testerOpen ? 'h-screen bg-darktransparent' : 'h-0 opacity-0 bg-transparent'} fixed left-0 top-0 overflow-hidden duration-300 transition-colors flex items-center justify-center`}>
        <div className={`bg-white w-full rounded-xl flex items-center justify-center transition-all relative p-8 shadow-xl m-24 duration-300 transform ${testerOpen ? 'translate-y-0' : 'translate-y-full'}`} style={{ height: 'calc(100vh - 8rem)' }}>
          <button type="button" className="absolute top-8 right-7" onClick={() => setTesterOpen(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" ariaHidden="true" role="img" width="1.6em" height="1.6em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
              <g fill="none" stroke="#D1D5DB" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18" />
                <path d="M6 6l12 12" />
              </g>
            </svg>
          </button>
          <p className="text-gray-300 text-6xl tracking-wide font-medium">Coming soon...</p>
        </div>
      </div>
      <div className="w-full flex flex-wrap justify-center gap-x-4 mb-4 mt-8">
        {bottomNav.map(([e, l], i) => (
          <>
            {i !== 0 && '|'}
            <a href={l} className="text-blue-500 transition-all hover:underline hover:text-blue-600 whitespace-nowrap">{e}</a>
          </>
        ))}
      </div>
    </div>
  );
};

export default APIAccess;
