import React from 'react';

const Typography = () => {
  return (
    <div className="max-w-5xl mx-auto p-4">
      <div>
        <h1 className="text-4xl font-bold mb-12">Typography</h1>
        <h2 className="text-3xl font-bold mb-4">Narrow Page Template</h2>
        <p className="text-lg mb-8">This is a narrow page template. Ideal for text-heavy pages without a sidebar.</p>
      </div>
      <div className="space-y-6">
        <div>
          <h1 className="text-xl font-bold mb-3">Duden flows by their place</h1>
          <p className="text-lg mb-4">
            Far far away, <b>behind the word mountains</b>, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it <a href="#" className="text-pink-500 underline hover:no-underline hover:text-pink-600">with the necessary regelialia</a>.
          </p>
        </div>
        <div>
          <h1 className="text-xl font-semibold mb-4">Large language ocean</h1>
          <ul className="list-disc list-inside space-y-1 pl-4">
            <li className="text-lg">The Big Oxmox advised her</li>
            <li>Not to do so, because there were</li>
            <li>Thousands of bad Commas</li>
            <li>Wild Question Marks</li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl font-semibold mb-4">The Big Oxmox advised</h1>
          <ol className="list-decimal list-inside space-y-1 pl-4">
            <li>She packed her seven versalia</li>
            <li>Put her initial into the belt</li>
            <li>And made herself on the way</li>
            <li>When she reached the first hill</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Typography;

