import { QRCodeWithLogo } from '@/components/QRCodeWithLogo';

export const metadata = {
  robots: "noindex, nofollow",
};

export default function QRCodePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Donează pentru Educație
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          Scanează codul QR pentru a accesa pagina de donații și a susține educația în România
        </p>

        <div className="flex justify-center mb-8">
          <QRCodeWithLogo
            url="https://magheru68.ro/doneaza"
            size={400}
            logoSize={100}
            className="mx-auto"
          />
        </div>

        <div className="text-sm text-gray-500 max-w-xs mx-auto">
          <p className="mb-2">
            <strong>URL:</strong> https://magheru68.ro/doneaza
          </p>
          <p>
            Fundația Magheru 68 - Educație pentru toți
          </p>
        </div>
      </div>
    </div>
  );
}