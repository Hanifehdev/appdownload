import './globals.css';

export const metadata = {
  title: 'دانلود مستقیم نرم افزار ها',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="bg-slate-800 text-slate-100 font-vazir">
        <div className="container mx-auto px-4 lg:px-0">{children}</div>
      </body>
    </html>
  );
}
