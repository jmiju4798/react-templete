import { Outlet } from 'react-router-dom';
import GuideSidebar from './GuideSidebar';
import GuideHeader from './GuideHeader';

export default function GuideLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <GuideHeader />
      
      <div className="flex flex-1">
        <GuideSidebar />
        
        <main className="flex-1 p-6 bg-slate-50 dark:bg-slate-950">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
