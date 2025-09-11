import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8">QR Generator</h1>
        <p className="text-lg text-gray-600 mb-8">QR 코드 생성기 앱이 곧 출시됩니다!</p>
        <Button variant="destructive">Hello</Button>
      </div>
    </div>
  );
}
