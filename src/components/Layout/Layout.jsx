import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export default function Layout() {
  return (
      <> 
     <div>
        <NavLink to="/">
          <span>Home</span>         
        </NavLink>
        <NavLink to="/catalog">
          <span>Catalog</span>         
        </NavLink>     
      </div>      
      <Suspense fallback={'Loading...'}>
        <main>
          <Outlet />
        </main>
      </Suspense>     
    </>
  );
}