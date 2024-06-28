import React from "react";

const Element = () => {
  return (
    <div>
      <h1>Elements</h1>
      <h3>Alert message</h3>
      <div className="bg-blue-100">
        <img src="" alt="" />
        <div>
          <h4>Info Message</h4>
          <p>
            The Big Oxmox advised her not to do so, because there were thousands
            of bad Commas, wild Question Marks and devious Semikoli, but the
            Little Blind Text didn’t listen.
          </p>
        </div>
      </div>
      <div className="bg-green-100">
        <img src="" alt="" />
        <div>
          <h1>Success Message</h1>
          <p>
            She packed her seven versalia, put her initial into the belt and
            made herself on the way. When she reached the first hills of the
            Italic Mountains, she had a last view back on the skyline of her
            hometown.
          </p>
        </div>
      </div>

      <div className="bg-red-100">
        <img src="" alt="" />
        <div>
          <h1>Warning Message</h1>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </p>
        </div>
      </div>
      <h3>Button</h3>
      <div>
        <button>SMALL BUTTON</button>
        <button>MEDIUM BUTTON</button>
        <button>LARGE BUTTON</button>
      </div>
      <h3>Counter</h3>
      <div>
        <h1>60%</h1>
        <p>She packed her seven versalia</p>
      </div>
      <div>
        <h1>123+</h1>
        <p>A small river named Duden</p>
      </div>
      <div>
        <h1>500%</h1>
        <p>Far far away, behind the word</p>
      </div>
      <h3>CTA</h3>
      <div>
        <h3>Did You Know?</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa.
        </p>
        <button>LEARN MORE</button>
      </div>
      <h3>Feature</h3>
      <div>
        <img src="" alt="" />
        <div>
          <h3>Hairdresser</h3>
          <p>A hairdresser is a person whose occupation is to cut or style hair in order to change or maintain a person’s image.</p>
          <a>Learn more</a>
        </div>
      </div>
      <div>
        <img src="" alt="" />
        <div>
          <h3>Cosmetics</h3>
          <p>Cosmetics are substances or products used to enhance or alter the appearance of the face or fragrance and texture of the body.</p>
          <a>Learn more</a>
        </div>
      </div>
      <div className="max-w-md mx-auto p-6">
      <dl className="space-y-4">
        <div className="border-b border-gray-200 pb-4">
          <dt className="text-lg font-medium">Vivien Hawkins</dt>
          <dd className="text-gray-600">(123) 456 789</dd>
        </div>
        <div className="border-b border-gray-200 pb-4">
          <dt className="text-lg font-medium">Rudy Martinez</dt>
          <dd className="text-gray-600">(321) 789 456</dd>
        </div>
        <div className="border-b border-gray-200 pb-4">
          <dt className="text-lg font-medium">Matthew Hernandez</dt>
          <dd className="text-gray-600">(789) 465 132</dd>
        </div>
        <div className="border-b border-gray-200 pb-4">
          <dt className="text-lg font-medium">Debra McDaniel</dt>
          <dd className="text-gray-600">(987) 123 654</dd>
        </div>
      </dl>
    </div>
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Pricing Table</h2>
      <div className="bg-gray-100 p-6 rounded-lg mb-4">
        <h3 className="text-xl font-semibold mb-2">Massage</h3>
        <p className="text-3xl font-bold text-gray-800 mb-2">$40</p>
        <p className="text-gray-600 mb-4">per 30 minutes</p>
        <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
        <a href="#" className="text-pink-600 hover:text-pink-700 font-medium">LEARN MORE</a>
      </div>
      <div className="bg-gray-100 p-6 rounded-lg mb-4">
        <h3 className="text-xl font-semibold mb-2">Aromatherapy</h3>
        <p className="text-3xl font-bold text-gray-800 mb-2">$30</p>
        <p className="text-gray-600 mb-4">per 30 minutes</p>
        <p className="text-gray-700 mb-4">Curabitur ullamcorper ultricies
Nam eget dui etiam rhoncus
Maecenas tempus tellus eget
Adipiscing sem neque sed</p>
        <a href="#" className="text-pink-600 hover:text-pink-700 font-medium">LEARN MORE</a>
      </div>
    </div>
    </div>
  );
};

export default Element;
