import { Button } from "@/components/ui/button"

const Index = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">HELLO WORLD</h1>
        <p className="text-xl text-gray-600 mb-6">Your simple app with a button</p>
        <Button onClick={handleClick}>Click me!</Button>
      </div>
    </div>
  );
};

export default Index;