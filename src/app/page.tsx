import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8">QR Generator</h1>
        <p className="text-lg text-gray-600 mb-8">QR 코드 생성기 앱이 곧 출시됩니다!</p>
        <div className="flex gap-4 justify-center items-center">
          <Button>Hello</Button>
          <Badge>New</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </div>
      </div>
    </div>
  );
}
