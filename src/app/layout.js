import './globals.css';

export const metadata = {
  title: 'دانلود مستقیم نرم افزار ها',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="bg-slate-800 text-slate-100 font-vazir">{children}</body>
    </html>
  );
}
