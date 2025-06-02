import HeaderComponent from '../components/DynamicComponents/HeaderComponent';
import UpperFooterComponent from '../components/Footer/UpperFooter';
import LowerFooterComponent from '../components/Footer/LowerFooter';
import BackToTopButton from '../components/AppComponents/BackToTop';
import ClientWrapper from '../lib/hooks/clientWrapper';
import './globals.css';

export const metadata = {
  title: 'دانشگاه جامع انقلاب اسلامی',
  description: 'دانشگاه جامع انقلاب اسلامی',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <ClientWrapper> 
        <HeaderComponent />
        </ClientWrapper>

        {children}
        <UpperFooterComponent />
        <LowerFooterComponent />
        <BackToTopButton />
      </body>
    </html>
  );
}
