import React from 'react';

const Changelog = function Changelog() {
  return (
    <div className="w-full px-12 sm:px-0 sm:w-3/4 lg:w-1/2 min-h-screen py-16 flex flex-col items-center gap-8 justify-center text-gray-700 tracking-wide">
      <h1 className="text-5xl text-blue-500 font-bold text-left w-full -ml-1 lg:text-center">Changelog</h1>
      <div>
        <h2 className="text-3xl font-semibold mb-2">v 1.0</h2>
        <ul className="list-disc ml-4">
          <li>Added three different variety of avatars.</li>
          <li>Users are able to generate random color palettes with just one button.</li>
          <li>
            Users are able to enter anything they want and get a special avatar specific to
            them.
          </li>
          <li>
            This page is responsive so that users can use visit it through all devices
            regardless of their screen resolution.
          </li>
          <li>
            Production code was built and deployed to 
            {" "}
            <a href="https://avatar-gen.thecodeblog.net" className="text-blue-500 font-medium" target="_blank" rel="noreferrer">https://avatar-gen.thecodeblog.net</a>
            .
          </li>
        </ul>
      </div>
      <div>
        <h2 className="text-3xl font-semibold mb-2">v 1.1</h2>
        <ul className="list-disc ml-4">
          <li>Navigation bar at the bottom was added.</li>
          <li>Added version number at the right hand side of the header.</li>
          <li>Users are now able to change the border radius of the avatar.</li>
          <li>Changelog was written with ❤️.</li>
          <li>Minor bug fixed.</li>
        </ul>
      </div>
      <div>
        <h2 className="text-3xl font-semibold mb-2">pre release 1.2</h2>
        <ul className="list-disc ml-4">
          <li>Animations was added to handile long loadng time.</li>
          <li>API Documentation was added.</li>
          <li>Added new variety: <b>Letter</b>.</li>
          <li>Smooth transition between border radius changing was added.</li>
        </ul>
      </div>
    </div>
  );
};

export default Changelog;
