import { Switch, Route, Router as WouterRouter } from 'wouter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { AppProvider } from '@/contexts/AppContext';
import BottomNav from '@/components/BottomNav';
import HomePage from '@/pages/home';
import ScannerPage from '@/pages/scanner';
import HistoryPage from '@/pages/history';
import ProfilePage from '@/pages/profile';
import RecipePage from '@/pages/recipe';
import RecipesPage from '@/pages/recipes';
import PrivacyPage from '@/pages/privacy';
import LegalPage from '@/pages/legal';
import ContactPage from '@/pages/contact';
import DownloadPage from '@/pages/download';
import NotFound from '@/pages/not-found';

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/scanner" component={ScannerPage} />
      <Route path="/history" component={HistoryPage} />
      <Route path="/profile" component={ProfilePage} />
      <Route path="/recipe/:id" component={RecipePage} />
      <Route path="/recipes" component={RecipesPage} />
      <Route path="/privacy" component={PrivacyPage} />
      <Route path="/legal" component={LegalPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/download" component={DownloadPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AppProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
            <div className="max-w-lg mx-auto min-h-screen relative">
              <Router />
              <BottomNav />
            </div>
          </WouterRouter>
        </AppProvider>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
