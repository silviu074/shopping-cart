import React from 'react';

export default function Header(props) {
  return (
    <header className="block row center">
      <div>
        
          <h1>Special Offers</h1>
        
      </div>
      <div>
        <h3>
          Cart Items{' '}
          {props.countCartItems ? (
            <button className="badge"  onClick={() => alert('Your cart products are on the right side of this page')}>{props.countCartItems}</button>
          ) : (
            ''
          )}
        </h3>{' '}
      </div>
    </header>
  );
}
